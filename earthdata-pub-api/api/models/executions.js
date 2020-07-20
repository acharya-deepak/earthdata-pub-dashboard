'use strict';

const get = require('lodash/get');
const pLimit = require('p-limit');

const StepFunctions = require('earthdata-pub-api/aws-client/StepFunctions');
const { getCollectionIdFromMessage } = require('earthdata-pub-api/message/Collections');
const {
  getMessageExecutionArn,
  getMessageExecutionName
} = require('earthdata-pub-api/message/Executions');
const { isNil, removeNilProperties } = require('earthdata-pub-api/common/util');

const executionSchema = require('./schemas').execution;
const Manager = require('./base');
const { parseException } = require('../lib/utils');

class Execution extends Manager {
  constructor() {
    super({
      tableName: process.env.ExecutionsTable,
      tableHash: { name: 'arn', type: 'S' },
      schema: executionSchema
    });
  }

  /**
   * Generate an execution record from a EarthdataPub message.
   *
   * @param {Object} earthdatapubMessage - A EarthdataPub message
   * @returns {Object} An execution record
   */
  static generateRecord(earthdatapubMessage) {
    const arn = getMessageExecutionArn(earthdatapubMessage);
    if (isNil(arn)) throw new Error('Unable to determine execution ARN from EarthdataPub message');

    const status = get(earthdatapubMessage, 'meta.status');
    if (!status) throw new Error('Unable to determine status from EarthdataPub message');

    const now = Date.now();
    const workflowStartTime = get(earthdatapubMessage, 'earthdatapub_meta.workflow_start_time');
    const workflowStopTime = get(earthdatapubMessage, 'earthdatapub_meta.workflow_stop_time');

    const record = {
      name: getMessageExecutionName(earthdatapubMessage),
      arn,
      asyncOperationId: get(earthdatapubMessage, 'earthdatapub_meta.asyncOperationId'),
      parentArn: get(earthdatapubMessage, 'earthdatapub_meta.parentExecutionArn'),
      execution: StepFunctions.getExecutionUrl(arn),
      tasks: get(earthdatapubMessage, 'meta.workflow_tasks'),
      error: parseException(earthdatapubMessage.exception),
      type: get(earthdatapubMessage, 'meta.workflow_name'),
      collectionId: getCollectionIdFromMessage(earthdatapubMessage),
      status,
      createdAt: workflowStartTime,
      timestamp: now,
      updatedAt: now,
      originalPayload: status === 'running' ? earthdatapubMessage.payload : undefined,
      finalPayload: status === 'running' ? undefined : earthdatapubMessage.payload,
      duration: isNil(workflowStopTime) ? 0 : (workflowStopTime - workflowStartTime) / 1000
    };

    return removeNilProperties(record);
  }

  /**
   * Scan the Executions table and remove originalPayload/finalPayload records from the table
   *
   * @param {integer} completeMaxDays - Maximum number of days a completed
   *   record may have payload entries
   * @param {integer} nonCompleteMaxDays - Maximum number of days a non-completed
   *   record may have payload entries
   * @param {boolean} disableComplete - Disable removal of completed execution
   *   payloads
   * @param {boolean} disableNonComplete - Disable removal of execution payloads for
   *   statuses other than 'completed'
   * @returns {Promise<Array>} - Execution table objects that were updated
   */
  async removeOldPayloadRecords(completeMaxDays, nonCompleteMaxDays,
    disableComplete, disableNonComplete) {
    const msPerDay = 1000 * 3600 * 24;
    const completeMaxMs = Date.now() - (msPerDay * completeMaxDays);
    const nonCompleteMaxMs = Date.now() - (msPerDay * nonCompleteMaxDays);
    const expiryDate = completeMaxDays < nonCompleteMaxDays ? completeMaxMs : nonCompleteMaxMs;
    const executionNames = { '#updatedAt': 'updatedAt' };
    const executionValues = { ':expiryDate': expiryDate };
    const filter = '#updatedAt <= :expiryDate and (attribute_exists(originalPayload) or attribute_exists(finalPayload))';

    const oldExecutionRows = await this.scan({
      names: executionNames,
      filter: filter,
      values: executionValues
    });

    const concurrencyLimit = process.env.CONCURRENCY || 10;
    const limit = pLimit(concurrencyLimit);

    const updatePromises = oldExecutionRows.Items.map((row) => limit(() => {
      if (!disableComplete && row.status === 'completed' && row.updatedAt <= completeMaxMs) {
        return this.update({ arn: row.arn }, {}, ['originalPayload', 'finalPayload']);
      }
      if (!disableNonComplete && !(row.status === 'completed') && row.updatedAt <= nonCompleteMaxMs) {
        return this.update({ arn: row.arn }, {}, ['originalPayload', 'finalPayload']);
      }
      return Promise.resolve();
    }));
    return Promise.all(updatePromises);
  }

  /**
   * Only used for testing
   */
  async deleteExecutions() {
    const executions = await this.scan();
    return Promise.all(executions.Items.map((execution) => super.delete({ arn: execution.arn })));
  }

  /**
   * Get the set of fields which are mutable based on the execution status.
   *
   * @param {Object} record - An execution record
   * @returns {Array} - The array of mutable field names
   */
  _getMutableFieldNames(record) {
    if (record.status === 'running') {
      return ['createdAt', 'updatedAt', 'timestamp', 'originalPayload'];
    }
    return Object.keys(record);
  }

  /**
   * Generate and store an execution record from a EarthdataPub message.
   *
   * @param {Object} earthdatapubMessage - EarthdataPub workflow message
   * @returns {Promise}
   */
  async storeExecutionFromEarthdataPubMessage(earthdatapubMessage) {
    const executionItem = Execution.generateRecord(earthdatapubMessage);

    // TODO: Refactor this all to use model.update() to avoid having to manually call
    // schema validation and the actual client.update() method.
    await this.constructor.recordIsValid(executionItem, this.schema, this.removeAdditional);

    const mutableFieldNames = this._getMutableFieldNames(executionItem);
    const updateParams = this._buildDocClientUpdateParams({
      item: executionItem,
      itemKey: { arn: executionItem.arn },
      mutableFieldNames
    });

    await this.dynamodbDocClient.update(updateParams).promise();
  }
}

module.exports = Execution;

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  listInactiveRequests
} from '../../actions';
import {
  lastUpdated,
  shortDateNoTimeYearFirst,
  bool
} from '../../utils/format';
import List from '../Table/Table';
import Select from 'react-select';
import { strings } from '../locale';
import { workflowOptionNames } from '../../selectors';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Loading from '../LoadingIndicator/loading-indicator';

const breadcrumbConfig = [
  {
    label: 'Dashboard Home',
    href: '/'
  },
  {
    label: 'Requests',
    href: '/requests'
  },
  {
    label: strings.requests_withdrawn2,
    href: '/requests/withdrawn',
    active: true
  }
];

export const tableColumns = [
  {
    Header: 'Data Product Name',
    accessor: row => row.form_data ? row.form_data.data_product_name_value || 'Request Initialized' : 'Request Initialized',
    Cell: row => row.row ? <Link to={{ pathname: `/requests/id/${row.row.original.id}` }} aria-label="View your request details">{row.row.original.form_data ? row.row.original.form_data.data_product_name_value || 'Request Initialized' : 'Request Initialized'}</Link> : 'Request Initialized',
    id: 'name',
    width: 170
  },
  {
    Header: 'Data Producer Name',
    accessor: row => row.form_data ? row.form_data.data_producer_info_name : null,
    Cell: row => row.row ? <Link to={{ pathname: `/requests/id/${row.row.original.id}` }} aria-label="View your request details" id={row.row.original.id}>{row.row.original.form_data ? row.row.original.form_data.data_producer_info_name : null}</Link> : null,
    id: 'data_producer_info_name',
    width: 170
  },
  {
    Header: 'Status',
    accessor: (row) => row.status,
    Cell: row => row.row ? <Link to={{ pathname: `/requests/id/${row.row.original.id}` }} aria-label="View your request details">{row.row.original.status}</Link> : null,
    id: 'status_message',
    width: 170
  },
  {
    Header: 'Workflow',
    accessor: (row) => row.workflow_name,
    Cell: row => row.row.original.workflow_name,
    id: 'workflow_name',
    width: 170
  },
  {
    Header: 'Created',
    accessor: row => shortDateNoTimeYearFirst(row.created_at),
    id: 'created_at',
    width: 110
  },
  {
    Header: 'Latest Edit',
    accessor: row => shortDateNoTimeYearFirst(row.last_change),
    id: 'last_change',
    width: 110
  },
  {
    Header: 'Locked',
    accessor: row => bool(row.lock),
    id: 'lock',
    width: 100
  },
  {
    Header: 'Conversation',
    accessor: (row) => row.conversation_id ? <Link to={{ pathname: `/conversations/id/${row.conversation_id}` }} aria-label="View your conversations">View</Link> : null,
    id: 'conversation_id',
    width: 120
  },
];

class InactiveRequestsOverview extends React.Component {
  constructor () {
    super();
    this.generateQuery = this.generateQuery.bind(this);
    this.state = { producers: [], originalList: {}, list: {} };
    this.handleProducerSelect = this.handleProducerSelect.bind(this);
  }

  async componentDidMount () {
    const { dispatch } = this.props;
    await dispatch(listInactiveRequests());
    const { requests } = this.props;
    const { list } = requests;
    const originalList = this.filter(list);
    this.setState({ originalList: originalList, list: originalList });
  }

  generateQuery () {
    return {};
  }

  filter (list, match) {
    const newList = {};
    const tmp = [];
    let requestSearchValue = '';
    if (document.querySelector('.request-section input.search') !== undefined && document.querySelector('.request-section input.search') !== null) {
      requestSearchValue = document.querySelector('.request-section input.search').value;
    }
    const re = new RegExp(requestSearchValue, 'gi');
    for (const ea in list) {
      const record = list[ea];
      newList[ea] = record;
      for (const r in record) {
        if (record[r].hidden && typeof record[r] === 'object') {
          const prod = { value: record[r].form_data.data_producer_info_name, label: record[r].form_data.data_producer_info_name };
          let dataProduct = record[r].form_data.data_product_name_value;
          if (dataProduct === undefined) {
            dataProduct = 'Request Initialized';
          }
          const isFound = this.state.producers.some(element => {
            if (element.value === prod.value) {
              return true;
            }
            return false;
          });
          if (!isFound && JSON.stringify(prod) !== '{}') {
            this.state.producers.push(prod);
          }
          if (match === undefined && ((requestSearchValue !== '' && dataProduct.match(re)) || requestSearchValue === '')) {
            tmp.push(record[r]);
          } else {
            for (const i in match) {
              if (prod.value === match[i].value && ((requestSearchValue !== '' && dataProduct.match(re)) || requestSearchValue === '')) {
                tmp.push(record[r]);
              }
            }
          }
        }
      }
    }
    Object.defineProperty(newList, 'data', {
      value: tmp,
      writable: true,
      enumerable: true,
      configurable: true
    });
    return newList;
  }

  handleProducerSelect (list, e) {
    if (e.length === 0) {
      this.setState({ list: this.filter(this.state.originalList) });
    } else if (e[0] !== undefined) {
      this.setState({ list: this.filter(list, Object.values(e)) });
    }
  }

  render () {
    if (this.state.list !== undefined && this.state.list.meta !== undefined && this.state.list.data !== undefined) {
      const list = this.state.list;
      const { queriedAt } = list.meta;
      const unique = [...new Set(list.data.map(item => item.id))];
      return (
        <div className='page__component'>
          <section className='page__section page__section__controls'>
            <Breadcrumbs config={breadcrumbConfig} />
          </section>
          <section className='page__section page__section__header-wrapper'>
            <div className='page__section__header'>
              <h1 className='heading--large heading--shared-content with-description '>{strings.requests}</h1>
              {lastUpdated(queriedAt)}
              {/* <Overview items={overviewItems} inflight={false} /> */}
            </div>
          </section>
          <section className='page__section page__section__controls request-section'>
            <div className='heading__wrapper--border'>
              <h2 className='heading--medium heading--shared-content with-description'>{strings.requests_withdrawn2} Requests <span className='num--title'>{unique.length}</span></h2>
            </div>
            {!list
              ? <Loading />
              : <List
                  list={this.filter(list)}
                  tableColumns={tableColumns}
                  query={this.generateQuery()}
                  rowId='id'
                  filterIdx='name'
                  filterPlaceholder='Search Requests'
                >
                <Select
                  id="producerSelect"
                  options={this.state.producers}
                  onChange={(e) => this.handleProducerSelect(this.state.originalList, e)}
                  isSearchable={true}
                  placeholder='Select Data Producer'
                  className='producer_select'
                  isMulti={true}
                />
              </List>
            }
          </section>
        </div>
      );
    }
    return null;
  }
}

InactiveRequestsOverview.propTypes = {
  requests: PropTypes.object,
  stats: PropTypes.object,
  dispatch: PropTypes.func,
  workflowOptions: PropTypes.array,
  location: PropTypes.object,
  config: PropTypes.object,
  requestCSV: PropTypes.object,
  privileges: PropTypes.object,
  roles: PropTypes.array
};

export { InactiveRequestsOverview };

export default withRouter(connect(state => ({
  stats: state.stats,
  workflowOptions: workflowOptionNames(state),
  requests: state.requests,
  config: state.config,
  requestCSV: state.requestCSV,
  privileges: state.api.tokens.privileges,
  roles: state.api.tokens.roles,
}))(InactiveRequestsOverview));

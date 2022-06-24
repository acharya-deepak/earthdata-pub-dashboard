// Authentication
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_INFLIGHT = 'LOGIN_INFLIGHT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_TOKEN_INFLIGHT = 'FETCH_TOKEN_INFLIGHT';
export const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';
export const REFRESH_TOKEN_INFLIGHT = 'REFRESH_TOKEN_INFLIGHT';
export const ADD_INSTANCE_META = 'ADD_INSTANCE_META';
export const ADD_MMTLINK = 'ADD_MMTLINK';
// Stats
export const STATS = 'STATS';
export const STATS_INFLIGHT = 'STATS_INFLIGHT';
export const STATS_ERROR = 'STATS_ERROR';
// AWS
export const DIST_APIGATEWAY = 'DIST_APIGATEWAY';
export const DIST_APIGATEWAY_INFLIGHT = 'DIST_APIGATEWAY_INFLIGHT';
export const DIST_APIGATEWAY_ERROR = 'DIST_APIGATEWAY_ERROR';
export const DIST_API_LAMBDA = 'DIST_API_LAMBDA';
export const DIST_API_LAMBDA_INFLIGHT = 'DIST_API_LAMBDA_INFLIGHT';
export const DIST_API_LAMBDA_ERROR = 'DIST_API_LAMBDA_ERROR';
export const DIST_TEA_LAMBDA = 'DIST_TEA_LAMBDA';
export const DIST_TEA_LAMBDA_INFLIGHT = 'DIST_TEA_LAMBDA_INFLIGHT';
export const DIST_TEA_LAMBDA_ERROR = 'DIST_TEA_LAMBDA_ERROR';
export const DIST_S3ACCESS = 'DIST_S3ACCESS';
export const DIST_S3ACCESS_INFLIGHT = 'DIST_S3ACCESS_INFLIGHT';
export const DIST_S3ACCESS_ERROR = 'DIST_S3ACCESS_ERROR';
// Count
export const COUNT = 'COUNT';
export const COUNT_INFLIGHT = 'COUNT_INFLIGHT';
export const COUNT_ERROR = 'COUNT_ERROR';
// Workflows
export const WORKFLOWS = 'WORKFLOWS';
export const WORKFLOW = 'WORKFLOW';
export const WORKFLOW_INFLIGHT = 'WORKFLOW_INFLIGHT';
export const WORKFLOW_ERROR = 'WORKFLOW_ERROR';
export const SEARCH_WORKFLOWS = 'SEARCH_WORKFLOWS';
export const CLEAR_WORKFLOWS_SEARCH = 'CLEAR_WORKFLOWS_SEARCH';
// Metrics
export const METRICS = 'METRICS';
export const METRICS_INFLIGHT = 'METRICS_INFLIGHT';
export const METRICS_ERROR = 'METRICS_ERROR';
export const SEARCH_METRICS = 'SEARCH_METRICS';
export const CLEAR_METRICS_SEARCH = 'CLEAR_METRICS_SEARCH';
// Cloud Metrics
export const CLOUD_METRICS = 'CLOUD_METRICS';
export const CLOUD_METRIC = 'CLOUD_METRIC';
export const CLOUD_METRICS_INFLIGHT = 'CLOUD_METRICS_INFLIGHT';
export const CLOUD_METRICS_ERROR = 'CLOUD_METRICS_ERROR';
export const SEARCH_CLOUD_METRICS = 'SEARCH_CLOUD_METRICS';
export const CLEAR_CLOUD_METRICS_SEARCH = 'CLEAR_CLOUD_METRICS_SEARCH';
// Roles
export const ROLE = 'ROLE';
export const ROLE_INFLIGHT = 'ROLE_INFLIGHT';
export const ROLE_ERROR = 'ROLE_ERROR';
export const ROLES = 'ROLES';
export const ROLES_INFLIGHT = 'ROLES_INFLIGHT';
export const ROLES_ERROR = 'ROLES_ERROR';
export const SEARCH_ROLES = 'SEARCH_ROLES';
export const CLEAR_ROLES_SEARCH = 'CLEAR_ROLES_SEARCH';
// Conversations
export const CONVERSATION = 'CONVERSATION';
export const CONVERSATION_INFLIGHT = 'CONVERSATION_INFLIGHT';
export const CONVERSATION_ERROR = 'CONVERSATION_ERROR';
export const CONVERSATIONS = 'CONVERSATIONS';
export const CONVERSATIONS_INFLIGHT = 'CONVERSATIONS_INFLIGHT';
export const CONVERSATIONS_ERROR = 'CONVERSATIONS_ERROR';
export const CONVERSATION_REPLY = 'CONVERSATION_REPLY';
export const CONVERSATION_REPLY_INFLIGHT = 'CONVERSATION_REPLY_INFLIGHT';
export const CONVERSATION_REPLY_ERROR = 'CONVERSATION_REPLY_ERROR';
export const CONVERSATION_ADD_USER = 'CONVERSATION_ADD_USER';
export const CONVERSATION_ADD_USER_INFLIGHT = 'CONVERSATION_ADD_USERS_INFLIGHT';
export const CONVERSATION_ADD_USER_ERROR = 'CONVERSATION_ADD_USERS_ERROR';
export const CONVERSATION_CREATE = 'CONVERSATION_CREATE';
export const CONVERSATION_CREATE_INFLIGHT = 'CONVERSATION_CREATE_INFLIGHT';
export const CONVERSATION_CREATE_ERROR = 'CONVERSATION_CREATE_ERROR';
// Logs
export const LOGS = 'LOGS';
export const LOGS_INFLIGHT = 'LOGS_INFLIGHT';
export const LOGS_ERROR = 'LOGS_ERROR';
export const CLEAR_LOGS = 'CLEAR_LOGS';
export const SCHEMA = 'SCHEMA';
export const SCHEMA_INFLIGHT = 'SCHEMA_INFLIGHT';
export const SCHEMA_ERROR = 'SCHEMA_ERROR';
// Rules
export const RULES = 'RULES';
export const RULES_INFLIGHT = 'RULES_INFLIGHT';
export const RULES_ERROR = 'RULES_ERROR';
export const RULE = 'RULE';
// API
export const API_VERSION = 'API_VERSION';
export const API_VERSION_ERROR = 'API_VERSION_ERROR';
export const API_VERSION_COMPATIBLE = 'API_VERSION_COMPATIBLE';
export const API_VERSION_INCOMPATIBLE = 'API_VERSION_INCOMPATIBLE';
export const NOOP = 'NOOP';
export const CALL_API = 'CALL_API';
// Modals
export const ASYNC_COMMAND = 'ASYNC_COMMAND';
export const BATCH_ASYNC_COMMAND = 'BATCH_ASYNC_COMMAND';
export const PROCESSING_MODAL = 'PROCESSING_MODAL';
// Datepicker filtering
export const DATEPICKER_DROPDOWN_FILTER = 'DATEPICKER_DROPDOWN_FILTER';
export const DATEPICKER_DATECHANGE = 'DATEPICKER_DATECHANGE';
export const DATEPICKER_HOUR_FORMAT = 'DATEPICKER_HOUR_FORMAT';
// Requests
export const REQUEST = 'REQUEST';
export const REQUESTS = 'REQUESTS';
export const REQUEST_REVIEW = 'REQUEST_REVIEW';
export const REQUEST_REVIEW_INFLIGHT = 'REQUEST_REVIEW_INFLIGHT';
export const REQUEST_INFLIGHT = 'REQUEST_INFLIGHT';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUESTS_INFLIGHT = 'REQUESTS_INFLIGHT';
export const REQUESTS_ERROR = 'REQUESTS_ERROR';
export const REQUEST_APPLYWORKFLOW = 'REQUEST_APPLYWORKFLOW';
export const REQUEST_APPLYWORKFLOW_INFLIGHT = 'REQUEST_APPLYWORKFLOW_INFLIGHT';
export const REQUEST_APPLYWORKFLOW_ERROR = 'REQUEST_APPLYWORKFLOW_ERROR';
export const REQUEST_REPROCESS = 'REQUEST_REPROCESS';
export const REQUEST_REPROCESS_INFLIGHT = 'REQUEST_REPROCESS_INFLIGHT';
export const REQUEST_REPROCESS_ERROR = 'REQUEST_REPROCESS_ERROR';
export const REQUEST_REINGEST = 'REQUEST_REINGEST';
export const REQUEST_REINGEST_INFLIGHT = 'REQUEST_REINGEST_INFLIGHT';
export const REQUEST_REINGEST_ERROR = 'REQUEST_REINGEST_ERROR';
export const REQUEST_REMOVE = 'REQUEST_REMOVE';
export const REQUEST_REMOVE_INFLIGHT = 'REQUEST_REMOVE_INFLIGHT';
export const REQUEST_REMOVE_ERROR = 'REQUEST_REMOVE_ERROR';
export const REQUEST_RECOVER = 'REQUEST_RECOVER';
export const REQUEST_RECOVER_INFLIGHT = 'REQUEST_RECOVER_INFLIGHT';
export const REQUEST_RECOVER_ERROR = 'REQUEST_RECOVER_ERROR';
export const REQUEST_UPDATE_METADATA = 'REQUEST_UPDATE_METADATA';
export const REQUEST_UPDATE_METADATA_INFLIGHT = 'REQUEST_UPDATE_METADATA_INFLIGHT';
export const BULK_REQUEST = 'BULK_REQUEST';
export const BULK_REQUEST_INFLIGHT = 'BULK_REQUEST_INFLIGHT';
export const BULK_REQUEST_ERROR = 'BULK_REQUEST_ERROR';
export const REQUEST_DELETE = 'REQUEST_DELETE';
export const REQUEST_DELETE_INFLIGHT = 'REQUEST_DELETE_INFLIGHT';
export const REQUEST_DELETE_ERROR = 'REQUEST_DELETE_ERROR';
export const REQUEST_WITHDRAW = 'REQUEST_WITHDRAW';
export const REQUEST_WITHDRAW_INFLIGHT = 'REQUEST_WITHDRAW_INFLIGHT';
export const REQUEST_WITHDRAW_ERROR = 'REQUEST_WITHDRAW_ERROR';
export const REQUEST_RESTORE = 'REQUEST_RESTORE';
export const REQUEST_RESTORE_INFLIGHT = 'REQUEST_RESTORE_INFLIGHT';
export const REQUEST_RESTORE_ERROR = 'REQUEST_RESTORE_ERROR';
export const REQUEST_CSV = 'REQUEST_CSV';
export const REQUEST_CSV_INFLIGHT = 'REQUEST_CSV_INFLIGHT';
export const REQUEST_CSV_ERROR = 'REQUEST_CSV_ERROR';
export const SEARCH_REQUESTS = 'SEARCH_REQUESTS';
export const CLEAR_REQUESTS_SEARCH = 'CLEAR_REQUESTS_SEARCH';
export const FILTER_REQUESTS = 'FILTER_REQUESTS';
export const CLEAR_REQUESTS_FILTER = 'CLEAR_REQUESTS_FILTER';
export const OPTIONS_REQUESTNAME = 'OPTIONS_REQUESTNAME';
export const OPTIONS_REQUESTNAME_INFLIGHT = 'OPTIONS_REQUESTNAME_INFLIGHT';
export const OPTIONS_REQUESTNAME_ERROR = 'OPTIONS_REQUESTNAME_ERROR';

export const FILTER_STAGES = 'FILTER_STAGES';
export const CLEAR_STAGES_FILTER = 'CLEAR_STAGES_FILTER';

export const FILTER_STATUSES = 'FILTER_STATUSES';
export const CLEAR_STATUSES_FILTER = 'CLEAR_STATUSES_FILTER';

// Groups
export const GROUP = 'GROUP';
export const GROUP_INFLIGHT = 'GROUP_INFLIGHT';
export const GROUP_ERROR = 'GROUP_ERROR';
export const GROUP_COLLECTIONS = 'GROUP_COLLECTIONS';
export const GROUP_COLLECTIONS_INFLIGHT = 'GROUP_COLLECTIONS_INFLIGHT';
export const GROUP_COLLECTIONS_ERROR = 'GROUP_COLLECTIONS_ERROR';
export const NEW_GROUP = 'NEW_GROUP';
export const NEW_GROUP_INFLIGHT = 'NEW_GROUP_INFLIGHT';
export const NEW_GROUP_ERROR = 'NEW_GROUP_ERROR';
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const UPDATE_GROUP_INFLIGHT = 'UPDATE_GROUP_INFLIGHT';
export const UPDATE_GROUP_ERROR = 'UPDATE_GROUP_ERROR';
export const UPDATE_GROUP_CLEAR = 'UPDATE_GROUP_CLEAR';
export const GROUPS = 'GROUPS';
export const GROUPS_INFLIGHT = 'GROUPS_INFLIGHT';
export const GROUPS_ERROR = 'GROUPS_ERROR';
export const GROUP_DELETE = 'GROUP_DELETE';
export const GROUP_DELETE_INFLIGHT = 'GROUP_DELETE_INFLIGHT';
export const GROUP_DELETE_ERROR = 'GROUP_DELETE_ERROR';
export const GROUP_RESTART = 'GROUP_RESTART';
export const GROUP_RESTART_INFLIGHT = 'GROUP_RESTART_INFLIGHT';
export const GROUP_RESTART_ERROR = 'GROUP_RESTART_ERROR';
export const CLEAR_RESTARTED_GROUP = 'CLEAR_RESTARTED_GROUP';
export const GROUP_STOP = 'GROUP_STOP';
export const GROUP_STOP_INFLIGHT = 'GROUP_STOP_INFLIGHT';
export const GROUP_STOP_ERROR = 'GROUP_STOP_ERROR';
export const CLEAR_STOPPED_GROUP = 'CLEAR_STOPPED_GROUP';
export const OPTIONS_GROUPGROUP = 'OPTIONS_GROUPGROUP';
export const OPTIONS_GROUPGROUP_INFLIGHT = 'OPTIONS_GROUPGROUP_INFLIGHT';
export const OPTIONS_GROUPGROUP_ERROR = 'OPTIONS_GROUPGROUP_ERROR';
export const SEARCH_GROUPS = 'SEARCH_GROUPS';
export const CLEAR_GROUPS_SEARCH = 'CLEAR_GROUPS_SEARCH';
export const FILTER_GROUPS = 'FILTER_GROUPS';
export const CLEAR_GROUPS_FILTER = 'CLEAR_GROUPS_FILTER';
// Users
export const USER = 'USER';
export const USER_INFLIGHT = 'USER_INFLIGHT';
export const USER_ERROR = 'USER_ERROR';
export const USERS = 'USERS';
export const USERS_INFLIGHT = 'USERS_INFLIGHT';
export const USERS_ERROR = 'USERS_ERROR';
export const USER_ADDROLE = 'USER_ADDROLE';
export const USER_ADDROLE_INFLIGHT = 'USER_ADDROLE_INFLIGHT';
export const USER_REMOVEROLE = 'USER_REMOVEROLE';
export const USER_REMOVEROLE_INFLIGHT = 'USER_REMOVEROLE_INFLIGHT';
export const USER_ADDGROUP = 'USER_ADDGROUP';
export const USER_ADDGROUP_INFLIGHT = 'USER_ADDGROUP_INFLIGHT';
export const USER_REMOVEGROUP = 'USER_REMOVEGROUP';
export const USER_REMOVEGROUP_INFLIGHT = 'USER_REMOVEGROUP_INFLIGHT';

export const USER_RESTART = 'USER_RESTART';
export const USER_RESTART_INFLIGHT = 'USER_RESTART_INFLIGHT';
export const USER_RESTART_ERROR = 'USER_RESTART_ERROR';
export const CLEAR_RESTARTED_USER = 'CLEAR_RESTARTED_USER';
export const USER_STOP = 'USER_STOP';
export const USER_STOP_INFLIGHT = 'USER_STOP_INFLIGHT';
export const USER_STOP_ERROR = 'USER_STOP_ERROR';
export const CLEAR_STOPPED_USER = 'CLEAR_STOPPED_USER';
export const OPTIONS_USERGROUP = 'OPTIONS_USERGROUP';
export const OPTIONS_USERGROUP_INFLIGHT = 'OPTIONS_USERGROUP_INFLIGHT';
export const OPTIONS_USERGROUP_ERROR = 'OPTIONS_USERGROUP_ERROR';
export const SEARCH_USERS = 'SEARCH_USERS';
export const CLEAR_USERS_SEARCH = 'CLEAR_USERS_SEARCH';
export const FILTER_USERS = 'FILTER_USERS';
export const CLEAR_USERS_FILTER = 'CLEAR_USERS_FILTER';

// Forms
export const FORM = 'FORM';
export const FORM_INFLIGHT = 'FORM_INFLIGHT';
export const FORM_ERROR = 'FORM_ERROR';
export const REVIEW = 'REVIEW';
export const REVIEW_INFLIGHT = 'REVIEW_INFLIGHT';
export const REVIEW_ERROR = 'REVIEW_ERROR';
export const FORM_COLLECTIONS = 'FORM_COLLECTIONS';
export const FORM_COLLECTIONS_INFLIGHT = 'FORM_COLLECTIONS_INFLIGHT';
export const FORM_COLLECTIONS_ERROR = 'FORM_COLLECTIONS_ERROR';
export const NEW_FORM = 'NEW_FORM';
export const NEW_FORM_INFLIGHT = 'NEW_FORM_INFLIGHT';
export const NEW_FORM_ERROR = 'NEW_FORM_ERROR';
export const UPDATE_FORM = 'UPDATE_FORM';
export const UPDATE_FORM_INFLIGHT = 'UPDATE_FORM_INFLIGHT';
export const UPDATE_FORM_ERROR = 'UPDATE_FORM_ERROR';
export const UPDATE_FORM_CLEAR = 'UPDATE_FORM_CLEAR';
export const FORMS = 'FORMS';
export const FORMS_INFLIGHT = 'FORMS_INFLIGHT';
export const FORMS_ERROR = 'FORMS_ERROR';
export const FORM_DELETE = 'FORM_DELETE';
export const FORM_DELETE_INFLIGHT = 'FORM_DELETE_INFLIGHT';
export const FORM_DELETE_ERROR = 'FORM_DELETE_ERROR';
export const FORM_RESTART = 'FORM_RESTART';
export const FORM_RESTART_INFLIGHT = 'FORM_RESTART_INFLIGHT';
export const FORM_RESTART_ERROR = 'FORM_RESTART_ERROR';
export const CLEAR_RESTARTED_FORM = 'CLEAR_RESTARTED_FORM';
export const FORM_STOP = 'FORM_STOP';
export const FORM_STOP_INFLIGHT = 'FORM_STOP_INFLIGHT';
export const FORM_STOP_ERROR = 'FORM_STOP_ERROR';
export const CLEAR_STOPPED_FORM = 'CLEAR_STOPPED_FORM';
export const OPTIONS_FORMGROUP = 'OPTIONS_FORMGROUP';
export const OPTIONS_FORMGROUP_INFLIGHT = 'OPTIONS_FORMGROUP_INFLIGHT';
export const OPTIONS_FORMGROUP_ERROR = 'OPTIONS_FORMGROUP_ERROR';
export const SEARCH_FORMS = 'SEARCH_FORMS';
export const CLEAR_FORMS_SEARCH = 'CLEAR_FORMS_SEARCH';
export const FILTER_FORMS = 'FILTER_FORMS';
export const CLEAR_FORMS_FILTER = 'CLEAR_FORMS_FILTER';

// Questions
export const QUESTION = 'QUESTION';
export const QUESTION_INFLIGHT = 'QUESTION_INFLIGHT';
export const QUESTIONS = 'QUESTIONS';
export const QUESTIONS_INFLIGHT = 'QUESTIONS_INFLIGHT';
export const QUESTIONS_ERROR = 'QUESTIONS_ERROR';
export const SEARCH_QUESTIONS = 'SEARCH_QUESTIONS';
export const CLEAR_QUESTIONS_SEARCH = 'CLEAR_QUESTIONS_SEARCH';
export const FILTER_QUESTIONS = 'FILTER_QUESTIONS';
export const CLEAR_QUESTIONS_FILTER = 'CLEAR_QUESTIONS_FILTER';
export const UPDATE_QUESTIONS_CLEAR = 'UPDATE_QUESTIONS_CLEAR';

// Daacs
export const DAAC = 'DAAC';
export const DAAC_INFLIGHT = 'DAAC_INFLIGHT';
export const DAACS = 'DAACS';
export const DAACS_INFLIGHT = 'DAACS_INFLIGHT';
export const DAACS_ERROR = 'DAACS_ERROR';
export const SEARCH_DAACS = 'SEARCH_DAACS';
export const CLEAR_DAACS_SEARCH = 'CLEAR_DAACS_SEARCH';
export const FILTER_DAACS = 'FILTER_DAACS';
export const CLEAR_DAACS_FILTER = 'CLEAR_DAACS_FILTER';
export const UPDATE_DAACS_CLEAR = 'UPDATE_DAACS_CLEAR';

// Inputs
export const INPUTS = 'INPUTS';

// Model
export const MODEL = 'MODEL';
export const MODEL_INFLIGHT = 'MODEL_INFLIGHT';

// Module
export const GET_MODULE_UI = 'GET_MODULE_UI';
export const GET_MODULE_UI_INFLIGHT = 'GET_MODULE_UI_INFLIGHT';
export const GET_MODULE_UI_ERROR = 'GET_MODULE_UI_ERROR';
export const LIST_MODULES = 'LIST_MODULES';
export const LIST_MODULES_INFLIGHT = 'LIST_MODULES_INFLIGHT';
export const LIST_MODULES_ERROR = 'LIST_MODULES_ERROR';

// SearchModal
export const SEARCH_MODAL = 'SEARCH_MODAL';
export const SEARCH_MODAL_INFLIGHT = 'SEARCH_MODAL_INFLIGHT';

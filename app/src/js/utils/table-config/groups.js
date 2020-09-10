'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import { fromNow } from '../format';

export const tableColumns = [
  {
    Header: 'Name',
    accessor: row => <Link to={`groups/group/${row.id}`}>{row.id}</Link>,
    id: 'name'
  },
  {
    Header: 'Permissions',
    accessor: 'permissions'
  },
  {
    Header: 'Subscriptions',
    accessor: 'subscriptions'
  },
  {
    Header: 'Last Updated',
    accessor: row => fromNow(row.timestamp),
    id: 'timestamp'
  }
];

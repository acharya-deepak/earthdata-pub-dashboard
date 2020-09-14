'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import { fromNow } from '../format';

export const tableColumns = [
  {
    Header: 'Name',
    accessor: row => <Link to={`users/user/${row.id}`}>{row.userName}</Link>,
    id: 'userName'
  },
  {
    Header: 'Email',
    accessor: row => row.email,
    id: 'email'
  },
  {
    Header: 'Groups',
    accessor: row => row.groups.join(', '),
    id: 'groups'
  },
  {
    Header: 'Permissions',
    accessor: row => row.permissions.join(', '),
    id: 'permissions'
  },
  {
    Header: 'Subscriptions',
    accessor: row => row.subscriptions.join(', '),
    id: 'subscriptions'
  },
  {
    Header: 'Last Updated',
    accessor: row => fromNow(row.timestamp),
    id: 'timestamp'
  }
];

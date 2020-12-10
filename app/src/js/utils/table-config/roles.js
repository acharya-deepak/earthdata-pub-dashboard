import React from 'react';
import { Link } from 'react-router-dom';

export const tableColumns = [
  {
    Header: 'Name',
    accessor: (row) => <Link to={`/roles/role/${row.name}`}>{row.name}</Link>,
    id: 'name'
  },
  {
    Header: 'Count',
    accessor: (row) => row.count,
    id: 'count'
  }
];

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'object-path';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import { getCount, listSubmissions } from '../../actions';
import { strings } from '../locale';
import AllSubmissions from './list';
import DatePickerHeader from '../DatePickerHeader/DatePickerHeader';
import SubmissionOverview from './submission';
import SubmissionsOverview from './overview';
import EditMetadata from './edit-metadata';
import isEqual from 'lodash.isequal';

const withQueryWrapper = (Component, onQueryChange) => (props) => {
  return (
    <Component onQueryChange={onQueryChange} {...props} />
  );
};

const Submissions = ({
  dispatch,
  location,
  params,
  stats
}) => {
  const { pathname } = location;
  const count = get(stats, 'count.data.submissions.count');
  const AllSubmissionsWithWrapper = withQueryWrapper(AllSubmissions, onQueryChange);
  const [queryOptions, setQueryOptions] = useState({});

  function query () {
    dispatch(getCount({
      type: 'submissions',
      field: 'stage'
    }));
    dispatch(listSubmissions(queryOptions));
  }

  function onQueryChange (newQueryOptions) {
    if (!isEqual(newQueryOptions, queryOptions)) {
      setQueryOptions(newQueryOptions);
    }
  }

  return (
    <div className='page__submissions'>
      <DatePickerHeader onChange={query} heading={strings.all_submissions}/>
      <div className='page__content'>
        <div className='wrapper__sidebar'>
          <Sidebar
            currentPath={pathname}
            params={params}
            count={count}
          />
          <div className='page__content--shortened'>
            <Switch>
              <Route exact path='/submissions' component={SubmissionsOverview} />
              <Route path='/submissions/submission/:submissionId' component={SubmissionOverview} />
              <Route path='/submissions/metadata/:submissionId' component={EditMetadata} />
              <Route path='/submissions/completed' component={AllSubmissionsWithWrapper} />
              <Route path='/submissions/processing' component={AllSubmissionsWithWrapper} />
              <Route path='/submissions/failed' component={AllSubmissionsWithWrapper} />
              <Redirect exact from='/submissions/running' to='/submissions/processing' />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

Submissions.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object,
  dispatch: PropTypes.func,
  stats: PropTypes.object
};

export default withRouter(connect(state => ({
  stats: state.stats
}))(Submissions));

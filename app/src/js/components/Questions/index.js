import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'object-path';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import { getCount, listQuestions } from '../../actions';
import { strings } from '../locale';
//import AllQuestions from './list';
import DatePickerHeader from '../DatePickerHeader/DatePickerHeader';
import QuestionOverview from './question';
import QuestionsOverview from './overview';
import isEqual from 'lodash.isequal';

const withQueryWrapper = (Component, onQueryChange) => (props) => {
  return (
    <Component onQueryChange={onQueryChange} {...props} />
  );
};

const Questions = ({
  dispatch,
  location,
  params,
  stats
}) => {
  const { pathname } = location;
  const count = get(stats, 'count.data.questions.count');
  dispatch(listQuestions());
  const [queryOptions, setQueryOptions] = useState({});

  function query () {
    dispatch(getCount({
      type: 'questions'
    }));
    dispatch(listQuestions(queryOptions));
  }

  function onQueryChange (newQueryOptions) {
    if (!isEqual(newQueryOptions, queryOptions)) {
      setQueryOptions(newQueryOptions);
    }
  }

  return (
    <div className='page__questions'>
      <DatePickerHeader onChange={query} heading={strings.all_questions}/>
      <div className='page__content'>
        <div className='wrapper__sidebar'>
          <Sidebar
            currentPath={pathname}
            params={params}
            count={count}
          />
          <div className='page__content--shortened'>
            <Switch>
              <Route exact path='/questions' component={QuestionsOverview} />
              <Route path='/questions/question/:questionId' component={QuestionOverview} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

Questions.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object,
  dispatch: PropTypes.func,
  stats: PropTypes.object
};

export default withRouter(connect(state => ({
  stats: state.stats
}))(Questions));

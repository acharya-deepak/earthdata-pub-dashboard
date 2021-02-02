'use strict';
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/sidebar';
import PropTypes from 'prop-types';
import UsersOverview from './overview';
import UserOverview from './user';
import { listUsers } from '../../actions';

class Users extends React.Component {
  constructor () {
    super();
    this.displayName = 'Users';
  }

  render () {
    const { pathname } = this.props.location;
    const showSidebar = pathname !== '/users/add';
    this.props.dispatch(listUsers);
    return (
      <div className='page__users'>
        <div className='content__header'>
          <div className='row'>
            <h1 className='heading--xlarge heading--shared-content'>Users</h1>
          </div>
        </div>
        <div className='page__content'>
          <div className='wrapper__sidebar'>
            {showSidebar ? <Sidebar
              currentPath={pathname}
              params={this.props.params}
            /> : null}
            <div className={showSidebar ? 'page__content--shortened' : 'page__content'}>
              <Switch>
                <Route exact path='/users' component={UsersOverview} />
                <Route path='/users/id/:userId' component={UserOverview} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.object,
  location: PropTypes.object,
  params: PropTypes.object
};

export default withRouter(connect(state => ({
  stats: state.stats
}))(Users));

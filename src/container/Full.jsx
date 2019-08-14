import React, { Component } from 'react';
import {
  Route, Switch, Redirect
} from 'react-router-dom';

import { bool } from 'prop-types'

// Home and Auth Pages
import Home from '../views/Home/HomeContainer'
import Login from '../views/Login/LoginContainer'
import Course from '../views/Course/CourseContainer'

// App Layout page
import AppLayout from '../layouts/AppLayout'

import { connect } from 'react-redux';

// Private route check
import PrivateRoute from './PrivateRoute';

class Full extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/app" component={AppLayout} authState={auth} />
        <Route exact path="/" component={Home} />
        <Route path="/course" component={Course} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

Full.propTypes = {
  auth: bool.isRequired
}

const mapStateToProps = state => {
  return {
    // temporary set this to true to allow private route
  auth: true,
  // auth: state.auth.authenticated,
}}

export default connect(mapStateToProps)(Full);

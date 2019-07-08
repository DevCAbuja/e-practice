import React, { Component } from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';

import { bool } from 'prop-types'

// Home and Auth Pages
import Home from '../views/Home/HomeContainer'
import Login from '../views/Login/LoginContainer'

// Private route
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

// import redux

const privateRoute = () => <div>
  Private Route
</div>

class Full extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/app" component={privateRoute} authState={auth} />
        <Route exact path="/" component={Home} />
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
  auth: state.auth.authenticated,
}}

export default withRouter(connect(mapStateToProps)(Full));

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, object, } from 'prop-types'

const PrivateRoute = ({ component: Component, authState, ...rest }) => (
  <Route
    {...rest}
    render={props => (authState === true ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: props.location,
          },
        }}
      />
    ))
    }
  />
);

PrivateRoute.defaultProps = {
  location: {}
}

PrivateRoute.propTypes = {
  authState: bool.isRequired,
  // component: object.isRequired,
  location: object,
}

export default PrivateRoute;

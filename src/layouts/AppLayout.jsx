import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import routes from './routes';

class AppLayout extends Component {
  render() {
    return (
      <div className="app-layout">
        <Navbar />
        <div className="layout container-fluid">
          <div className="row">
            <Sidebar {...this.props} />
            <div className="content">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={`${route.name}_${index}`} path={`/app${route.url}`} component={route.component} />
                ))}
                <Redirect to="/app/dashboard" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLayout;

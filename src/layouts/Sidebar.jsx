import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  componentDidMount() {}

  toggleSidebar = (e) => {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar,
    }));
  };

  render() {
    const { showSidebar } = this.state;
    const { pathname } = this.props.location;
    const currentLocation = pathname.split('/')[2];
    let currentLocationName = routes.filter(route => route.url === `/${currentLocation}`)[0]
    return (
      <Fragment>
        <h4 id="page-name">{ currentLocationName ? currentLocationName.name : "" }</h4>
        <div id="menu-icon" onClick={this.toggleSidebar}>
          <div id="hamburger" className={showSidebar ? 'active' : ''} />
        </div>
        <div id="sidebar" className={showSidebar ? 'show-sidebar' : ''}>
          <ul>
            {routes.map((route, index) => (
              <li key={`${route.name}_${index}`}>
                <Link to={`/app${route.url}`} onClick={this.toggleSidebar}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar">
          {routes.map((route, index) => (
            <Link key={`${route.name}_${index}`} to={`/app${route.url}`}>
              {route.name}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;

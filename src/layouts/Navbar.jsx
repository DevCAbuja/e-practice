import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          e
          <span>-p</span>
          ractice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                {' '}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                About Us
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                How it works
              </a>
            </li>
          </ul>
          <div>
            <Link to='/login'>
              Login
            </Link>
            <Link to='/app' className="get-started" >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

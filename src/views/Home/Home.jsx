import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
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
              <span>Login</span>
              <span className="get-started">Get Started</span>
            </div>
          </div>
        </nav>
        <div className="content-container">
          <div>
            <h1 className="out">
              E
              <span>-P</span>
              ractice
            </h1>
            <p className="text">
              Develop a passion of learning, if you do,
              {' '}
              <br />
              {' '}
  you will never cease to go
            </p>
            <button type="button" className=" button btn btn-info">
              Start Studying
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

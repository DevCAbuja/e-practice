import React, { Component } from 'react';
import Navbar from '../../layouts/Navbar'
class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Navbar />
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

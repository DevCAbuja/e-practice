import React, { Component } from "react";


class Home extends Component {

  render() {
    return (
      <div>
        <navbar>
          <nav className="mynav navbar navbar-expand-lg navbar-blue justify-content-between">
            <a className="style navbar-brand" href="/">E<span className="practice">-P</span>ractice</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" nav collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto" id="skin">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">How It Works</a>
                </li>
              </ul>
            </div>
            <li className="nav-link" id="skin">
              <a className="nav-link" href="/">Login</a>
            </li>
            <button type="button" class="btn btn-primary">Get Started</button>
          </nav>
        </navbar>

        <canvas id="hexagon"></canvas>

        <div className="polygon">
        </div>
        <h1 className="out">E<span className="practice">-P</span>ractice</h1>
        <p className="text">Develop a passion of learning, if you do, you will never cease to go</p>
        <button type="button" class=" button btn btn-info">Start Studying</button>
      </div>


    );

  }
}



export default Home;

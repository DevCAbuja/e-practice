import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="home-page">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        e<span>-p</span>
                        ractice
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                
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
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">
                                    My Account
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="dashboard">
                    <p>Dashboard
                        <br></br>
                        Exam Histories<br></br>
                        Edit Profile<br></br>Change Password<br></br>Log Out
                    </p>
                </div>

                <section>
                    <div className="dark">
                        <h2>My Exam History</h2>
                    </div>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Exam Name</th>
                                <th>Questions</th>
                                <th>Right Answer</th>
                                <th>Wrong Answer</th>
                                <th>Score</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>40</td>
                                <td>13</td>
                                <td>25</td>
                                <td>36.5%</td>
                                <td>Nov</td>
                                <td><i className="icon-eye" style={{ fontSize: "15px"}} /><span><i className="icon-download" style={{ fontSize: "15px"}} /></span></td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>40</td>
                                <td>13</td>
                                <td>25</td>
                                <td>36.5%</td>
                                <td>Nov</td>
                                <td><i className="icon-eye" style={{ fontSize: "15px"}} /><span><i className="icon-download" style={{ fontSize: "15px"}} /></span></td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>40</td>
                                <td>13</td>
                                <td>25</td>
                                <td>36.5%</td>
                                <td>Nov</td>
                                <td><i className="icon-eye" style={{ fontSize: "15px"}} /><span><i className="icon-download" style={{ fontSize: "15px"}} /></span></td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>40</td>
                                <td>13</td>
                                <td>25</td>
                                <td>36.5%</td>
                                <td>Nov</td>
                                <td><i className="icon-eye" style={{ fontSize: "15px"}} /><span><i className="icon-download" style={{ fontSize: "15px"}} /></span></td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>40</td>
                                <td>13</td>
                                <td>25</td>
                                <td>36.5%</td>
                                <td>Nov</td>
                                <td><i className="icon-eye" style={{ fontSize: "15px"}} /><span><i className="icon-download" style={{ fontSize: "15px"}} /></span></td>
                            </tr>
                        </table>
                    </div>
                </section>

            </div>
        );
    }
}

export default Dashboard;

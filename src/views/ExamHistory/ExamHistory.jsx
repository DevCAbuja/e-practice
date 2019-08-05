import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="exam-history">
        <div className="dark">
          <h3>My Exam History</h3>
        </div>
        <div className="table table-responsive">
          <table className="responsive">
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Questions</th>
                <th>Right Answer</th>
                <th>Wrong Answer</th>
                <th>Score</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>English</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
                <td>36.5%</td>
                <td>Nov</td>
                <td>
                  <i className="icon-eye" style={{ fontSize: '15px' }} />
                  <span>
                    <i className="icon-download" style={{ fontSize: '15px' }} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>English</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
                <td>36.5%</td>
                <td>Nov</td>
                <td>
                  <i className="icon-eye" style={{ fontSize: '15px' }} />
                  <span>
                    <i className="icon-download" style={{ fontSize: '15px' }} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>English</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
                <td>36.5%</td>
                <td>Nov</td>
                <td>
                  <i className="icon-eye" style={{ fontSize: '15px' }} />
                  <span>
                    <i className="icon-download" style={{ fontSize: '15px' }} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>English</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
                <td>36.5%</td>
                <td>Nov</td>
                <td>
                  <i className="icon-eye" style={{ fontSize: '15px' }} />
                  <span>
                    <i className="icon-download" style={{ fontSize: '15px' }} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>English</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
                <td>36.5%</td>
                <td>Nov</td>
                <td>
                  <i className="icon-eye" style={{ fontSize: '15px' }} />
                  <span>
                    <i className="icon-download" style={{ fontSize: '15px' }} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;

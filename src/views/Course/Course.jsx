import React, { Component } from 'react';


class Course extends Component {
    render() {
        return (
            <div className="course">
                <div className="dark">
                    <h3 className="font">Welcome to E
              <span>-P</span>
                        ractice</h3>
                </div>
                <div className="table table-responsive">
                    <table className="responsive">
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BIO</td>
                                <td>Biology</td>
                            </tr>
                            <tr>
                                <td>CHM</td>
                                <td>Chemistry</td>
                            </tr>
                            <tr>
                                <td>MTH</td>
                                <td>Mathematics</td>
                            </tr>
                            <tr>
                                <td>ENG</td>
                                <td>English</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="button-container">
                    <button type="button" className=" button btn btn-info">
                        Start Studying
                    </button>
                    <button type="button" className=" button btn btn-info">
                        Take Review
                    </button>
                </div>
            </div>
        );
    }
}


export default Course;
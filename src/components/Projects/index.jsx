import React, { Component } from "react";
import './index.css';
import Card from "react-bootstrap/Card";
export default class Projects extends Component {
    render() {
        return (
            <Card id="pro-card">
                <Card.Body>
                    <div className="container-fluid text-center">
                        <h2 id="projects" style={{ fontSize: "2.1em" }}>Projects</h2>
                        <br />
                        <div className="project" style={{ display: 'flex' }}>
                            <div className="item" style={{ flex: '30%', margin: '0 2% 0 2%' }}>
                                <div className="panel panel-default text-center">
                                    <a href="https://github.com/Johnnyzhou666/3D-Rotating-Cube-By-Vuejs">
                                        <div className="panel-heading">
                                            <h4><strong>3D Cube</strong></h4>
                                        </div>
                                    </a>
                                    <div className="panel-body">
                                        <p>Developed a 3D dynamic animation cube by CSS through Vue framework.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{ flex: '30%', margin: '0 2% 0 2%' }}>
                                <div className="panel panel-default text-center">
                                    <a href="https://github.com/Johnnyzhou666/Restaurant-Web">
                                        <div className="panel-heading">
                                            <h4><strong>Restaurant Advertisement</strong></h4>
                                        </div>
                                    </a>
                                    <div className="panel-body">
                                        <p>Developed a restaurant/bar website that introducing and advertise its products by HTML, CSS, and JS skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{ flex: '30%', margin: '0 2% 0 2%' }}>
                                <div className="panel panel-default text-center">
                                    <a href="https://github.com/Johnnyzhou666/Edge-Detection-Used-OpenCv">
                                        <div className="panel-heading">
                                            <h4><strong>Shape Recognition</strong></h4>
                                        </div>
                                    </a>
                                    <div className="panel-body">
                                        <p>Trained a outline classifier using 'OpenCV' with Python. The classifier sucessfully distinguish what shapes of figures are.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </Card.Body>
            </Card>
        )
    }

}
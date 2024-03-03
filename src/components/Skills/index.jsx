import React, { Component } from "react";
import './index.css';
import Card from "react-bootstrap/Card";
export default class Skills extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <div class="container-fluid text-center" id="skills">
                        <h2 style={{ fontSize: "2.1em" }}>Skills</h2>
                        <div class="michelledt-skills-container">
                            <div class="skills-flex">
                                <div class="skills-card">
                                    <i class="fa-brands fa-python" style={{ fontSize: '40px', color: 'rgb(184, 132, 227)', }}></i>
                                    <h3>PYTHON</h3>
                                    <p>I have developed my Python skills from my school projects.
                                        I have a good understanding of data structures, Python tools and libraries.
                                    </p>
                                </div>
                                <div class="skills-card">
                                    <i class="fa-brands fa-java" style={{ fontSize: '40px', color: 'rgb(184, 132, 227)', }}></i>
                                    <h3>JAVA</h3>
                                    <p>I have developed my JAVA skills from my student internship at Amway and personal projects.
                                        I have a good understanding of object-oriented programming.
                                    </p>
                                </div>
                                <div class="skills-card">
                                    <i class="fa-solid fa-network-wired" style={{ fontSize: '40px', color: 'rgb(184, 132, 227)', }}></i>
                                    <h3>WEB DEVELOPMENT</h3>
                                    <p>I have developed HTML, CSS, and JS skills when I was completing my capstone project. Over time, I have gained a wealth of experience designing and developing web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

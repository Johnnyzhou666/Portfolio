import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import './index.css';
export default class About extends Component {
    render() {
        return (
            <Card className="quote-card-view">
                <Card.Body>
                    <div className="container-fluid back" style={{ textAlign: "justify" }} id="about" >
                        <h2 className="text-center" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            WHO <strong className="purple">AM I?</strong>
                        </h2>
                        <br />
                        <p >I have completed Honours BSc in Maths and Computing at <span className="purple"> McMaster University. </span>
                            <br />
                            Apart from coding, You can often find me:
                        </p>
                        <div className="mar-left">
                            <ul>
                                <li className="about-activity">
                                    <ImPointRight /> Playing Games
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> Writing Tech Projects
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> Travelling
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

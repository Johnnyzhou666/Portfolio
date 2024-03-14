import React, { Component } from "react";
import { Link } from "react-scroll";
import './index.css';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer className="container-fluid text-center container1">
                    <br />
                    <a href="#top" title="To Top">
                        <span className="bi bi-chevron-up"></span>
                    </a>
                    <p>Return to Top</p>
                    <a href="javascript:void(0)">
                        <Link className="nav-link" to="footer"
                            smooth={true}
                            offset={200}
                            duration={500} ><h2 className="text-center" id="contact">CONTACT</h2></Link>
                    </a>
                    <p className="font"><span className="bi bi-pin-map-fill"></span> Toronto, Canada</p>
                    <p className="font"><span className="bi bi-envelope"></span><a href="zhouzq9@gmail.com"> zhouzq9@gmail.com</a></p>
                    <br />
                </footer>
            </div>
        )
    }

}
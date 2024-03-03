import React, { Component } from "react";
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
                    <h2 class="text-center" id="contact">CONTACT</h2>
                    <p class="font"><span class="bi bi-pin-map-fill"></span> Toronto, Canada</p>
                    <p class="font"><span class="bi bi-envelope"></span><a href="zhouzq9@gmail.com"> zhouzq9@gmail.com</a></p>
                    <br />
                </footer>
            </div>
        )
    }

}
import React, { Component } from "react";
import './index.css';
export default class Banner extends Component {
    render() {
        return (
            <div className="background1" id="home">
                <div className="flex-container">
                    <div className="text-center container">
                        <br />
                        <div className="animation1"><h1 className="banner-text">Johnny Zhou</h1></div>
                        <br />
                        <br />
                        <h3>Hi! I'm Johnny, a graduated Software student with a deep passion for technology and innovation. I am keen on discovering and challenging.</h3>
                    </div>
                    <img className="banner-img" src={process.env.PUBLIC_URL + '/about.png'} alt="" />
                </div>
            </div>
        )
    }

}

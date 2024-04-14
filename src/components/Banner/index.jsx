import React, { Component } from "react";
import './index.css';
export default class Banner extends Component {
    render() {
        return (
            <div className="background1 flex-container" id="home">

                <div className="text-center container">
                    <br />
                    <div className="animation1"><h1 className="banner-text">Johnny Zhou</h1></div>
                    <br />
                    <br />
                    <h3>Hi! I'm Johnny, a graduated Software student with a deep passion for technology and innovation. I am keen on discovering and challenging.</h3>
                </div>
                <div style={{ width: "100%" }}><img className="banner-img" src={process.env.PUBLIC_URL + '/about.png'} alt="" /></div>

            </div>
        )
    }

}

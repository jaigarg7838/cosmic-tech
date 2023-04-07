import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Button } from "reactstrap";

// import video from " ./assets/img/home/video.mp4";


class HomePage extends Component {
    render() {
        return (
            <div id="home">
                <video autoPlay muted loop className="myVideo" loading="lazy">
                    <source src="https://cosmic-tech.s3.ap-south-1.amazonaws.com/assets/img/home/homeVideo3.mp4" type="video/mp4" alt="Cosmic Technologies"/>
                </video>
                <div className="HomePhoto">
                    <div>
                    <h1 className="homeHeading1 mb-0">We Develop Softwares</h1>
                    <h1 className="homeHeading1">Websites and Apps</h1>
                    </div>
                    <h3 className="homeHeading2">We are team of talented software engineers.</h3>
                    <div className="text-center  pt-3">
                    <Button type="button" className="bg bg-primary btn-nav-link"><NavHashLink to="/#aboutus" className="nav-get-start">Get Started</NavHashLink></Button>
                    </div>
                    <p className="mt-4 homeHeading3">How can we help you ?</p>
                </div>
            </div>
        )
    }
}

export default HomePage;
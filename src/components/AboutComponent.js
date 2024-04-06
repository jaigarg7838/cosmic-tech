import React, { Component } from "react";
import { Card } from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div id="aboutus">
            <section className="pageBackground">
            {/*<div data-aos="fade-up">
                <h1 className="headingText marginHeading">About Us</h1>
                <div className="container d-flex align-items-stretch" data-aos="zoom-in">
                    <div className="row">
                            <img src="./assets/img/aboutus/img3.gif" className="col-md-6 col-12 cardImage" /> 
                        <div className="col-md-6 cardContent col-12">
                            <div className="mb-4">
                                Our team is very experienced and has a passion for solving problems. Problems
                                might be tough, but we are tougher.
                            </div>
                            <div className="mb-4">
                                We have well designed processes to make sure we deliver only the best quality
                                software to our clients.
                            </div>
                            <div className="mb-4">
                                We have in-depth knowledge in web technologies, which help us in building awesome
                                awesome websites and apps.
                            </div>
                            <div className="mb-4">
                            We are dreamers like our clients. We like to sit with our clients and help them
              brainstorm ideas to realize their dreams. Problem-solving is in our genes.
                            </div>
                        </div>
                    </div>
                </div> */}
                

                <div className="card-wrapper container mt-4" data-aos="zoom-in">
                    <div className="card cardBorder">
                        <div className="card-body cardContentBlue">
                            <img src="./assets/img/aboutus/nitin.jpeg" className="nitinImg" alt="Nitin Garg"/>
                            <div className="mt-4 ">
                                <h1 className="pt-md-2">Mr.Nitin Garg</h1>
                                <h3>CEO & Co-founder</h3>
                                <p className="cardNitinContent">Cosmic Technologies is a software development company started in 2016 by Mr. Nitin
                                Garg.</p>
                            <p className="cardNitinContent">
                                Nitin is a thought leader in immersive technologies and a renowned name in deep tech implementations for businesses to ensure high ROIs.
                                {/* In our earlier stages, we worked on a few startup ideas. Later we realized how
                                hard it was to bring ideas to life. With all the learning and experience we gathered
                                from our startup, we decided to help others fulfill their dreams and started our
                                software consultation. */}
                            </p>
                          
                            <p className="cardNitinContent">
                                We are dreamers like our clients. We like to sit with our clients and help them
                                brainstorm ideas to realize their dreams. Problem-solving is in our genes. It is one of
                                our qualities that our clients appreciate the most. We love to help our clients remove
                                any roadblock they face in their journey to bring their dreams to reality.
                            </p>

                            <p className="cardNitinContent">
                                Are you a dreamer just like us? Do you want to turn yours idea into a real life app?
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="card-wrapper container mt-4" data-aos="zoom-in">
                    <div className="card cardBorder">
                        <div className="card-body cardContentBlue">
                            <img src="./assets/img/aboutus/imgNit.jpg" className="nitinImg" alt="Nitin Garg"/>
                            <div className="mt-4 ">
                                <h1 className="pt-md-2">Mr.Harshit Gupta</h1>
                                <h3>Co-founder</h3>
                                <p className="cardNitinContent">Cosmic Technologies is a software development company started in 2016 by Mr. Nitin
                                Garg.</p>
                            <p className="cardNitinContent">
                                Nitin is a thought leader in immersive technologies and a renowned name in deep tech implementations for businesses to ensure high ROIs.
                                {/* In our earlier stages, we worked on a few startup ideas. Later we realized how
                                hard it was to bring ideas to life. With all the learning and experience we gathered
                                from our startup, we decided to help others fulfill their dreams and started our
                                software consultation. */}
                            </p>
                          
                            <p className="cardNitinContent">
                                We are dreamers like our clients. We like to sit with our clients and help them
                                brainstorm ideas to realize their dreams. Problem-solving is in our genes. It is one of
                                our qualities that our clients appreciate the most. We love to help our clients remove
                                any roadblock they face in their journey to bring their dreams to reality.
                            </p>

                            <p className="cardNitinContent">
                                Are you a dreamer just like us? Do you want to turn yours idea into a real life app?
                            </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </section>
            </div>
        )
    }
}

export default About;

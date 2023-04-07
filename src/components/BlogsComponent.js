import React, { Component } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavHashLink } from "react-router-hash-link";

class Blogs extends Component {
    componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration : 1000
          });
    }
    render() {
        return (
            <>
                <div id="blog">
                    <div data-aos="fade-up">
                        <img src="./assets/img/blog/blogs/img4.jpg" className="blogsImg" />
                        <div className="blogsContent">
                            <p className="blogsHeading1">Hello! Welcome to</p>
                            <h1 className="blogsHeading2">Blogs</h1>
                        </div>
                    </div>
                </div>
                <main id="blog-main">

                    <section >
                        <div >
                            {/* <h1 className="headingText marginHeading">Blogs</h1> */}
                        </div>
                    </section>

                    <section className="inner-page pageBackground">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-6-5.jpg" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog1#blog1' className="breadcrumbUnderline">
                                                    WordPress vs HTML
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">September 27, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-5.png" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog2#blog2' className="breadcrumbUnderline">
                                                    What is HTTP and HTTPS, and why your website should use HTTPS ?
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">September 14, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-4.png" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog3#blog3' className="breadcrumbUnderline">
                                                    6 reasons for Why your Business needs a website
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">August 23, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-3.png" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog4#blog4' className="breadcrumbUnderline">
                                                    How to automate MERN app deployment with Bitbucket pipelines
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">July 28, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-2.png" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog5#blog5' className="breadcrumbUnderline">
                                                    Scheduling cron jobs with AWS Event bridge and AWS Lambda
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">July 18, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 blog" data-aos="zoom-in">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/blog-1.jpg" />
                                        </div>
                                        <div className="blog-title">
                                            <h4>
                                                <NavHashLink to='/Blog6#blog6' className="breadcrumbUnderline">
                                                    5 simple steps (with screenshots) to deploy your MERN app
                                                </NavHashLink>
                                            </h4>
                                            <p className="text-muted mt-auto">July 14, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </>
        )
    }
}

export default Blogs;
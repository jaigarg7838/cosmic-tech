import React, { Component } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
function Footer(){
    return(
        <>
       <footer id="footer">

<div className="footer-top">
    <div className="container">
        <div className="row">

            <div className="col-lg-4 col-md-6 footer-contact">
                <h3>Cosmic Technologies</h3>
                <p>
                A-2 402, Sector 8<br/>
                    Rohini, New Delhi<br/>
                    Delhi-110085, India <br/><br/>
                    <strong>Phone:</strong> +91 935 0937 539<br/>
                    <strong>Email:</strong> nitin@cosmictechnologies.in<br/>
                </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink className="breadcrumbUnderline" to='/#home'>Home</NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink className="breadcrumbUnderline" to='/#aboutus'>About Us</NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink className="breadcrumbUnderline" to='/#services'>Services</NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink className="breadcrumbUnderline" to='/#portfolio'>Portfolio</NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink className="breadcrumbUnderline" to='/#contactus'>Contact us</NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i> <NavHashLink className="breadcrumbUnderline" to='/blog#blog'>Blog</NavHashLink></li>
                  
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Featured Blogs</h4>
                <ul>
                    <li><i className="bx bx-chevron-right"></i> <NavHashLink to='/Blog1#blog1' className="breadcrumbUnderline">
                                                    WordPress vs HTML
                                                </NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i>  <NavHashLink to='/Blog2#blog2' className="breadcrumbUnderline">
                                                    What is HTTP and HTTPS, and why your website should use HTTPS ?
                                                </NavHashLink></li>
                    <li><i className="bx bx-chevron-right"></i> <NavHashLink to='/Blog3#blog3' className="breadcrumbUnderline">
                                                    6 reasons for Why your Business needs a website
                                                </NavHashLink></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="container">

    <div className="copyright-wrap d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
                &copy; Copyright <strong><span>Cosmic Technologies</span></strong>. All Rights Reserved
            </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://twitter.com/garg_tech" target="_blank" rel="noreferrer noopener" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/gargTech/" target="_blank" rel="noreferrer noopener" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/garg_tech" target="_blank" rel="noreferrer noopener" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/company/garg-tech" target="_blank" rel="noreferrer noopener" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
    </div>

</div>
</footer>
</>
    );
}

export default Footer;
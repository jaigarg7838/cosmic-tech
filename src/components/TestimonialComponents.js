import React, { Component } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Testimonial extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="testimonial">
      <div data-aos="fade-up" className="pageBackground2">
        <h2 className="headingText marginHeading"> Testimonial</h2>
        <Slider {...settings}>
          <div>
            <div className="card testimonialCard h-100" >
              <div className="imgTesti">
                <img className="rounded-circle avatar center"
                  src="./assets/img/testimonial/avatar2.jpg" alt="avatar" />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Arvind Tiwari </h5>
                <p className="card-text">
                  <i className="fa fa-quote-left p-2"></i>

                  I have worked with team Cosmic Technologies and am glad that I have chosen them for my
                  projects. They were always right on my instructions and delivered quality
                  software components on time and within my budget. Cosmic Technologies consultants are very
                  competent, a special shout-out to Nitin Garg, the company’s founder. He has
                  excellent technical capabilities with great interpersonal skills and is a
                  friendly person to work with. I strongly recommend Cosmic Technologies for any large-scale
                  web application development involving modern technologies (e.g., AWS,
                  Kubernetes, Docker, MERN, etc.). I wish all the best for Cosmic Technologies and Nitin.
                  <i className="fa fa-quote-right p-2"></i></p>
                <div className="card-text">
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li> <i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                  </ul></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card testimonialCard h-100" >
              <div className="imgTesti">
                <img className="rounded-circle avatar center"
                  src="./assets/img/testimonial/avatar1.png" alt="avatar" />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Piyush Kapoor</h5>
                <p className="card-text">
                  <i className="fa fa-quote-left p-2"></i>
                  Team lead is well experienced and holds in depth knowledge of his domain. The
                  project I asked for was delivered well before time. Project quality delivered as
                  promised.
                  <i className="fa fa-quote-right p-2"></i>
                </p>
                <div className="card-text">
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li> <i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                  </ul></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card testimonialCard h-100" >
              <div className="imgTesti">
                <img className="rounded-circle avatar center"
                  src="./assets/img/testimonial/avatar3.png" alt="avatar" />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Praveen Gupta</h5>
                <p className="card-text">    <i className="fa fa-quote-left p-2"></i>
                  They have very good knowledge of software development.
                  <i className="fa fa-quote-right p-2"></i></p>
                <div className="card-text">
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li> <i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                  </ul></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card testimonialCard h-100" >
              <div className="imgTesti">
                <img className="rounded-circle avatar center"
                  src="./assets/img/testimonial/avatar4.jpg" alt="avatar" />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Harshit Gupta</h5>
                <p className="card-text">    <i className="fa fa-quote-left p-2"></i>
                  Professional service, expert in their field. I'm very satisfied.
                  <i className="fa fa-quote-right p-2"></i></p>
                <div className="card-text">
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li> <i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                    <li><i className="fa fa-star "></i></li>
                  </ul></div>
              </div>
            </div>
          </div>
          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
      </div>
    );
  }
}

export default Testimonial;
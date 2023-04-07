import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const API_URL = ' https://5gg1k0vvz3.execute-api.ap-northeast-1.amazonaws.com/default/contactus';


function c(str) {
    return document.getElementById(`${str}`);
}

function _error(e, c) {
	let next = document.getElementById(`validation-${c}`);
	next.innerText = e;
	next.style.display = "block";
}

function handler(e) {
var emailRegex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
var mobileRegex = /^[1-9][0-9]+$/;

    e.preventDefault();
    let ee = c('email'), email = ee.value,
        ne = c('name'), name = ne.value,
        se = c('subject'), subject = se.value,
        me = c('message'), message = me.value,
        suc_e = c('success'), ee_e = c('error'),
        le_e = c('loading'), error = false;

    ee_e.style.display = 'none';
    console.log(suc_e);
    suc_e.style.display = 'none';
    le_e.style.display = 'block';

    let err_message = '';

    suc_e.innerText = ee_e.innerText = "";

    // email error, class name validation-e
    if (email.length === 0 || !emailRegex.test(email)) {
        error = "Please enter a valid email id";
    }

    // name error, class name validation-n
    if (name.length < 3) {
        error = "Name should contain at least 3 chars";
    }

    // subject error, class name validation-s
    if (subject.length < 4) {
        error = "Subject should contain at least 4 chars";
    }

    // message error, class name validation-m
    if (message.length === 0) {
        error = "Please write a message for us";
    }

    if (error) {
        ee_e.style.display = 'block';
        ee_e.innerText = error;
        return;
    }

    fetch(API_URL, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
    })
        .then(res => {
            if (res.status == 200) {
                ee.value = "";
                ne.value = "";
                se.value = "";
                me.value = "";
                suc_e.style.display = 'block';
                suc_e.innerText = 'Message sent successfully';
            }
            else {
                ee_e.style.display = 'block';
                ee_e.innerText = "Some error occurred while submitting response";
                ee_e.style.backgroundColor = 'red';
            }
        })
        .catch(err => {
            console.log(err);
            ee_e.style.display = 'block';
            ee_e.style.backgroundColor = 'red';
            ee_e.innerText = "Some error occurred while submitting response";
        })
        .finally(() => {
            le_e.style.display = 'none';
        })
}


class Contact extends Component {
	componentDidMount() {
		AOS.init();
	}
	render() {
		return (
			<div >
			<div className="pageBackground" data-aos="fade-up" id="contactus">
				<section id="contact" className="contact section-bg mb-4">
					<h2 className="headingText marginHeading">Contact Us</h2>
					<div className="container" data-aos="zoom-in">
						<div className="row contactCoffee">
							<div className="col-md-6 contactCoffeeDiv1">
								<h1 className="coffeeHeading">We're here</h1>
								<p>Our door is always open for a good cup of coffee.</p>
							</div>
							<div className="col-md-6 contactCoffeeDiv2">
								<div className="info">
									<div className="address">
										<i className="bi bi-geo-alt"></i>
										<h4>Location:</h4>
										<p className="addressSize">A-2 402, sector 8 Rohini New Delhi - 110085</p>
									</div>

									<div className="email">
										<i className="bi bi-envelope"></i>
										<h4>Email:</h4>
										<p>nitin@cosmictechnologies.in</p>
									</div>

									<div className="phone">
										<i className="bi bi-phone"></i>
										<h4>Call:</h4>
										<p>+91 935 0937 539</p>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5" data-aos="zoom-in">
							<div className="col-lg-4">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.592769870795!2d77.12052551561631!3d28.701825982390453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031881934983%3A0xd883404164225379!2sCosmic%20Technologies!5e0!3m2!1sen!2sin!4v1663760196727!5m2!1sen!2sin" allowFullScreen="" loading="lazy" className="addressNav"></iframe>
							</div>

							<div className="col-lg-8 mt-5 mt-lg-0">

								<form id="contact-form" className="php-email-form h-100" onSubmit={handler}>
									<div className="row">
										<div className="col-md-6 form-group">
											<input type="text" id="name" className="form-control"
												placeholder="Your Name" required />
											<div className="validation" id="validation-n"></div>
										</div>
										<div className="col-md-6 form-group mt-3 mt-md-0">
											<input type="email" className="form-control" id="email"
												placeholder="Your Email" required/>
											<div className="validation" id="validation-e"></div>
										</div>
									</div>
									<div className="form-group mt-3">
										<input type="text" className="form-control" id="subject"
											placeholder="Subject" required />
										<div className="validation" id="validation-s"></div>
									</div>
									<div className="form-group mt-3">
										<textarea className="form-control" id="message" rows="5" placeholder="Message"
											required></textarea>
										<div className="validation" id="validation-m"></div>
									</div>
									<div className="my-3">
										<div id="loading" className="loading" >Loading</div>
										<div id="error" className="error-message"></div>
										<div id="success" className="sent-message" >Your message has been sent. Thank you!</div>
									</div>
									<div className="text-center"><button type="submit">Send Message</button></div>
								</form>

							</div>

						</div>

					</div>
				</section>
			</div>
			</div>
		)
	}
}

export default Contact;
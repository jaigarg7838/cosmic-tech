import React, {Component } from "react";
import { Link } from "react-router-dom";

class Blog2 extends Component{
    render(){
        return(
            <>
            <div id="blog2" className="blogPadding"></div>
            <div>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <ol className="breadcrumbOlFont">
                            <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
                            <li><Link to="/blog" className="breadcrumbUnderline">Blog</Link></li>
                            <li> HTTP and HTTPS</li>
                        </ol>
                    </div>
                </div>
            </section>
    <section className="inner-page">
                <div className="container">
                    <div className="blog-post">
                        <h1>What are HTTP and HTTPS protocols, and why websites should use HTTPS?</h1>
                        <p>
                            Internet is a gigantic collection of computers. These computers are connected to each other
                            mainly by wires and sometimes using wireless mediums. These computers communicate with each
                            other to provide users with the information they need. But to share information, the
                            computers must be able to understand what the other computer is saying, that is they must
                            have a common language which both of them can understand.
                        </p>

                        <h6>
                            The common language...
                        </h6>

                        <p>
                            HTTP (HyperText Transfer Protocol) is the common language that helps computers in
                            transmitting data. The HTTP protocol defines a specific format and method which computers
                            use to ask questions (a request for some data) and answer (a response with the requested
                            data) those questions.
                        </p>

                        <img src="assets/img/blog/blog-5-1.png" className="img img-fluid" />

                        <p>
                            HTTP is a really cool protocol that helps computers in exchanging data, but it has a
                            drawback. All the data exchanged between the computers travels as it is on the wire. So, if
                            a computer sends a request it will be without any encryption and its response will also be
                            non-encrypted. And so it can be very easily overheard by anybody in between these 2
                            computers. This is an issue for an application, where you need to provide your
                            passwords/credit card/debit card info or any other personal info.
                        </p>

                        <h6>
                            HTTPS to the rescue...
                        </h6>

                        <p>
                            HTTPS (HyperText Transfer Protocol Secure) was invented by Netscape in 1994 to overcome the
                            drawbacks of HTTP. HTTPS protocol defines a specific format and method to convert requests
                            and responses into another string that only the recipient can understand.
                        </p>

                        <img src="assets/img/blog/blog-5-2.png" className="img img-fluid" />

                        <h6>
                            Ok, but how?
                        </h6>

                        <p>
                            HTTPS takes advantage of a mathematical technique(asymmetric key cryptography AKA Public-key
                            cryptography). It takes data and a publicly available key published by the website as input
                            and converts data into a code. The code can be decoded using only a privately held key.
                        </p>

                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src="assets/img/blog/blog-5-3.png" className="img img-fluid" />
                                <p className="text-center"><strong>Asymmetric key cryptography</strong></p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src="assets/img/blog/blog-5-4.png" className="img img-fluid" />
                                <p className="text-center"><strong>Symmetric key cryptography</strong></p>
                            </div>
                        </div>


                        <p>
                            This technique provides one-way security. Client computers and websites use this technique
                            to share a public key. Actual data is encrypted using another mathematical
                            algorithm(symmetric key cryptography AKA Symmetric-key algorithm); that takes session key
                            and data to generate a code. The code can be decoded using the same session key only.
                        </p>

                        <p>
                            Web browsers use HTTPS to encrypt your session key with the public key (SSL certificate) and
                            share it with the website. The web server decrypts the key using the private key, and then
                            both web browser and web server use the session key to encrypt any data that needs to be
                            exchanged. A new session key is generated every time the client computer sends a new HTTPS
                            request.
                        </p>

                        <img src="assets/img/blog/blog-5-5.png" className="img img-fluid" />

                        <h6>
                            HTTPS is good, but do I need it?
                        </h6>

                        <p>
                            YES! even if your website does not collect any sensitive data using HTTP is dangerous. The
                            content shared over HTTP can be tempered and your user may end up getting pawned on your
                            site. A person with malicious intent might temper data sent by your website to show a form
                            and collect personal user data, which can then be used for cybercrimes.
                        </p>

                        <h5>Is your website HTTPS protected? <a href='/#contact'>Contact Us</a> Today to get HTTPS
                            protection for your website.</h5>

                    </div>
                </div>
            </section>

            </div>
            </>
        )
    }
}

export default Blog2;
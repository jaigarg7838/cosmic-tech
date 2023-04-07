import AOS from "aos";
import React, { Component, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { OpenJob } from "../shared/career";

function Careers() {
    const Navigation = useNavigate();
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 1000
          });
      }, []);


    return (
        <>
            <div id="career">
                <div  data-aos="fade-up">
                    <img src="./assets/img/career/img8.jpg" className="blogsImg"/>
                    <div className="blogsContent">
                        <p className="careerHeading1">Career Opportunities</p>
                    </div>
                </div>
            </div>

            <section className="pageBackground">
                <div className="container">
                    <div className=" jobContent" data-aos="fade-up">
                        <h1 className="careerHead">Job Opportunities</h1>
                        <h4 className="careerHead1">Career Opportunities</h4>
                        <p>Promoting diversity and inclusivity, we recruit team players who are keen to grow into leaders capable of managing client’s expectations at every level of organisation.</p>
                        <p>Whether trusted advisors to top management or as hands-on coaches for front line employees, we create an environment encouraging open learning and growth. For every project and opportunity, we put together a team that will not only promote your existing skills but help you gain experience and expertise in latest technologies. Our goal is to optimize our business relationships to provide you with the opportunities for your individual growth.</p>
                    </div>
                    <div className="accordion" id="accordionExample " data-aos="fade-up">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button accordionIcon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Take a Look at the open positions
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-aos="fade-up">
                                <div className="accordion-body">
                                    <div className="container">
                                        {
                                            OpenJob.map((item, id) => {
                                                return (
                                                    <div className="d-flex paddingAcc">
                                                        <div className="d-flex flex-column">
                                                            <h5 className="accBottom">{item.Jobname}</h5>
                                                            <p>{item.location}</p>
                                                        </div>
                                                        <div className="d-block ms-auto">
                                                            <div onClick={() => {
                                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                                            }}>
                                                                <Button type="button" className="bg bg-primary btn-nav-link" onClick={() => {
                                                                    Navigation(
                                                                        "/Career1", { state: item }
                                                                    )
                                                                }}>Apply Now</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="career-page" data-aos="fade-up">
                            <h2 className="my-5 careerHead" data-t>Why Join Us?</h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 marginDivCareer">
                                    <div>
                                        <img src="/assets/img/careers/book-150x150.png" />
                                        <h6 className="h8 contentBottom" data-t>Progressive learning environment</h6>
                                        <p className="paragraph2 paraTop" data-t>Learning never stops at our organisation! We believe that individual learning is essential and sums up to overall growth.</p>
                                    </div>
                                    <div >
                                        <img className="img imgBottom" src="/assets/img/careers/innovation-150x150.png" />
                                        <h6 className="h8" data-t>Encourage Innovation</h6>
                                        <p className="paragraph2" data-t>We welcome every new idea from everyone across the team as creativity can breed anywhere.</p>
                                    </div>
                                    <img className="img" src="/assets/img/careers/united-150x150.png" />
                                    <h6 className="h8" data-t>Employee Friendly Teams</h6>
                                    <p className="paragraph2" data-t>Synergy of all together creates the best and positive work environment and we support everyone on the path of growth and development.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
                                    <img src="/assets/img/careers/female-and-male-shapes-silhouettes-outlines-150x150.png" />
                                    <h6 className="h7 contentBottom" data-t>Promote diversity and Inclusivity</h6>
                                    <p className="paragraph2 paraTop" data-t>Equality of roles and responsibilities for people from every gender, race, caste, creed, and country.</p>
                                    <img className="img" src="/assets/img/careers/winner-150x150.png" />
                                    <h6 className="h8" data-t>Global recognition</h6>
                                    <p className="paragraph2" data-t>Our strong global network is intra-connected and works together in a collaborative manner for successful completion of projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careers;
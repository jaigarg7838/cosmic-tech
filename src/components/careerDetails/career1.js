import React, { Component, useEffect } from "react";
import { Button } from "reactstrap";
import {useLocation} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import AOS from "aos";

function Career1(props) {
    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 500
          });
      }, []);
    
    let location = useLocation();
    const item = location.state;
    
        return (
<>   
<div id="career1" className="blogPadding"></div>
            <section>
                <div className="container marginWholeJob" data-aos="fade-up">
                    <div className="d-flex paddingCareer careerColor">
                        <div className="d-flex flex-column">
                            <h5 className="accBottom">{item.Jobname}</h5>
                            <p className="pt-1">{item.location}</p>
                        </div>
                        <div className="d-block ms-auto">
                            <Button type="button" className="bg bg-info btn-nav-link careerButton btnNoColor" onClick={() => {
                                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                                            }}><NavLink to="/ApplyJobForm" className="nav-get-start">APPLY FOR THIS JOB</NavLink></Button>
                        </div>
                    </div>
                                <div className="container m-md-4" data-aos="fade-up">
                                <div>    <p className="aboutJob">About Cosmic Technologies</p>
                                    <p>{item.AboutCosmicContent1}</p>
                                    <p>
                                     {item.AboutCosmicContent2}
                                    </p>
                                </div>
                                <div data-aos="fade-up">
                                    <p className="aboutJob">About Role</p>
                                    <p className="padBot"><b>Role:</b>&nbsp;{item.Role}</p>
                                    <p className="padBot"><b>Primary Skill set:</b>&nbsp;{item["Primary Skill set"]}</p>
                                    <p className="padBot"><b>Secondary Skill set:</b>&nbsp;{item["Secondary Skill set"]}</p>
                                    <p className="padBot"><b>Experience:</b>&nbsp; {item.Experience}</p>
                                    <p className="padBot"><b>Work Type:</b>&nbsp; {item["Work Type"]}</p>
                                    <p className="padBot"><b>Eligibility:</b>&nbsp; {item.Eligibility}</p>
                                </div>
                                <div data-aos="fade-up">
                                    <p className="aboutJob">About Responsibilities</p>
                                    <ul>
                                        <li>{item.Responsibility1}</li>
                                      <li>{item.Responsibility2}</li>
                                      <li>{item.Responsibility3}</li>
                                     <li> {item.Responsibility4}</li>
                                     <li>{item.Responsibility5}</li>
                                     <li>{item.Responsibility6}</li>
                                    </ul>
                                </div>
                                <div data-aos="fade-up">
                                <p className="aboutJob">General Expectations</p>
                                <ul>
                                       <li>{item.GeneralExpectation1}</li>
                                       <li>{item.GeneralExpectation2}</li>
                                       <li>{item.GeneralExpectation3}</li> 
                                       <li>{item.GeneralExpectation4}</li> 
                                       <li>{item.GeneralExpectation5}</li>
                                       <li>{item.GeneralExpectation6}</li>                                     
                                    </ul>
                                </div>
        
                            </div>
                </div>
            </section>
            </>
        )
    }
export default Career1;
import React,{ Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

class TechStack extends Component{
  componentDidMount() {
    AOS.init();
}
    render(){
        return(
          <div id="techstack"> 
          <div className="pageBackground">
            <section id="tech-stack" className="tech-stack">
            <div className="container" data-aos="fade-up">
      
              <div className="section-title">
                <h2 className="headingText marginHeading">Tech Stack</h2>
              </div>
      
              <div className="row icon-boxes">
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='./assets/img/tech/react.png' />
                    <h4>React JS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='./assets/img/tech/angular.png' />
                    <h4>Angular JS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='./assets/img/tech/vue.png' />
                    <h4>Vue JS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='./assets/img/tech/nodejs.png' />
                    <h4>Node JS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/go.png' />
                    <h4>Golang</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/spring.png' />
                    <h4>Spring Boot</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/mongodb.png' />
                    <h4>MongoDB</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/postgresql.png' />
                    <h4>PostgreSQL</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/redis.png' />
                    <h4>Redis</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/nginx.png' />
                    <h4>Nginx</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/apache.png' />
                    <h4>Apache Webserver</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/iis.png' />
                    <h4>Microsoft IIS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/aws.png' />
                    <h4>AWS</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/azure.png' />
                    <h4>Azure</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/gcp.png' />
                    <h4>GCP</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/kubernetes.png' />
                    <h4>Kubernetes</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/docker.png' />
                    <h4>Docker</h4>
                  </div>
                </div>
      
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="icon-box">
                    <img src='assets/img/tech/selenium.png' />
                    <h4>Selenium</h4>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
          </div>
          </div>
        )
    }
}
export default TechStack;
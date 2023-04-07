import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./ServicesComponent";
import Portfolio from "./PortfolioComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Testimonial from "./TestimonialComponents";
import TechStack from "./TechStackComponent";
import Faq from "./Faq";
import HomePage from "./HomePageComponent";
import Marquee from "react-fast-marquee";
import Careers from "./CareersComponent";


const App = () => (
    <Marquee speed={150} >
      <div className=" d-flex align-items-center justify-content-center mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-1.png" className=" marqueeImg" alt="" />
                        </div>                     
                        <div className=" d-flex align-items-center justify-content-center mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-2.png" className=" marqueeImg" alt="" />
                        </div>
                        <div className=" d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-3.png" className=" marqueeImg" alt="" />
                        </div>
                        <div className=" d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-4.png" className=" marqueeImg" alt="" />
                        </div>
                        <div className=" d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-5.png" className=" marqueeImg marqueeImag2" alt="" />
                        </div>
                        <div className=" d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-6.png" className=" marqueeImg" alt="" />
                        </div>
    </Marquee>
  );

function ClientImage(){
    return(
        <>
             <div className="d-flex marque">   
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-1.png" className="img-fluid marqueeImg" alt="" />
                        </div>                     
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-2.png" className="img-fluid marqueeImg" alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-3.png" className="img-fluid marqueeImg" alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-4.png" className="img-fluid marqueeImg" alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-5.png" className="img-fluid marqueeImg" alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center  mx-4" data-aos="zoom-in">
                            <img src="assets/img/clients/client-6.png" className="img-fluid marqueeImg" alt="" />
                        </div>
                        </div>
        </>
    )
}

function ClientBrand() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <div className="row" data-aos="fade-up">
                <div className="col-md-4 col-sm-12  d-flex align-items-center">
                    <p className="clientsName"> Brands We've <span className="text-primary"> Augmented </span></p>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="row mx-2">
                       <App />
                    </div>

                </div>
            </div>

        </>
    )
}

function Home() {
    return (
        <>
            <div className="homeScroll">
                <HomePage/>
                <ClientBrand />
                <About/>
                <Services/>
                <Faq/>
                <Testimonial/>
                <TechStack/>
                <Portfolio/>
                <Contact/>
            </div>
        </>
    )
}

export default Home;
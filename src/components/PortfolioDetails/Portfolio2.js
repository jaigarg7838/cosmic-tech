import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

class Portfolio2 extends Component {
  render() {
    const Dataslide1 = [
      {
        id: 6,
        name: "Proper Devsecops",
        category: "Website",
        client: "Tywar Technologies",
        projectDate: "April 2021",
        projectUrl: " https://foodelys.com",
        projectInfo: "Proper Devsecops help people to enter Cyber Security Sector. Learn from experts and become a Devsecops Engineer, GRC Specialist,Cloud Security Architect.",
        img1: "./assets/img/portfolio/foodelys.webp",
        img2: './assets/img/portfolio/foodelys2.webp',
        img3: "./assets/img/portfolio/foodelys3.webp",
        img4: "./assets/img/portfolio/foodelys4.webp",
      }
    ]
    return (
      Dataslide1.map((item, id) => {
        return (
          <>
          <div id="portfolio2" className="portfolioIdPadding"></div>
          <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol className="breadcrumbOlFont">
                  <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
            <li><NavHashLink to="/#portfolio" className="breadcrumbUnderline">Portfolio Details</NavHashLink></li>
            <li>Foodelys</li>
          </ol>
        </div>

      </div>
    </section>
          <section id="portfolio-details" className="portfolio-details  portfolioCarousel">
            <div className="container">

              <div className="row gy-4">

                <div className="col-lg-8">
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={2000}
                  >
                    <div data-src={item.img1} alt="Image 1"/>
                    <div data-src={item.img2} alt="Image 2"/>
                    <div data-src={item.img3} alt="Image 3"/>
                    <div data-src={item.img4} alt="Image 4"/>
                  </AutoplaySlider>
                </div>

                <div className="col-lg-4">
                  <div className="portfolio-info">
                    <h3>{item.name}</h3>
                    <ul>
                      <li><strong>Category</strong>: {item.category}</li>
                      <li><strong>Client</strong>: {item.client}  </li>
                      <li><strong>Project date</strong>: {item.projectDate}</li>
                      <li><strong>Project URL</strong>: <a href="https://foodelys.com" target="_blank"> {item.projectUrl}</a></li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>{item.name}</h2>
                    <p>
                      {item.projectInfo}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>
          </>
        )
      })
    )
  }
}

export default Portfolio2;
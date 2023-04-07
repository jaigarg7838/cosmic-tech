import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const AutoplaySlider = withAutoplay(AwesomeSlider);

class Portfolio3 extends Component {
  render() {
    const Dataslide1 = [
      {
        id: 1,
        name: "JeeMB",
        category: "Website Development, Website Deployment",
        client: "ClickLocal Digital",
        projectDate: " February 2021",
        projectUrl: "  https://jeemb.com",
        projectInfo: "JeeMB is a Google My Business (GMB) listing management tool that is built for business owners and equipped with features to make local SEOs envy.",
        img1: "./assets/img/portfolio/jeemb.webp",
        img2: './assets/img/portfolio/jeemb2.webp',
        img3: "./assets/img/portfolio/jeemb3.webp",
        img4: "./assets/img/portfolio/jeemb4.webp",
        img5: "./assets/img/portfolio/jeemb5.webp"
      }
    ]
    return (
      Dataslide1.map((item, id) => {
        return (
          <>
          <div id="portfolio3" className="portfolioIdPadding"></div>
          <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol className="breadcrumbOlFont">
                  <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
            <li><NavHashLink to="/#portfolio" className="breadcrumbUnderline">Portfolio Details</NavHashLink></li>
            <li>JeeMB</li>
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
                    <div data-src={item.img5} alt="Image 5"/>
                  </AutoplaySlider>
                </div>

                <div className="col-lg-4">
                  <div className="portfolio-info">
                    <h3>{item.name}</h3>
                    <ul>
                      <li><strong>Category</strong>: {item.category}</li>
                      <li><strong>Client</strong>: {item.client}  </li>
                      <li><strong>Project date</strong>: {item.projectDate}</li>
                      <li><strong>Project URL</strong>: <a href="https://jeemb.com" target="_blank"> {item.projectUrl}</a></li>
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

export default Portfolio3;
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavHashLink } from "react-router-hash-link";

const dataslide = [
  {
    "id": "1",
    img: "./assets/img/portfolio/cyberrmp.webp",
    Link: "/Portfolio1#portfolio1"
  }
  ,
  {
    "id": "2",
    img: "./assets/img/portfolio/foodelys.webp",
    Link: "/Portfolio2#portfolio2"
  },
  {
    "id": "3",
    img: "./assets/img/portfolio/jeemb.webp",
    Link: "/Portfolio3#portfolio3"
  },
  {
    "id": "4",
    img: "./assets/img/portfolio/kwm.webp",
    Link: "/Portfolio4#portfolio4"
  },
  {
    "id": "5",
    img: "./assets/img/portfolio/nue.webp",
    Link: "/Portfolio5#portfolio5"
  },
  {
    "id": "6",
    img: "./assets/img/portfolio/pd.webp",
    Link: "/Portfolio6#portfolio6"
  },
  {
    "id": "7",
    img: "./assets/img/portfolio/tywar.webp",
    Link: "/Portfolio7#portfolio7"
  }
]

class Portfolio extends Component {
  componentDidMount() {
    AOS.init();
}
  render() {
    let settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
    }
    return (
      <div >
      <div className="pageBackground2" data-aos="fade-up"  id="portfolio">
        <h1 className="headingText marginHeading">Portfolio</h1>
        <ul className="ulPortfolio">

          <Slider {...settings}>
            {
              dataslide.map((item, id) => {
                return (
                  <NavHashLink to={item.Link}>
                    <li key={id}>
                      <div className="portfolioContainer">
                        <div className="mx-2">
                          <Card className="portfolioCard">
                            <CardImg src={item.img} className="image" alt="Portfolio Image"/>
                            <div className="middle">
                              <div className="text"><i className="bx bx-link"></i></div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </li>
                  </NavHashLink>
                )
              })
            }
          </Slider>
        </ul>
      </div>
      </div>
    )
  }
}


export default Portfolio;


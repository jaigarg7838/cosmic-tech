import React, { Component,useEffect, useRef } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, CardDeck } from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


class Services extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    AOS.init();
}

render(){
  return (
    <>
    <div id="services">
      <div className="container fullHeight pageBackground2" data-aos="fade-up">
        <h1 className="headingText marginHeading">Services</h1>
        <div className="row my-md-3 my-0 " >
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
            <div className="cardText cardColor p-3 cardShadow h-100 ">
            <Card className="border-0 cardImgBack">
              <CardImg src="./assets/img/services/img1.gif" className="card1 cardImg img-fluid" />
              <CardBody className="card1">
                <h3 className="cardHeading">Website Development</h3>
                <CardText className="cardText">Market your business effortlessly with a website.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
          <div className="cardText cardColor2 p-3 cardShadow h-100">
            <Card className=" border-0  cardImgBack2">
              <CardImg src="./assets/img/services/img2.gif" className="card2 cardImg img-fluid" />
              <CardBody className="card2">
                <h3 className="cardHeading">Web App</h3>
                <CardText className="cardText">Start your own online studio, academy or consultation service.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
          <div className="cardText cardColor p-3 cardShadow h-100"  >
            <Card className=" border-0 cardImgBack">
              <CardImg src="./assets/img/services/img3.gif" className="card3 cardImg img-fluid" />
              <CardBody className="card3">
                <h3 className="cardHeading">Website Maintenance</h3>
                <CardText className="cardText">Hosting and maintenance service for existing websites.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
        </div>
        <div className="row my-md-4 my-0">
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
          <div className="cardText cardColor2 p-3 cardShadow h-100">
            <Card className=" border-0  cardImgBack2">
              <CardImg src="./assets/img/services/img4.gif" className="card4 cardImg img-fluid" />
              <CardBody className="card4">
                <h3 className="cardHeading">Mobile App Development</h3>
                <CardText className="cardText">Reach millions of potential users using smartphone apps.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
          <div className="cardText cardColor p-3 cardShadow h-100" >
            <Card className="border-0  cardImgBack">
              <CardImg src="./assets/img/services/img5.gif" className="card5 cardImg img-fluid" />
              <CardBody className="card5">
                <h3 className="cardHeading">API Integration</h3>
                <CardText className="cardText">Add features to your app using a third party APIs.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
          <div className="col-md-4 pb-3 pb-md-0" data-aos="zoom-in">
          <div className="cardText cardColor2 p-3 cardShadow h-100">
            <Card className=" border-0  cardImgBack2">
              <CardImg src="./assets/img/services/img6.gif" className="card6 cardImg img-fluid" />
              <CardBody className="card6">
                <h3 className="cardHeading">Chatbot Development</h3>
                <CardText className="cardText">Automate interactions with customer. Help your customers faster with chatbots.</CardText>
              </CardBody>
            </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
 
}

export default Services;
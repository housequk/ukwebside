import "materialize-css";
import React, { Component, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import HouseQSAxo from "../SVG/HouseQSAxo.png"
import HouseQLAxo from "../SVG/HouseQLAxo.png"
import HouseQ35AAxo from "../SVG/HouseQ35AAxo.png"
import HouseQ35BAxo from "../SVG/HouseQ35BAxo.png"
import HouseQMicroAxo from "../SVG/HouseQMicro.svg"
import HouseQ70BAxo from "../SVG/QHouse70BAxoCalosc.svg"

const System = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  
    return (
      <Row className="">
     <br/><br/>

     <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="35a" className="pickHouse">
            <div
              data-aos="slide-up"
              data-aos-duration="3000"
              className="orange-text center"
            >
             <h3>
                House Q 35A
               
              </h3>
              <img
                src={HouseQ35AAxo}
                alt=""
                width="60%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="35b" className="pickHouse">
            <div
              data-aos="slide-up"
              data-aos-duration="4000"
              className="orange-text center"
            >
             <h3>
                House Q 35B
               
              </h3>
              <img
                src={HouseQ35BAxo}
                alt=""
                width="50%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="micro" className="pickHouse">
            <div
              data-aos="slide-up"
              data-aos-duration="4000"
              className="orange-text center"
            >
             <h3>
                House Q Micro
               
              </h3>
              <img
                src={HouseQMicroAxo}
                alt=""
                width="50%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="dachplaski" className="pickHouse">
            <div
              data-aos="slide-down"
              data-aos-duration="1000"
              className="orange-text center"
            >
              <h3>
                House Q F
               
              </h3>
              <img
                src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxoplaski.png"
                alt=""
                width="100%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="dachdwuspadowyq" className="pickHouse">
            <div
              data-aos="slide-down"
              data-aos-duration="2000"
              className="orange-text center"
            >
               <h3>
                House Q S
               
              </h3>
              <img
                src={HouseQSAxo}
                alt=""
                width="80%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="70b" className="pickHouse">
            <div
              data-aos="slide-down"
              data-aos-duration="2000"
              className="orange-text center"
            >
               <h3>
                House Q 70B
               
              </h3>
              <img
                src={HouseQ70BAxo}
                alt=""
                width="50%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="dachdwuspadowym" className="pickHouse">
            <div
              data-aos="slide-left"
              data-aos-duration="3000"
              className="orange-text center"
            >
               <h3>
                House Q M
               
              </h3>
              <img
                src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
                alt=""
                width="90%"
              />
             
            </div>
          </Button>
        </Col>
        <Col m={5} s={10} l={4} push="s1 m1 l">
          <Button node="a" href="dachdwuspadowyl" className="pickHouse">
            <div
              data-aos="slide-up"
              data-aos-duration="2000"
              className="orange-text center"
            >
              <h3>
                House Q L
               
              </h3>
              <img
                src={HouseQLAxo}
                alt=""
                width="100%"
              />
             
            </div>
          </Button>
        </Col>

      

      
      </Row>
     );

};

export default System;

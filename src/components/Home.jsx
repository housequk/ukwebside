import "materialize-css";
import React, { useEffect } from "react";
import {
  Card,
  CardPanel,
  CardTitle,
  Carousel,
  Col,
  Modal,
  Parallax,
  Row,
  Slide,
  Slider,
} from "react-materialize";
import Button from "react-materialize/lib/Button";
import Divider from "react-materialize/lib/Divider";
import ReactPlayer from "react-player";
import Pictures from "./Pictures";
import Aos from "aos";
import "aos/dist/aos.css";
import QHouseHome1en from "../SVG/QHouseHome1en.svg";
import QHouseHome2en from "../SVG/QHouseHome2en.svg";
import QHouseHome2aen from "../SVG/QHouseHome2aen.svg";
import QHouseHome2ben from "../SVG/QHouseHome2ben.svg";
import QHouseHome2cen from "../SVG/QHouseHome2cen.svg";
import QHouseHome2den from "../SVG/QHouseHome2den.svg";
import QHouseHome3en from "../SVG/QHouseHome3en.svg";
import QHouseHome4en from "../SVG/QHouseHome4en.svg";
import QHouseHome5en from "../SVG/QHouseHome5en.svg";
import QHouseHome6en from "../SVG/QHouseHome6en.svg";
import QHouseHome7en from "../SVG/QHouseHome7en.svg";
import QHouseHome1pl from "../SVG/QHouseHome1pl.svg";
import QHouseHome2pl from "../SVG/QHouseHome2pl.svg";
import QHouseHome2apl from "../SVG/QHouseHome2apl.svg";
import QHouseHome2bpl from "../SVG/QHouseHome2bpl.svg";
import QHouseHome2cpl from "../SVG/QHouseHome2cpl.svg";
import QHouseHome2dpl from "../SVG/QHouseHome2dpl.svg";
import QHouseHome3pl from "../SVG/QHouseHome3pl.svg";
import QHouseHome4pl from "../SVG/QHouseHome4pl.svg";
import QHouseHome5pl from "../SVG/QHouseHome5pl.svg";
import QHouseHome6pl from "../SVG/QHouseHome6pl.svg";
import QHouseHome7pl from "../SVG/QHouseHome7pl.svg";
import QHouseExtras from "../SVG/QHouseExtras.svg";
import QHouseStrenght1pl from "../SVG/QHouseStrenght1pl.svg";
import QHouseStrenght2pl from "../SVG/QHouseStrenght2pl.svg";
import QHouseStrenght3pl from "../SVG/QHouseStrenght3pl.svg";
import QHouseStrenght4pl from "../SVG/QHouseStrenght4pl.svg";
import QHouseStrenght5pl from "../SVG/QHouseStrenght5pl.svg";
import QHouseStrenght6pl from "../SVG/QHouseStrenght6pl.svg";
import QHouseStrenght7pl from "../SVG/QHouseStrenght7pl.svg";
import QHouseStrenght8pl from "../SVG/QHouseStrenght8pl.svg";

import QHouseEcoFloor from "../SVG/QHouseEcoFloor.svg";
import QHouseEcoHeatPump from "../SVG/QHouseEcoHeatPump.svg";
import QHouseEcoPassive from "../SVG/QHouseEcoPassive.svg";
import QHouseEcoRecuperation from "../SVG/QHouseEcoRecuperation.svg";
import QHouseEcoSolar from "../SVG/QHouseEcoSolar.svg";
import QHouseEcoWindows from "../SVG/QHouseEcoWindows.svg";
import HomeOferta from "../components/HomeOferta.jsx"
import snowGable from "../SVG/snowGable.png";

const Home = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile", duration: 1000 });
  }, []);

  


    return (
      <div className="homepageCointainer">
      <Row>
        {/* desktop */}
        <div className="hide-on-med-and-down">
          <div className="homeimg">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/GEy8-B9qkoY"
                width="100%"
                height="110%"
                playing={true}
                muted={true}
              />
            </div>
          </div>
          <div className="homeheader white-text">
            <CardPanel className="orangeaplfa1 z-depth-3">
              <span className="white-text">
              <h4>Prefabricated houses from House_Q</h4>

                <h5>
                  {" "}
                  Modern / Ecological / Timeless / Personalised{" "}
                </h5>
                <Divider />
                <p1 className="">
                We have developed a modern system for the construction of all-year-round houses. We focused
                  on allowing investors to adapt their homes to their individual needs and local regulations.
                  Our technology is characterized by speed of construction, low embodied carbon and adaptability.
                </p1>
              </span>
            </CardPanel>
          </div>
          <br />
          <br />
          <br /> <div className="hotOffer">
            <Button large node="a" href="70b" className="btnHotOgger z-depth-4"> New HouseQ 70B!</Button>

            </div>
          <Card className="cardhomeo1  z-depth-3">
            <div>
              <Row>
              <Col>
              </Col>
                <Col m={12}>
                  <h5 className="white-text"> ❶ Project </h5>
                  <Divider />
                  <p className="white-text">
               
                    <li> Easy to adapt </li>
                    <li> Elastic </li>
                    <li> Local </li>
                    <li> Personal </li>
                  </p>
                </Col>
              </Row>
              <Row>
                <br />
                {/* <Col m={6}>
              <img className="" src={Pictures.img3} alt="" width="80%" />
            </Col> */}
                <Col m={12}>
                  <h5 className="white-text"> ❷ Production </h5>
                  <Divider />
                  <p className="white-text">
                    <li> Quick </li>
                    <li> High quality </li>
                    <li> Economic </li>
                    <li> Scalable </li>
                  </p>
                </Col>
              </Row>
              <Row>
                <br />
                {/* <Col m={6}>
              <img className="" src={Pictures.img4} alt="" width="80%" />
            </Col> */}
                <Col m={12}>
                  <h5 className="white-text"> ❸ Assembly </h5>
                  <Divider />
                  <p className="white-text">
                    <li> Quick </li>
                    <li> Pro </li>
                    <li> Unintrusive' </li>
                    <li> Hard to reach sites</li>
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        {/* mobile */}
        <div className="hide-on-large-only">
          <Card className="homeMobile">
            <Slider
              fullscreen={true}
              options={{
                duration: 500,
                indicators: false,
                interval: 4000,
              }}
            >
              <Slide
                image={
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2038.png"
                  />
                }
              />
              <Slide
                image={
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2039.png"
                  />
                }
              ></Slide>
              <Slide
                image={
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2040.png"
                  />
                }
              ></Slide>
            </Slider>

            <Card className="homeMobileCard ">
              <div className="white-text ">
                <Row>
                  <Col s={6}>
                    <h4 className="">Houses from House_Q</h4>
                    <h5>
                      Modern <br /> Eco
                      <br /> Timeless <br /> Personalised
                    </h5>
                  </Col>
                  <Col s={6} className="right-align">
                  <Button
                        className="zamowMobile black-text"
                        node="a"
                        href="70b"
                      >
                        New 70B
                      </Button>
                    <Button
                      className="zamowMobile black-text"
                      node="a"
                      href="zamow"
                    >
                      Order
                    </Button>
                    <br />
                    <Button
                      className="zamowMobile black-text"
                      node="a"
                      href="galeria"
                    >
                      Gallery
                    </Button>
                    <br />
                    <Button
                      className="zamowMobile black-text"
                      node="a"
                      href="dodatki"
                    >
                      Extras
                    </Button>
                    <br />
                    <Button
                      className="zamowMobile black-text"
                      node="a"
                      href="system"
                    >
                      Houses
                    </Button>
                    <br />
                    <Button
                      className="zamowMobile black-text"
                      node="a"
                      href="contact"
                    >
                      Contact
                    </Button>
                  </Col>
                </Row>{" "}
              </div>
            </Card>
          </Card>
          <Row/><Row/>
        </div>
        <Col m={12} l={10} push="l1">
          <Row>


            </Row>

<HomeOferta/>


        </Col>
<Row>
          <br />
          <br />

          <Col l={8} m={10} push="m1 l2">
            <div
              className="homeSVG"
              data-aos="slide-right "
              data-aos-duration="3000"
            >
              <img src={QHouseHome2en} width="100%" />
            </div>
            <Col l={6} m={10} push="m1">
              <div
                className=""
                data-aos="flip-down "
                data-aos-duration="3000"
              >
                <img src={QHouseHome2aen} width="100%" />
              </div>
            </Col>
            <Col l={6} m={10} push="m1">
              <div className="" data-aos="flip-up" data-aos-duration="3000">
                <img src={QHouseHome2ben} width="100%" />
              </div>
            </Col>
            <Col l={6} m={10} push="m1">
              <div
                className=""
                data-aos="flip-down "
                data-aos-duration="2000"
              >
                <img src={QHouseHome2cen} width="100%" />
              </div>
            </Col>
            <Col l={6} m={10} push="m1">
              <div className="" data-aos="flip-up" data-aos-duration="3000">
                <img src={QHouseHome2den} width="100%" />
              </div>
            </Col>

            <div
              className="homeSVG"
              data-aos="slide-right"
              data-aos-duration="3000"
            >
              <img src={QHouseHome3en} width="100%"></img>
            </div>
            <br />
            <div
              className="homeSVG"
              data-aos="slide-left"
              data-aos-duration="3000"
            >
              <Col l={8} m={12} push=" l2">
                <img
                  className="z-depth-2"
                  src={QHouseHome1en}
                  width="100%"
                ></img>
              </Col>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Col l={8} m={12} push=" l2">
              <img className="z-depth-2" src={snowGable} width="100%" />
            </Col>
            <div
              className="homeSVG"
              data-aos="slide-left"
              data-aos-duration="3000"
            >
              <img src={QHouseHome4en} width="100%"></img>
            </div>
            <br />
        <div
              className="homeSVG"
              data-aos="slide-right"
              data-aos-duration="3000"
            >
              <img src={QHouseHome5en} width="100%"></img>
            </div>
            <div
              className="homeSVG"
              data-aos="slide-right"
              data-aos-duration="3000"
            >
              <img src={QHouseHome6en} width="100%"></img>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player z-depth-3"
                url="https://youtu.be/I1k8GyyewwQ"
                width="100%"
                height="100%"
                playing={false}
                muted={true}
              />
            </div>
            <div
              className="homeSVG"
              data-aos="slide-right"
              data-aos-duration="3000"
            >
              <img src={QHouseHome7en} width="100%"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Col m={4} s={12} push="m2">
            <img src={QHouseExtras} width="100%"></img>
          </Col>
          <Col m={4} s={12} push="m2">
            <Button large node="a" href="dodatki" className="orange darken-2">
              House_Q - not only houses!
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
    );
 
};

export default Home;

// testest
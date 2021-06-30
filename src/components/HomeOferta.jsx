import "materialize-css";
import React, { Component, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Col, Divider, Row, Table } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import HouseQSAxo from "../SVG/HouseQSAxo.png"
import HouseQLAxo from "../SVG/HouseQLAxo.png"
import HouseQ35AAxo from "../SVG/HouseQ35AAxo.png"
import HouseQ35BAxo from "../SVG/HouseQ35BAxo.png"

import HouseQMicro from "../SVG/HouseQMicro.svg"


let lang = localStorage.getItem("lang");

// const HomeOferta = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);


class HomeOferta extends React.Component{
    
    render() {

    return (
      <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    ><Row>
    <h3 className="center">
         Our houses<Divider/>
    </h3>
<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    ><Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q F
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Usable area</td>
                  <td>116.75 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>16.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>9m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="dachplaski" className="  ">
    <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxoplaski.png"
        alt=""
        width="100%"
      />
</Col>
</Row></div><div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    ><Row>
<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    ><Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src={HouseQSAxo}
        alt=""
        width="80%"
      />
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q S
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Usable area</td>
                  <td>116.75 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>16.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>9m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="dachdwuspadowyq" className="  ">
    <div
      data-aos="slide-right"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>

</Row></div>
<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    ><Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q M
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Usable area</td>
                  <td>116.75 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>16.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>9m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="dachdwuspadowym" className="  ">
    <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
        alt=""
        width="90%"
      />
</Col>
</Row></div> 

<div
      data-aos="slide-right"
      data-aos-duration="1000"
      className="orange-text center"
    >
        
        
        <Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
src={HouseQSAxo}      alt=""
        width="100%"
      />
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q L
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Usable area</td>
                  <td>116.75 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>16.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>9m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="dachdwuspadowyl" className="  ">
    <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>

</Row></div> 
<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        
        <Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q 35A
    </h5>    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Powierzchnia całkowita</td>
                  <td>35 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>6.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>5.4m</td>
                </tr>
               
              </tbody>
            </Table>
 
 <Button node="a" href="35a" className="  ">
  <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src={HouseQ35AAxo}
        alt=""
        width="60%"
      />
</Col>
</Row></div>

<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        
        <Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src={HouseQ35BAxo}
        alt=""
        width="60%"
      />
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q 35B
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Powierzchnia zabudowy</td>
                  <td>35 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>4.7m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>6.4m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="35b" className="  ">
  <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>

</Row></div>
<div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        
        <Row className="">
<br/><br/><br/>
<Col l={6} s={10} l={6} push="s1 m1 l">
    <h5 className="center black-text">
    House Q Micro
    </h5>
    <Table>
              <tbody>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Powierzchnia całkowita</td>
                  <td>35 m2</td>
                </tr>
               
                <tr>
                  <td>Length</td>
                  <td>6.5m</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>5.4m</td>
                </tr>
               
              </tbody>
            </Table>
  <Button node="a" href="micro" className="  ">
  <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="orange-text center"
    >
        More info

    </div>
  </Button>
</Col>
<Col l={6} s={10} l={6} push="s1 m1 l">
<img
        src={HouseQMicro}
        alt=""
        width="60%"
      />
</Col>
</Row></div>
</Row></div>


</Row></div>
);

    }
};

export default HomeOferta;

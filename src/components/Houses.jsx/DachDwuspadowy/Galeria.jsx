import {
    NavItem,
    Navbar,
    Icon,
    Button,
    Col,
    CardTitle,
    Card,
    Row,
    CardPanel,
    MediaBox,
    Divider,
    Modal,
    DatePicker,
    Form,
    Carousel,
    Collapsible,
    CollapsibleItem,
    Dropdown
  } from "react-materialize";
  import "materialize-css";
  import YouTube from "react-youtube";
  import React, { Component } from "react";
  import ReactPlayer from "react-player";
  import ImageGallery from 'react-image-gallery';
  import "react-image-gallery/styles/css/image-gallery.css";
  

  let baseUrl="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/"

  const images = [
    {
      original: `${baseUrl}Image%2031.png`,
      thumbnail: `${baseUrl}Image%2031.png`,
    },
 
  ];
  class Galeria extends Component {
  
    render() {
      return (
        <div className="">
          <br/><br/><br/><br/>
         
        <Row className="hide-on-small-only  darken-3 white-text">
      <Col m={2} push="m1">
        <Button 
          node="a"
          href="/dachdwuspadowygaleria"
          className="orange darken-3 hoverable"
          large
          >
            Galeria
      </Button>
      </Col>
      <Col m={9} push="m1" className="right-align">
      <Button 
          node="a"
          href="/dachdwuspadowy"
          className="orange darken-3 hoverable"
          large
          >
            Infromacje Ogólne
      </Button>
      
      <Button 
          node="a"
          href="/dachdwuspadowyukladfunkcjonalny"
          className="orange darken-3 hoverable"
          large
          >
            Układ Funkcjonalny
      </Button>
      
      <Button 
          node="a"
          href="/dachdwuspadowyekologia"
          className="orange darken-3 hoverable"
          large
          >
            Ekologia
      </Button>
     
      <Button 
          node="a"
          href="/dachdwuspadowyspecyfikacja"
          className="orange darken-3 hoverable"
          large
          >
            Specyfikacja
      </Button>
      
      <Button 
          node="a"
          href="zamow"
          className="orange darken-3 hoverable"
          large
          >
            Zamów
      </Button>
      </Col>
        </Row>
        <div className="hide-on-med-and-up">
                <Dropdown
                  className="hide-on-med-and-up"
                  id="Dropdown_991"
                  options={{
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                  }}
                  trigger={
                    <div className="center">
                      <a>
                        {" "}
                        <div className="white-text orange darken-3 btn-large center ">
                          Więcej informacji
                        </div>{" "}
                      </a>
                    </div>
                  }
                >
                  <a className="black-text" href="/dachdwuspadowygaleria">
                    Galeria
                  </a>

                  <a className="black-text" href="/dachdwuspadowyukladfunkcjonalny">
                    Układ funkcjonalny
                  </a>

                  <a className="black-text" href="/dachdwuspadowyekologia">
                    Ekologia
                  </a>

                  <a className="black-text" href="/dachdwuspadowyspecyfikacja">
                    Specyfikacja
                  </a>
                  <a className="black-text" href="/dachdwuspadowy">
                    Infromacje
                  </a>
                </Dropdown>
              </div>
         
       
        <Row>
              <br />
              <Col m={12} l={6} push="l3">
              
              </Col>
            </Row>
            
       
        <Row>
        <ImageGallery items={images} />
        </Row>
         </div>
      );
    }
  }
  
  export default Galeria;
  
import {
    NavItem,
    Navbar,
    Icon,
    Button,
    Col,
    CardTitle,
    Card,
    Row,
    Dropdown,
    CardPanel,
    MediaBox,
    Divider,
    Modal,
    DatePicker,
    Form,
    Carousel,
    Collapsible,
    CollapsibleItem,
  } from "react-materialize";
  import "materialize-css";
  import YouTube from "react-youtube";
  import React, { Component } from "react";
  import ReactPlayer from "react-player";
  import ImageGallery from 'react-image-gallery';
  import "react-image-gallery/styles/css/image-gallery.css";
  
  const images = [
    
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2035.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2036.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2037.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2038.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2039.png",
      thumbnail: ""
    },
  
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2041.png",
      thumbnail: ""
    },
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2042.png",
      thumbnail: ""
    },
  
    {
      original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2044.png",
      thumbnail: ""
    },
    
  ];
  class Galeria extends Component {
  
    render() {
      return (
        <div className="">
          <br/><br/><br/><br/>
         
          <Row className="hide-on-small-only orange darken-1 white-text">
      <Col m={2} push="m1">
        <Button 
          node="a"
          href="/dachplaskigaleria"
          className="orange darken-3 hoverable"
          large
          >
            Galeria
      </Button>
      </Col>
      <Col m={9} push="m1" className="right-align">
      <Button 
          node="a"
          href="/dachplaski"
          className="orange darken-3 hoverable"
          large
          >
            Infromacje 
      </Button>
      
      <Button 
          node="a"
          href="/dachplaskiukladfunkcjonalny"
          className="orange darken-3 hoverable"
          large
          >
            Układ Funkcjonalny
      </Button>
      
      <Button 
          node="a"
          href="/dachplaskiekologia"
          className="orange darken-3 hoverable"
          large
          >
            Ekologia
      </Button>
     
      <Button 
          node="a"
          href="/dachplaskispecyfikacja"
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
              <a className=" przycisk_nawigacja ">
                {" "}
                <div className="white-text orange darken-3 button large center ">Więcej informacji</div>{" "}
              </a>
            }
          >
            <a className="black-text" href="/dachplaskigaleria">
              Galeria
            </a>

            <a className="black-text" href="/dachplaskiukladfunkcjonalny">
              Układ funkcjonalny
            </a>

            <a className="black-text" href="/dachplaskiekologia">
              Ekologia
            </a>

            <a className="black-text" href="/dachplaskispecyfikacja">
              Specyfikacja
            </a>
            <a className="black-text" href="/dachplaski">
              Infromacje
            </a>
          </Dropdown>
            </div>
       
        <Row>
        <ImageGallery items={images} />
        </Row>
         </div>
      );
    }
  }
  
  export default Galeria;
  
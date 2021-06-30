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
} from "react-materialize";
import "materialize-css";
import YouTube from "react-youtube";
import React, { Component } from "react";
import ListaWzor from "./Resources";
import ImageGallery from 'react-image-gallery';
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";
import Pictures from "./Pictures";

let baseUrl="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/nowezdjecia/"


const images = [


  {
    original: `${baseUrl}Image%2031.jpg`,
    thumbnail: `${baseUrl}Image%2031.jpg`,
  },
  {
    original: `${baseUrl}Image%2032.jpg`,
    thumbnail: `${baseUrl}Image%2032.jpg`,
  },
  {
    original: `${baseUrl}Image%2033.jpg`,
    thumbnail: `${baseUrl}Image%2033.jpg`,
  },
  {
    original: `${baseUrl}Image%2034.jpg`,
    thumbnail: `${baseUrl}Image%2034.jpg`,
  },
  {
    original: `${baseUrl}Image%2035.jpg`,
    thumbnail: `${baseUrl}Image%2035.jpg`,
  },


  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2035.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2035.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2036.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2036.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2037.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2037.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2038.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2038.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2041.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2041.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2042.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2042.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2044.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2044.png",
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2045.png",
    thumbnail: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2045.png",
  },

  // {
  //   original: `${baseUrl}Image%2037.jpg`,
  //   thumbnail: `${baseUrl}Image%2037.jpg`,
  // },{
  //   original: `${baseUrl}Image%2038.jpg`,
  //   thumbnail: `${baseUrl}Image%2038.jpg`,
  // },{
  //   original: `${baseUrl}Image%2039.jpg`,
  //   thumbnail: `${baseUrl}Image%2039.jpg`,
  // },
  // {
  //   original: `${baseUrl}Image%2040.jpg`,
  //   thumbnail: `${baseUrl}Image%2040.jpg`,
  // },
  {
    original: `${baseUrl}Image%20001.jpg`,
    thumbnail: `${baseUrl}Image%20001.jpg`,
  },
  {
    original: `${baseUrl}Image%20002.jpg`,
    thumbnail: `${baseUrl}Image%20002.jpg`,
  },{
    original: `${baseUrl}Image%20003.jpg`,
    thumbnail: `${baseUrl}Image%20003.jpg`,
  },{
    original: `${baseUrl}Image%20004.jpg`,
    thumbnail: `${baseUrl}Image%20004.jpg`,
  },{
    original: `${baseUrl}Image%20005.jpg`,
    thumbnail: `${baseUrl}Image%20005.jpg`,
  },{
    original: `${baseUrl}Image%20006.jpg`,
    thumbnail: `${baseUrl}Image%20006.jpg`,
  },{
    original: `${baseUrl}Image%20007.jpg`,
    thumbnail: `${baseUrl}Image%20007.jpg`,
  },{
    original: `${baseUrl}Image%20008.jpg`,
    thumbnail: `${baseUrl}Image%20008.jpg`,
  },
  {
    original: `${baseUrl}Image%20009.jpg`,
    thumbnail: `${baseUrl}Image%20009.jpg`,
  },
  {
    original: `${baseUrl}Image%20010.jpg`,
    thumbnail: `${baseUrl}Image%20010.jpg`,
  },
  {
    original: `${baseUrl}Image%20011.jpg`,
    thumbnail: `${baseUrl}Image%20011.jpg`,
  },
  {
    original: `${baseUrl}Image%20012.jpg`,
    thumbnail: `${baseUrl}Image%20012.jpg`,
  },
  {
    original: `${baseUrl}malyzewnatrz1.jpg`,
    thumbnail: `${baseUrl}malyzewnatrz1.jpg`,
  },
  {
    original: `${baseUrl}malyzewnatrz2.jpg`,
    thumbnail: `${baseUrl}malyzewnatrz2.jpg`,
  },
  
  {
    original: `${baseUrl}malyzewnatrz4.jpg`,
    thumbnail: `${baseUrl}malyzewnatrz4.jpg`,
  },
  {
    original: `${baseUrl}malyzewnatrz5.jpg`,
    thumbnail: `${baseUrl}malyzewnatrz5.jpg`,
  },
  {
    original: `${baseUrl}plaski1.jpg`,
    thumbnail: `${baseUrl}plaski1.jpg`,
  },
  {
    original: `${baseUrl}plaski2.jpg`,
    thumbnail: `${baseUrl}plaski2.jpg`,
  },
  {
    original: `${baseUrl}plaski3.jpg`,
    thumbnail: `${baseUrl}plaski3.jpg`,
  },
  {
    original: `${baseUrl}plaski4.jpg`,
    thumbnail: `${baseUrl}plaski4.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz1.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz1.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz2.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz2.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz3.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz3.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz4.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz4.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz5.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz5.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz6.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz6.jpg`,
  },
  {
    original: `${baseUrl}srednizewnatrz7.jpg`,
    thumbnail: `${baseUrl}srednizewnatrz7.jpg`,
  },
  {
    original: `${baseUrl}wnocy.jpg`,
    thumbnail: `${baseUrl}wnocy.jpg`,
  },


  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2031.png",
    // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2032.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2033.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2034.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%2035.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: Pictures.img1,
    //thumbnail: Pictures.img1,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20001.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20002.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20003.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20004.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20005.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20006.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20007.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20008.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20009.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20010.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20011.png",
    //thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image%20012.png",
    //thumbnail: Pictures.img37,
  },
  


    {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2034.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2035.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2036.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2037.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2038.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2039.png",
   // thumbnail: Pictures.img37,
  },

  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2041.png",
   // thumbnail: Pictures.img37,
  },
  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2042.png",
   // thumbnail: Pictures.img37,
  },

  {
    original: "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/Image%2044.png",
   // thumbnail: Pictures.img37,
  },
  

];


class Galeria extends Component {

  render() {
    return (
      <div className="galeria">
        <Row>
          <div className=" hide-on-med-and-up">
          <br/><br/><br/><br/><br/>
          </div>
          
            <ImageGallery items={images} />
          
        </Row>
      </div>
    );
  }
}

export default Galeria;

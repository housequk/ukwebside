import "materialize-css";
import React, { Component } from "react";
import {
  Button,
  Caption,
  Card,
  Col,
  Divider,
  Row,
  Slide,
  Slider,
  Dropdown,
  Table,
} from "react-materialize";
import ReactPlayer from "react-player";
import Plans from "../../SVG/QHousePlanspl.svg";
import Gallery from "../../SVG/QHouseGallerypl.svg";
import Iframe from "react-iframe";

import QHouseSRzut from "../../SVG/QHouse70BRzuty.svg";
import QHouseSAxo from "../../SVG/QHouse70BAxo.svg";
import QHouseSPrzekroj from "../../SVG/QHouseSPrzekroj.svg";
import QHouseSStrefy from "../../SVG/QHouseSStrefy.svg";


let baseUrl =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/";

class DachDwuspadowy extends Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }
  render() {
    if (this.state.lang == "en")
    return (
      <Row>
      <Col s = {12} m = {10} l = {8} push = "m1 l2">
        <br />
        <br />
        <br />
        <br />
        <br />

        <Col s = {12}>
          {""}
          <Card className = "house1card white-text z-depth-3">
            <Row>
              <Col s = {12} l = {6}>
                <h3> House_Q 70B </h3>
                <div className = "player-wrapper">
                  <ReactPlayer
                    className = "react-player"
                    url = "https://youtu.be/yX62G4fsKKQ"
                    width = "100%"
                    height = "100%"
                    playing = {true}
                    muted = {true}
                  />
                </div>
                <br />
                <div className = "center">
                  <Button node = "a" href = "order" large className = "orange">
                    Order, the approximate price of PLN 340,000
                  </Button>
                </div>
                <br />
                <div className = "center">
                  <Button node = "a" href = "gallery" large className = "orange">
                    Go to the gallery
                  </Button>
                </div>
              </Col>
              <Col s = {12} l = {6}>
                <h3> Description of the architecture </h3>
                <div className = "text left-align">
                  A free-standing building with an attic for the whole year
                  using.
                </div>
                <Table>
                  <tbody>
                    <tr>
                      <td> Number of overground storeys </td>
                      <td> 2 </td>
                    </tr>
                
                    <tr>
                      <td> Building area </td>
                      <td> 70 m2 </td>
                    </tr>
                 
                    <tr>
                      <td> Height of the building to the ridge </td>
                      <td> 5.7 m </td>
                    </tr>
                    <tr>
                      <td> Face to face </td>
                      <td> 12.5 m </td>
                    </tr>
                    <tr>
                      <td> Building width </td>
                      <td> 5.68m </td>
                    </tr>
                  
                    <tr>
                      <td> Building ground floor </td>
                      <td> min + 0.45m from ground level </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col s = {12}>
          <Card className = "house2card z-depth-3">
            <Row>
              <Col s = {12} l = {6}>
                <img alt = "" src = {QHouseSAxo} width = "100%" />
                
              </Col>
              <Col s = {12} l = {6}>
                <h3> Description of technology </h3>
                <div className = "text left-align">
                  Our system allows you to choose different finishes. On
                  the final look of your home will be influenced by factors such as
                  like your own preferences, terrain characteristics, local
                  sourcing of materials, local character or local
                  right. The combination of our design and your requirements
                  will produce different results. We invite you to familiarize yourself with
                  a list of materials on our website, at your request
                  we can arrange other materials (it may affect
                  price and lead time). In House_Q houses you will find
                  You are the top quality window joinery.
                </div>
                <br />
                <br />
                <br />
                <Table>
                  <tbody>
                    <tr>
                      <td> Exterior walls </td>
                      <td>
                      Sandwich panels - selected finish
                      </td>
                    </tr>
                    <tr>
                      <td> Construction </td>
                      <td> Steel / Ecological Glued Timber </td>
                    </tr>
                    <tr>
                      <td> Building support </td>
                      <td> Micro Piles
                      </td>
                    </tr>

                    <tr>
                      <td> Roof finish </td>
                      <td> Sandwich panels and finishing </td>
                    </tr>
                    <tr><td> Finishing the terrace </td>
                          <td> Boards </td>
                        </tr>
                        <tr>
                          <td> Heating </td>
                          <td>
                            Air conditioning with heating option + Radiators
                          </td>
                        </tr>
                       
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col s = {12}>
              <Card className = "house2card z-depth-3">
                <Row>
                  <Col s = {12} l = {6}>
                    <img alt = "" src = {QHouseSRzut} width = "100%" />
                  </Col>
                  <Col s = {12} l = {6}>
                    <h3> List of surfaces </h3>
                    <div className = "text left-align">
                      The building can be divided into 3 zones: private, public and
                      utilitarian. We have designed the building so that these zones appear
                      did not intersect. We encourage you to place the building on
                      place with the private area facing north
                      or "the more private part of the site". He enters the building
                      through the use zone, which acts as a bridge between
                      private and shared area.
                    </div>
                    <Table>
                      <tbody>
                        <tr className = "green-text text-darken-3">
                          <td> 1. Kitchen and Living Room </td>
                          <td> 31.3 m2 </td>
                        </tr>

                        <tr className = "blue-text text-darken-3">
                          <td> 2. Bathroom </td>
                          <td> 5 m2 </td>
                        </tr>
                        <tr className = "red-text text-darken-3">
                          <td> 3. Peace </td>
                          <td> 11m2 </td>
                        </tr>
                        <tr className = "yellow-text text-darken-3">
                          <td> 4. peace </td>
                          <td> 11m2 </td>
                        </tr>
                        <tr className = "orange-text text-darken-3">
                          <td> 5. Mezzanine (optionally with bathroom) </td>
                          <td> 28m2 </td>
                        </tr>
                        <tr className = "purple-text text-darken-3">
                          <td> 6. Peace </td>
                          <td> 29m2 </td>
                        </tr>
                      </tbody> {""}
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col s = {12} m = {6}>
              <Card className = "house3card white-text z-depth-3 red">
                <Row> <h5> Technology Description: </h5>
                 Frame structure (possibility of disassembling the house and installing it elsewhere), sandwich panel walls.
                 <br/>
??? Development Package: external and internal walls, PVC or Aluminum windows. Terraces, Stairs, Railing, Installation, micropile foundations, <br/>
??? Installations: 14 sockets, Electric box, water and sewage system, bathroom + kitchen. <br/>

 Additional information
Options: Ventilated wooden facade made of Siberian larch (included) or Scandinavian pine, ventilated facade made of a different material (to be agreed) <br/>
                </Row>
              </Card>
             
            </Col>

            <Col s = {12} m = {6}>
              <Card className = "house3card black-text z-depth-3 yellow">
                <Row>
                  <h5> Installations </h5>
                  <div className = "text left-align">
                  ??? Eco package 1: Installations + Solar panels with inverter on the roof, air-to-air heat pump 4 ext. control application <br/>
??? Eco package 2: Installations + Solar panels with an inverter on the roof, air-to-water heat pump, dry floor heating, control application
                    <br />
                  
                  </div>
                </Row>
              </Card>
            </Col>
           
            <Col s = {12}>
              <Card className = "house3card white-text z-depth-3">
                <Row>
                  <div className = "player-wrapper">
                    <ReactPlayer
                      className = "react-player"
                      url = "https://youtu.be/h7vxgsI_Zbw"
                      width = "100%"
                      height = "100%"
                      playing = {false}
                      muted = {true}
                      controls = {true}
                    />
                  </div>
                </Row>
              </Card>
            </Col>
            <Col s = {12}>
              <Card className = "house3card white-text z-depth-3">
                <Row>
                  <h3 className = "center "> Various plots and weather conditions </h3>
                  <div className = "player-wrapper">
                    <ReactPlayer
                      className = "react-player"
                      url = "https://youtu.be/Py6jAabZMyk"
                      width = "100%"
                      height = "100%"
                      playing = {false}
                      muted = {true}
                      controls = {true}
                    />
                  </div>
                </Row>
              </Card>
            </Col>
            {/* {/ * <Col s = {12}>
              <Card className = "house2card white-text z-depth-3">
                <Row>
                  <Iframe
                    url = "https://p3d.in/4TryD"
                    width = "100%"
                    height = "600px"
                    id = "myId"
                    className = "myClassname"
                    display = "initial"
                    position = "relative"
                  />

                  <h3 className = "black-text"> 3D model </h3>
                </Row>
              </Card>
            </Col> * /} */}
            
          </Col>
        </Row>
    );
    else
      return (
        <Row>
          <Col s={12} m={10} l={8} push="m1 l2">
            <br />
            <br />
            <br />
            <br />
            <br />

            <Col s={12}>
              {" "}
              <Card className="house1card white-text z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <h3>House_Q 70B</h3>
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/yX62G4fsKKQ"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                      />
                    </div>
                    <br />
                    <div className="center ">
                      <Button node="a" href="zamow" large className="orange">
                        Zam??w, przyblizona cena 340 000 z??
                      </Button>
                    </div>
                    <br />
                    <div className="center">
                      <Button node="a" href="galeria" large className="orange">
                        Przejdz do galerii
                      </Button>
                    </div>
                  </Col>
                  <Col s={12} l={6}>
                    <h3>Opis architektury</h3>
                    <div className="text left-align">
                      Budynek wolno stoj??cy z poddaszem uytkowym do ca??orocznego
                      u??ytkowania.
                    </div>
                    <Table>
                      <tbody>
                        <tr>
                          <td>Ilo???? kondygnacji nadziemnych</td>
                          <td>2</td>
                        </tr>
                    
                        <tr>
                          <td>Powierzchnia zabudowy</td>
                          <td>70 m2</td>
                        </tr>
                     
                        <tr>
                          <td>Wysoko???? budynku do kalenicy </td>
                          <td>5.7 m</td>
                        </tr>
                        <tr>
                          <td>D??ugo???? zabudowy</td>
                          <td>12.5 m</td>
                        </tr>
                        <tr>
                          <td>Szeroko???? zabudowy</td>
                          <td>5.68m</td>
                        </tr>
                      
                        <tr>
                          <td>Poziom parteru budynku</td>
                          <td>min +0.45m od poziomu terenu</td>
                        </tr>
                       
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col s={12}>
              <Card className="house2card  z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <img alt="" src={QHouseSAxo} width="100%" />
                    
                  </Col>
                  <Col s={12} l={6}>
                    <h3>Opis technologii </h3>
                    <div className="text left-align">
                      Nasz system pozwala na wyb??r r????nych wyko??cze??. Na
                      ostateczny wygl??d domu b??d?? mia??y wp??yw takie czynniki,
                      jak w??asne preferencje, charakterystyka terenu, lokalne
                      zaopatrzenie w materia??y, lokalny charakter lub lokalne
                      prawo. Po????czenie naszego projektu i Twoich wymaga??
                      zaowocuje r????nymi wynikami. Zapraszamy do zapoznania si?? z
                      list?? materia????w na naszej stronie, na Pa??stwa ??yczenie
                      mo??emy zorganizowa?? inne materia??y (mo??e to wp??yn???? na
                      cen?? i czas realizacji). W domach House_Q znajdziecie
                      Pa??stwo najwy??szej jako??ci stolark?? okienn??.
                    </div>
                    <br />
                    <br />
                    <br />
                    <Table>
                      <tbody>
                        <tr>
                          <td>??ciany zewn??trzne</td>
                          <td>
                          Panele warstwowe - wybrane wyko??czenie
                          </td>
                        </tr>
                        <tr>
                          <td>Konstrukcja </td>
                          <td>Stalowa/Ekologiczne Drewno Klejone</td>
                        </tr>
                        <tr>
                          <td>Oparcie budynku</td>
                          <td>Mikro Pale
                          </td>
                        </tr>

                        <tr>
                          <td>Wyko??czenie dachu</td>
                          <td> Panele warstwowe i wyko??czenie</td>
                        </tr>
                        <tr>
                          <td>Wyko??czenie tarasu</td>
                          <td>Deski</td>
                        </tr>
                        <tr>
                          <td>Ogrzewanie</td>
                          <td>
                            Klimatyzacja z opcj?? grzania + Grzejniki
                          </td>
                        </tr>
                       
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col s={12}>
              <Card className="house2card  z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <img alt="" src={QHouseSRzut} width="100%" />
                  </Col>
                  <Col s={12} l={6}>
                    <h3>Zestawienie Powierzchni</h3>
                    <div className="text left-align">
                      Budynek mo??na podzieli?? na 3 strefy: prywatn??, publiczn?? i
                      u??ytkow??. Budynek zaprojektowali??my tak, aby strefy te si??
                      nie przecina??y. Zach??camy do umieszczenia budynku na
                      miejscu, tak aby strefa prywatna by??a skierowana na p????noc
                      lub ???bardziej prywatna cz?????? terenu???. Do budynku wchodzi
                      si?? przez stref?? u??ytkow??, kt??ra dzia??a jako pomost mi??dzy
                      stref?? prywatn?? i wsp??ln??.
                    </div>
                    <Table>
                      <tbody>
                        <tr className="green-text text-darken-3">
                          <td>1. Kuchnia i Salon</td>
                          <td>31.3 m2</td>
                        </tr>

                        <tr className="blue-text text-darken-3">
                          <td>2. ??azienka </td>
                          <td>5 m2</td>
                        </tr>
                        <tr className="red-text text-darken-3">
                          <td>3. Pok??j </td>
                          <td>11m2</td>
                        </tr>
                        <tr className="yellow-text text-darken-3">
                          <td>4. pok??j </td>
                          <td>11m2</td>
                        </tr>
                        <tr className="orange-text text-darken-3">
                          <td>5. Antresola(opcjonalnie z ??azienk??) </td>
                          <td>28m2</td>
                        </tr>
                        <tr className="purple-text text-darken-3">
                          <td>6. Pok??j </td>
                          <td>29m2</td>
                        </tr>
                      </tbody>{" "}
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col s={12} m={6}>
              <Card className="house3card white-text z-depth-3 red">
                <Row><h5>Opis Technologii:</h5>
                 Konstrukcja szkieletowa (mo??liwo???? demonta??u domu i zamontowania go w innym miejscu), ??ciany z p??yt warstwowych. 
                 <br/>
??? Pakiet Deweloperski: ??ciany zewn??trzne i wewn??trzne, Okna PCV lub Aluminium. Tarasy, Schody, Balustrada, Monta??, fundamenty z mikropali,<br/>
??? Instalacje : 14 gniazdek, Skrzynka elektryczna, wod-kan ??azienka+kuchnia.<br/>

 Dodatkowe informacje
Opcje: Elewacja wentylowana drewniana z modrzewiu syberyjskiego(w cenie) lub sosny skandynawskiej, elewacja wentylowana z innego materia??u (do ustalenia)<br/>
                </Row>
              </Card>
             
            </Col>

            <Col s={12} m={6}>
              <Card className="house3card black-text z-depth-3 yellow">
                <Row>
                  <h5>Instalacje </h5>
                  <div className="text left-align">
                  ??? Pakiet Eko 1: Instalacje + Panele s??oneczne z falownikiem na dachu, pompa ciep??a powietrze-powietrze 4 ko??c??wki wew. aplikacja steruj??ca<br/>
??? Pakiet Eko 2: Instalacje + Panele s??oneczne z falownikiem na dachu, pompa ciep??a powietrze-woda, ogrzewanie pod??ogowe w zabudowie suchej, aplikacja steruj??ca
                    <br />
                  
                  </div>
                </Row>
              </Card>
            </Col>
           
            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/h7vxgsI_Zbw"
                      width="100%"
                      height="100%"
                      playing={false}
                      muted={true}
                      controls={true}
                    />
                  </div>
                </Row>
              </Card>
            </Col>
            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <h3 className="center">Ro??ne dzia??ki i warunki atmosferyczne</h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/Py6jAabZMyk"
                      width="100%"
                      height="100%"
                      playing={false}
                      muted={true}
                      controls={true}
                    />
                  </div>
                </Row>
              </Card>
            </Col>
            {/* <Col s={12}>
              <Card className="house2card white-text z-depth-3">
                <Row>
                  <Iframe
                    url="https://p3d.in/4TryD"
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />

                  <h3 className="black-text">Model 3D</h3>
                </Row>
              </Card>
            </Col> */}
            
          </Col>
        </Row>
      );
  }
}

export default DachDwuspadowy;

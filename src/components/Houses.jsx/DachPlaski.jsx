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

import QHouseSRzut from "../../SVG/QHouseFlatRzut.svg";
import QHouseSAxo from "../../SVG/QHouseFlatAxo.svg";
import QHouseSPrzekroj from "../../SVG/QHouseFlatPrzekroj.svg";
import QHouseSStrefy from "../../SVG/QHouseFlatStrefy.svg";

import QHouseFlatPZT from "../../SVG/QHouseFlatPZT.svg";

let baseUrl =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/";

class DachPlaski extends Component {
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
                  <h3> House_Q F </h3>
                  <div className = "player-wrapper">
                    <ReactPlayer
                      className = "react-player"
                      url = "https://youtu.be/w7sNBxkFw8w"
                      width = "100%"
                      height = "100%"
                      playing = {true}
                      muted = {true}
                    />
                  </div>
                  <br />
                  <div className = "center">
                    <Button node = "a" href = "order" large className = "orange">
                      Stories PLN 4400 / m2
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
                    A detached building with a converted attic to
                    year-round use.
                  </div>
                  <Table>
                    <tbody>
                      <tr>
                        <td> Stories </td>
                        <td> 1 </td>
                      </tr>
                      <tr>
                        <td> Usable area </td>
                        <td> 116.75 m2 </td>
                      </tr>
                      <tr>
                        <td> Building area </td>
                        <td> 154 m2 </td>
                      </tr>
                      <tr>
                        <td> Total area </td>
                        <td> 219.02 m2 </td>
                      </tr>
                      <tr>
                        <td> Height of the building to the ridge </td>
                        <td> 7.1 m </td>
                      </tr>
                      <tr>
                        <td> Face to face </td>
                        <td> 16.5m </td>
                      </tr>
                      <tr>
                        <td> Building width </td>
                        <td> 9m </td>
                      </tr>
                      <tr>
                        <td> Cubature </td>
                        <td> 708.67 m3 </td>
                      </tr>
                      <tr>
                        <td> Building ground floor </td>
                        <td> min + 0.45m from ground level </td>
                      </tr>
                      <tr>
                        <td> Minimum plot dimensions </td>
                        <td> Eclair </td>
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
                  <img alt = "" src = {QHouseSPrzekroj} width = "100%" />
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
                    You are the best quality window joinery. Big
                    the glazing separating the interiors and terraces is tight
                    high-class aluminum frames and the highest class
                    HS mechanisms.
                  </div>
                  <br />
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td> Exterior walls </td>
                        <td>
                          Plasterboards - Sandwich panels - selected finish
                        </td>
                      </tr>
                      <tr>
                        <td>  
                        Construction </td>
                        <td> Ecological Glued Timber </td>
                      </tr>
                      <tr>
                        <td> Building support </td>
                        <td> Micro Pale </td>
                      </tr>

                      <tr>
                        <td> Roof finish </td>
                        <td> G-k boards - Sandwich panels </td>
                      </tr>
                      <tr>
                        <td> Finishing the terrace </td>
                        <td> Boards </td>
                      </tr>
                      <tr>
                        <td> Heating </td>
                        <td>
                          Heat Pump + Floor Heating + Radiators
                        </td>
                      </tr>
                      <tr>
                        <td> Ventilation </td>
                        <td> Recuperation </td>
                      </tr>
                      <tr>
                        <td> Thermal insulation </td>
                        <td>
                          Medium U partitions at the level of 0.11, windows 0.9
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
                  <img alt = "" src = {QHouseSStrefy} width = "100%" />
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
                      <tr className = "purple-text text-darken-3">
                        <td> 1. Kitchen and Living Room </td>
                        <td> 31.75 m2 </td>
                      </tr>
                      <tr className = "yellow-text text-darken-3">
                        <td> 2. Bathroom </td>
                        <td> 7 m2 </td>
                      </tr>
                      <tr className = "yellow-text text-darken-3">
                        <td> 3. Pom. tech. </td>
                        <td> 2 m2 </td>
                      </tr>
                      <tr className = "blue-text text-darken-3">
                        <td> 4. Bedroom 1 </td>
                        <td> 19.3 m2 </td>
                      </tr>
                      <tr className = "blue-text text-darken-3">
                        <td> 5. Bedroom 2 </td>
                        <td> 8 m2 </td>
                      </tr>
                      <tr className = "orange-text text-darken-3">
                        <td> 6. Vestibule </td>
                        <td> 5.5 m2 </td>
                      </tr>
                      <tr className = "orange-text text-darken-3">
                        <td> 7. Corridor </td>
                        <td> 1.2 m2 </td>
                      </tr>
                      <tr className = "green-text text-darken-3">
                        <td> 8. Terraces </td>
                        <td> 20 m2 </td>
                      </tr>
                      <tr>
                        <td>
                          9. Attic (Possibility to install a bathroom on the floor
                          attic)
                        </td>
                        <td> 32m2 </td>
                      </tr>
                    </tbody> {""}
                  </Table>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col s = {12} m = {6}>
            <Card className = "house3card white-text z-depth-3 red">
              <Row>
                <h3> Heating </h3>
                <h5 className = "text left-align">
                  1. Air-to-water heat pump
                  <br />
                  2. Underfloor heating
                  <br />
                  3. Recuperation
                  <br />
                  4. Radiators in the bathroom
                </h5>
              </Row>
            </Card>
            <Card className = "house3card white-text z-depth-3 red">
              <Row>
                
                  <h3> Heating </h3>
                  <h5 className = "text left-align">
                    1. Air-to-water heat pump
                    <br />
                    2. Underfloor heating<br />
                    3. Recuperation
                    <br />
                    4. Radiators in the bathroom
                  </h5>
             
               
              </Row>
            </Card> 
          </Col>

          <Col s = {12} m = {6}>
            <Card className = "house3card black-text z-depth-3 yellow">
              <Row>
                <h3> Electrical Installation </h3>
                <h5 className = "text left-align">
                  Solar panels
                  <br />
                  Parallel fixation (in case of destruction of one of the
                  panels, the entire installation continues)
                  <br />
                  Installation management application (our clients together with
                  installation receive an application that allows for analysis
                  generated current)
                  <br />
                  High quality (low voltage on panels, warranty
                  manufacturer for 30 years)
                  <br />
                  Small installation (thanks to the use of a modern
                  inverter, the installation does not take up any space inside the house).
                  <br />
                  <h4>
                    It is possible to install a battery (2-3 days
                    energy reserve) and car chargers
                    electric.
                  </h4>
                </h5>
              </Row>
            </Card>
          </Col>
          <Col s = {12}>
            <Card className = "house3card white-text z-depth-3">
              <Row>
                <h3 className = "center">
                  Examples of exterior wall finishing
                </h3>
                <div className = "player-wrapper">
                  <ReactPlayer
                    className = "react-player"
                    url = "https://youtu.be/cbuGaG715ps"
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
                <h3 className = "center">
                  Various plots
                </h3>
                <div className = "player-wrapper">
              <ReactPlayer
                className = "react-player"
                url = "https://youtu.be/Rr0CdU5vu-s"
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
            <Card className = "house2card white-text z-depth-3">
              <Row>
              <Iframe
            url = "https://p3d.in/rgBEJ"
            width = "100%"
            height = "600px"
            id = "myId"
            className = "myClassname"
            display = "initial"
            position = "relative"
          />

                <h3 className = "black-text"> 3D Model </h3>
              </Row>
            </Card>
          </Col>
          <Col s = {12}>
            <Card className = "house3card white-text z-depth-3">
              <Row>
                <h3 className = "center"> Examples of interior finishing </h3>
                <div className = "player-wrapper">
                  <ReactPlayer
                    className = "react-player"
                    url = "https://youtu.be/cbuGaG715ps"
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
                    <h3>House_Q F</h3>
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/w7sNBxkFw8w"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                      />
                    </div>
                    <br />
                    <div className="center ">
                      <Button node="a" href="zamow" large className="orange">
                        Zam??w, przyblizona cena 4400z??/m2
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
                      Wolno stoj??cy z zaadaptowanym poddaszem budynek do
                      ca??orocznego u??ytkowania.
                    </div>
                    <Table>
                      <tbody>
                        <tr>
                          <td>Ilo???? kondygnacji nadziemnych</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>Powierzchnia u??ytkowa</td>
                          <td>116.75 m2</td>
                        </tr>
                        <tr>
                          <td>Powierzchnia zabudowy</td>
                          <td>154 m2</td>
                        </tr>
                        <tr>
                          <td>Powierzchnia ca??kowita</td>
                          <td>219.02 m2</td>
                        </tr>
                        <tr>
                          <td>Wysoko???? budynku do kalenicy </td>
                          <td>7.1 m</td>
                        </tr>
                        <tr>
                          <td>D??ugo???? zabudowy</td>
                          <td>16.5m</td>
                        </tr>
                        <tr>
                          <td>Szeroko???? zabudowy</td>
                          <td>9m</td>
                        </tr>
                        <tr>
                          <td>Kubatura </td>
                          <td>708.67 m3</td>
                        </tr>
                        <tr>
                          <td>Poziom parteru budynku</td>
                          <td>min +0.45m od poziomu terenu</td>
                        </tr>
                        {/* <tr>
                          <td>Minimalne wymiary dzia??ki</td>
                          <td>Eclair</td>
                        </tr> */}
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
                    <img alt="" src={QHouseSPrzekroj} width="100%" />
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
                      Pa??stwo najwy??szej jako??ci stolark?? okienn??. Du??e
                      przeszklenia oddzielaj??ce wn??trza z tarasami opi??te s??
                      wysokiej klasy ramami aluminiowymi i najwy??szej klasy
                      mechanizmami HS.
                    </div>
                    <br />
                    <br />
                    <br />
                    <Table>
                      <tbody>
                        <tr>
                          <td>??ciany zewn??trzne</td>
                          <td>
                            P??yty G-k - Panele warstwowe - wybrane wyko??czenie
                          </td>
                        </tr>
                        <tr>
                          <td>Konstrukcja </td>
                          <td>Ekologiczne Drewno Klejone</td>
                        </tr>
                        <tr>
                          <td>Oparcie budynku</td>
                          <td>Mikro Pale</td>
                        </tr>

                        <tr>
                          <td>Wyko??czenie dachu</td>
                          <td>P??yty G-k - Panele warstwowe</td>
                        </tr>
                        <tr>
                          <td>Wyko??czenie tarasu</td>
                          <td>Deski</td>
                        </tr>
                        <tr>
                          <td>Ogrzewanie</td>
                          <td>
                            Pompa Ciep??a + Ogrzewanie pod??ogowe + Grzejniki
                          </td>
                        </tr>
                        <tr>
                          <td>Wentylacja</td>
                          <td>Rekuperacja</td>
                        </tr>
                        <tr>
                          <td>Termoizolacyjno????</td>
                          <td>
                            ??rednie U przegr??d na poziomie 0.11, okien 0.9
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
                    <img alt="" src={QHouseSStrefy} width="100%" />
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
                        <tr className="purple-text text-darken-3">
                          <td>1. Kuchnia i Salon</td>
                          <td>31.75 m2</td>
                        </tr>
                        <tr className="yellow-text text-darken-3">
                          <td>2. ??azienka </td>
                          <td>7 m2</td>
                        </tr>
                        <tr className="yellow-text text-darken-3">
                          <td>3. Pom. tech. </td>
                          <td>2 m2</td>
                        </tr>
                        <tr className="blue-text text-darken-3">
                          <td>4. Sypialnia 1</td>
                          <td>19.3 m2</td>
                        </tr>
                        <tr className="blue-text text-darken-3">
                          <td>5. Sypialnia 2</td>
                          <td>8 m2</td>
                        </tr>
                        <tr className="orange-text text-darken-3">
                          <td>6. Przedsionek </td>
                          <td>5.5 m2</td>
                        </tr>
                        <tr className="orange-text text-darken-3">
                          <td>7. Korytarz </td>
                          <td>1.2 m2</td>
                        </tr>
                        <tr className="green-text text-darken-3">
                          <td>8. Tarasy </td>
                          <td>20 m2</td>
                        </tr>
                        <tr>
                          <td>
                            9. Poddasze (Mo??liwo???? zamontowania ??azienki na
                            poddaszu)
                          </td>
                          <td>32m2</td>
                        </tr>
                      </tbody>{" "}
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col s={12} m={6}>
              <Card className="house3card white-text z-depth-3 red">
                <Row>
                  <h3>Ogrzewanie </h3>
                  <h5 className="text left-align">
                    1. Pompa ciep??a powietrze-woda
                    <br />
                    2. Ogrzewanie pod??ogowe
                    <br />
                    3. Rekuperacja
                    <br />
                    4. Grzejniki w ??azience
                  </h5>
                </Row>
              </Card>
              {/* <Card className="house3card white-text z-depth-3 red">
                <Row>
                  
                    <h3>Ogrzewanie </h3>
                    <h5 className="text left-align">
                      1. Pompa ciep??a powietrze-woda
                      <br />
                      2. Ogrzewanie pod??ogowe
                      <br />
                      3. Rekuperacja
                      <br />
                      4. Grzejniki w ??azience
                    </h5>
               
                 
                </Row>
              </Card> */}
            </Col>

            <Col s={12} m={6}>
              <Card className="house3card black-text z-depth-3 yellow">
                <Row>
                  <h3>Instalacja Eletryczna </h3>
                  <h5 className="text left-align">
                    Panele S??oneczne
                    <br />
                    Zespolenie r??wnolegle (w przypadku zniszczenia jednego z
                    paneli ca??a instalacja funkcjonuje dalej)
                    <br />
                    Aplikacja do zarz??dzania isntalacj?? (nasi klienci wraz z
                    instalacja otrzymuj?? aplikacj?? pozwalaj??c?? na analiz??
                    generowanego pr??du)
                    <br />
                    Wysoka jako???? (niskie napi??cie na panelach, gwarancja
                    producenta na 30 lat)
                    <br />
                    Niewielka instalacja (dzi??ki wykorzystaniu nowoczesnego
                    falownika, instalacja nie zajmuje miejsca wewn??trz domu).
                    <br />
                    <h4>
                      Istnieje mo??liwo???? zainstalowania akumulatora (2-3 dni
                      zapasu energii) oraz ??adowarki do samochod??w
                      elektrycznych.
                    </h4>
                  </h5>
                </Row>
              </Card>
            </Col>
            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <h3 className="center">
                    Przyk??ady wyko??czenia ??cian zewn??trznych
                  </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/cbuGaG715ps"
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
                  <h3 className="center">
                    Ro??ne dzia??ki
                  </h3>
                  <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url="https://youtu.be/Rr0CdU5vu-s"
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
              <Card className="house2card white-text z-depth-3">
                <Row>
                <Iframe
              url="https://p3d.in/rgBEJ"
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
            </Col>
            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <h3 className="center">Przyk??ady wyko??czenia wn??trz</h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/cbuGaG715ps"
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
          </Col>
        </Row>
      );
  }
}

export default DachPlaski;

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
  MediaBox,
  Table,
} from "react-materialize";
import ReactPlayer from "react-player";
import Plans from "../../SVG/QHousePlanspl.svg";
import Gallery from "../../SVG/QHouseGallerypl.svg";
import Iframe from "react-iframe";
import QHouseSRzut from "../../SVG/QHouse35BRzuty.svg";
import QHouseSAxo from "../../SVG/QHouse35BAxo.svg";
import QHouseSPrzekroj from "../../SVG/QHouseSPrzekroj.svg";
import QHouseSStrefy from "../../SVG/QHouseSStrefy.svg";
import QHouseFlatPZT from "../../SVG/QHouseFlatPZT.svg";

import pic1 from "../../SVG/35BInterior.webp";
import pic2 from "../../SVG/35BFront.webp";


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
          <Col s={12} m={10} l={8} push="m1 l2">
            <br />
            <br />
            <br />
            <br />
            <br />

            <Col s={12}>
              {""}
              <Card className="house1card white-text z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <h3> House_Q 35B </h3>
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/b5TYXtR4om8"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                      />
                    </div>
                    <br />
                    <div className="center">
                      <Button node="a" href="order" large className="orange">
                        Estimated price PLN 185,000
                    </Button>
                    </div>
                    <br />
                    <div className="center">
                      <Row>
                        <Col s={6}>
                          <MediaBox
                            id="MediaBox_7"
                            options={{
                              inDuration: 275,
                              onCloseEnd: null,
                              onCloseStart: null,
                              onOpenEnd: null,
                              onOpenStart: null,
                              outDuration: 200
                            }}
                          >
                            <img
                              alt=""
                              src={pic1}
                              width="100%"
                            />
                          </MediaBox>
                        </Col>  <Col s={6}> <MediaBox
                          id="MediaBox_8"
                          options={{
                            inDuration: 275,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200
                          }}
                        >
                          <img
                            alt=""
                            src={pic2}
                            width="100%"
                          />
                        </MediaBox>
                        </Col></Row>
                    </div>


                  </Col>
                  <Col s={12} l={6}>
                    <h3> Architecture </h3>
                    <div className="text left-align">
                      <h5>   A detached building with a terrace to
                      year-round use.<br />
                    {/* It is possible to put the building on wheels.  */}
                    <br />
                    Lower prices when buying in bulk.
                    </h5>
                    </div>
                    <Table>
                      <tbody>
                        <tr>
                          <td> Stories </td>
                          <td> 2 </td>
                        </tr>
                        <tr>
                          <td> Usable area </td>
                          <td> 37 m2 </td>
                        </tr>
                        <tr>
                          <td> Building area </td>
                          <td> 35 m2 </td>
                        </tr>


                        <tr>
                          <td> Height of the building to the ridge </td>
                          <td> 5.2 m </td>
                        </tr>
                        <tr>
                          <td> Face to face </td>
                          <td> 6.6 m </td>
                        </tr>
                        <tr>
                          <td> Building width </td>
                          <td> 5.4 m </td>
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

            <Col s={12}>
              <Card className="house2card z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <img alt="" src={QHouseSAxo} width="100%" />

                  </Col>
                  <Col s={12} l={6}>
                    <h3> Technology </h3>
                    <div className="text left-align">
                      Our system allows you to choose different finishes.
                      The final appearance of your building will be influenced by factors such as
                      your own preferences, terrain characteristics, local
                      sourcing of materials, local character or local
                      law. The combination of our design and your requirements
                      will produce different results. We invite you to familiarize yourself with
                      a list of materials on our website, at a request
                      we can arrange other materials (it may affect
                      price and construction time).
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
                          <td> Building supportynku </td>
                          <td> Micro Piles or Wheels </td>
                        </tr>

                        <tr>
                          <td> Roof finish </td>
                          <td> Sandwich panels and finishing </td>
                        </tr>
                        <tr>
                          <td> Finishing the terrace </td>
                          <td> Boards </td>
                        </tr>
                        <tr>
                          <td> Heating </td>
                          <td>
                            Air conditioning with heating option + Radiators
                        </td>
                        </tr>
                        <tr>
                          <td> Ventilation </td>
                          <td> Mechanical </td>
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
            <Col s={12}>
              <Card className="house2card z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <img alt="" src={QHouseSRzut} width="100%" />
                  </Col>
                  <Col s={12} l={6}>
                    <h3> List of Zones </h3>
                    <div className="text left-align">
                      The building can be divided into 3 zones: private, public and
                      utilitarian. We have designed the building so that these zones
                      do not intersect. We encourage you to place the building
                      so the private area faces north
                      or "the more private part of the site". One enters the building
                      through the living zone.
                  </div>
                    <Table>
                      <tbody>
                        <tr className="red-text text-darken-3">
                          <td> 1. Kitchen and Living Room </td>
                          <td> 14m2 </td>
                        </tr>

                        <tr className="blue-text text-darken-3">
                          <td> 2. Bathroom </td>
                          <td> 3m2 </td>
                        </tr>
                        <tr className="yellow-text text-darken-3">
                          <td> 3. Room </td>
                          <td> 10 m2 </td>
                        </tr>

                        <tr className="green-text text-darken-3">
                          <td> 4. Mezzanine </td>
                          <td> 10 m2 </td>
                        </tr>
                      </tbody> {""}
                    </Table>
                  </Col>
                </Row>
              </Card>
            </Col>


            <Col s={12} m={6}>

              <Card className="house3card white-text z-depth-3 red">
                <Row>

                  <h3> Heating </h3>
                  <h5>Base package</h5>
                  <h5 className="text left-align">
                    1. Aircondition with heating option
                    <br />

                    2. Radiators in the Łazienka and room
                    <br/>
                    3. Boiler
                  </h5>
                  <h5>Eco 1 package</h5>
                  <h5 className="text left-align">
                    1. Air to air heatpump 
                    <br />

                    2. Radiator in the Łazienka
                    <br/>
                    3. Boiler
                   
                  </h5>
                  
                  <h5>Eco 2 package</h5>
                  <h5 className="text left-align">
                    1. Air to water heatpump
                    <br />

                    2. Radiator in the Łazienka 
                    <br/>
                    3. Boiler sunchronised with the heat pump
                    <br/>
                    4. Uderfloor heating synchronised with the heatpump
                  </h5>
                </Row>
              </Card>
            </Col>

            <Col s={12} m={6}>
              <Card className="house3card black-text z-depth-3 yellow">
                <Row>
                  <h3> Electrical Installation </h3>
                  <h5> Base package</h5>
                  <h5 className="text left-align">
                    From mains or optional Solar Panels(Eco3), 9 sockets, 5 light points, electrical box.
                  <br />
                  </h5>
                  <h5>Eco 3 package</h5>
                  <h5 className="text left-align">
                    1. Solar Panels
                    <br />
                        2. Optional Battery Pack
                   
                  </h5>
                </Row>
              </Card>
            </Col>
            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <h3 className="center">
                    Examples of exterior wall finishing
                </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=xxsfExN0JDA"
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
                  <h3 className="center"> Various locations and weather </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/n1M-TshbSZY"
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
                    url="https://p3d.in/4TryD"
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />

                  <h3 className="black-text"> 3D Model </h3>
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
            {""}
            <Card className="house1card white-text z-depth-3">
              <Row>
                <Col s={12} l={6}>
                  <h3> House_Q 35B </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/b5TYXtR4om8"
                      width="100%"
                      height="100%"
                      playing={true}
                      muted={true}
                    />
                  </div>
                  <br />
                  <div className="center">
                    <Button node="a" href="order" large className="orange">
                      Przyblizona cena PLN 185,000
                  </Button>
                  </div>
                  <br />
                  <div className="center">
                    <Row>
                      <Col s={6}>
                        <MediaBox
                          id="MediaBox_7"
                          options={{
                            inDuration: 275,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200
                          }}
                        >
                          <img
                            alt=""
                            src={pic1}
                            width="100%"
                          />
                        </MediaBox>
                      </Col>  <Col s={6}> <MediaBox
                        id="MediaBox_8"
                        options={{
                          inDuration: 275,
                          onCloseEnd: null,
                          onCloseStart: null,
                          onOpenEnd: null,
                          onOpenStart: null,
                          outDuration: 200
                        }}
                      >
                        <img
                          alt=""
                          src={pic2}
                          width="100%"
                        />
                      </MediaBox>
                      </Col></Row>
                  </div>


                </Col>
                <Col s={12} l={6}>
                  <h3> Architektura </h3>
                  <div className="text left-align">
                    <h5>   Całoroczny dom wolnostojący.<br />
                  {/* It is possible to put the building on wheels.  */}
                  <br />
                  Obnizona cena przy zakupach hurtowych.
                  </h5>
                  </div>
                  <Table>
                    <tbody>
                      <tr>
                        <td> Piętra </td>
                        <td> 2 </td>
                      </tr>
                      <tr>
                        <td> Pow. uzytkowa </td>
                        <td> 37 m2 </td>
                      </tr>
                      <tr>
                        <td> Pow. zabudowy </td>
                        <td> 35 m2 </td>
                      </tr>


                      <tr>
                        <td> Wysokość </td>
                        <td> 5.2 m </td>
                      </tr>
                      <tr>
                        <td> Długość </td>
                        <td> 6.6 m </td>
                      </tr>
                      <tr>
                        <td> Szerokość </td>
                        <td> 5.4 m </td>
                      </tr>

                      <tr>
                        <td> Poziom parteu</td>
                        <td> min + 0.45m od gruntu </td>
                      </tr>

                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col s={12}>
            <Card className="house2card z-depth-3">
              <Row>
                <Col s={12} l={6}>
                  <img alt="" src={QHouseSAxo} width="100%" />

                </Col>
                <Col s={12} l={6}>
                  <h3> Technologia </h3>
                  <div className="text left-align">
                  Nasz system pozwala na wybór różnych wykończeń.
                    Na ostateczny wygląd Twojego budynku będą miały wpływ takie czynniki jak:
                    własne preferencje, charakterystyka terenu, lokalne
                     materiały lub lokalnym
                    prawo. Połączenie naszego projektu i Twoich wymagań
                    przyniesie różne wyniki. Zapraszamy do zapoznania się z
                    wykazem materiałów na naszej stronie, na życzenie
                    możemy ułożyć inne materiały (może to wpłynąć na
                    cena i czas budowy). Istnieje moliwość rozerbrania budynku ( wraz z fundamentami).
                </div>
                  <br />
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td> Ściany zewnętrzne </td>
                        <td>
                          Płyty warstwowe i wykończenie
                      </td>
                      </tr>
                      <tr>
                        <td> Konstrukcja </td>
                        <td> Stal/drewno konstrukcyjne </td>
                      </tr>
                      <tr>
                        <td> Posadowienie </td>
                        <td> Micro pale  </td>
                      </tr>

                      <tr>
                        <td> Dach </td>
                        <td> Płyty warstwowe i wykończenie </td>
                      </tr>
                      <tr>
                        <td> Taras </td>
                        <td> Deski </td>
                      </tr>
                      <tr>
                        <td> Ogrzewanie </td>
                        <td>
                          Klimatyzacja z opcją grzania i grzejniki
                      </td>
                      </tr>
                      <tr>
                        <td> Wentylacja </td>
                        <td> Mechaniczna </td>
                      </tr>
                      <tr>
                        <td> Izolacja termiczna </td>
                        <td>
                          U przegród = 0.11 okien 0.76
                      </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col s={12}>
            <Card className="house2card z-depth-3">
              <Row>
                <Col s={12} l={6}>
                  <img alt="" src={QHouseSRzut} width="100%" />
                </Col>
                <Col s={12} l={6}>
                  <h3> Pokoje </h3>
                  <div className="text left-align">
                  Budynek można podzielić na 3 strefy: prywatną, publiczną i
                    utylitarną. Budynek zaprojektowaliśmy tak, aby te strefy
                    nie przecinają się. Zachęcamy do postawienia budynku
                    tak aby obszar prywatny był skierowany na północ
                    lub „bardziej prywatna część działki”. Wejście do budynku
                    przez strefę dzienną.
                </div>
                  <Table>
                    <tbody>
                      <tr className="red-text text-darken-3">
                        <td> 1. Kuchnia z salonem </td>
                        <td> 14m2 </td>
                      </tr>

                      <tr className="blue-text text-darken-3">
                        <td> 2. Łazienka </td>
                        <td> 3m2 </td>
                      </tr>
                      <tr className="yellow-text text-darken-3">
                        <td> 3. Pokój </td>
                        <td> 10 m2 </td>
                      </tr>

                      <tr className="green-text text-darken-3">
                        <td> 4. Antresola </td>
                        <td> 10 m2 </td>
                      </tr>
                    </tbody> {""}
                  </Table>
                </Col>
              </Row>
            </Card>
          </Col>


          <Col s={12} m={6}>

            <Card className="house3card white-text z-depth-3 red">
              <Row>

                <h3> Ogrzewanie </h3>
                <h5>Podstawowa wersja</h5>
                <h5 className="text left-align">
                  1. Klimatyzacja z opcją grzania
                  <br />

                  2. Grzejniki w łazience i pokoju
                  <br/>
                  3. Boiler
                </h5>
                <h5>Eco 1 pakiet</h5>
                <h5 className="text left-align">
                  1. Pompa ciepła powietrze-powietrze
                  <br />

                  2. Grzejnik w łazience
                  <br/>
                  3. Boiler
                 
                </h5>
                
                <h5>Eco 2 package</h5>
                <h5 className="text left-align">
                  1. Pompa ciepła powietrze-woda
                  <br />

                  2. Grzejnik w Łazience
                  <br/>
                  3. Boiler zespolony z pompą ciepła
                  <br/>
                  4. Ogrzewanie podłogowe zespolone z pompą ciepła 
                </h5>
              </Row>
            </Card>
          </Col>

          <Col s={12} m={6}>
            <Card className="house3card black-text z-depth-3 yellow">
              <Row>
                <h3> Elektryka </h3>
                <h5>  Pakiet bazowy</h5>
                <h5 className="text left-align">
                Z sieci lub opcjonalnych paneli słonecznych (Eco3), 9 gniazd, 5 punktów świetlnych, skrzynka elektryczna.
                <br />
                </h5>
                <h5>Eco 3 pakiet</h5>
                <h5 className="text left-align">
                  1. Panele Słoneczne
                  <br />
                      2. Opcjonalna bateria
                 
                </h5>
              </Row>
            </Card>
          </Col>
          <Col s={12}>
            <Card className="house3card white-text z-depth-3">
              <Row>
                <h3 className="center">
                  Przykłady wykończenia zewnętrzne
              </h3>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=xxsfExN0JDA"
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
                <h3 className="center"> Róne lokalizacje i warunki atmosferyczne</h3>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/n1M-TshbSZY"
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
                  url="https://p3d.in/4TryD"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />

                <h3 className="black-text"> 3D Model </h3>
              </Row>
            </Card>
          </Col>

        </Col>
      </Row>
    );
  }
}

export default DachDwuspadowy;

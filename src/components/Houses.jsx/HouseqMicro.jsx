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

import QHouseSRzut from "../../SVG/QHouseMicroRzuty.svg";
import QHouseSAxo from "../../SVG/HouseQMicro.svg";
import QHouseSPrzekroj from "../../SVG/QHouseSPrzekroj.svg";
import QHouseSStrefy from "../../SVG/QHouseSStrefy.svg";
import QHouseFlatPZT from "../../SVG/QHouseFlatPZT.svg";
import diagram from "../../SVG/HouseQMicrodiagram.svg";
import weather from "../../SVG/HouseQMicroweather.svg";
import site from "../../SVG/HouseQMicrosite.svg";

import pic1 from "../../SVG/HouseQMicroweather.svg";
import pic2 from "../../SVG/HouseQMicroweather.svg";
let baseUrl =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/";

class HouseqMicro extends Component {
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
                    <h3> House_Q Micro </h3>
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/BhkK6SEHV50"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                      />
                    </div>
                    <br />
                    <div className="center">
                      <Button node="a" href="zamow" large className="orange">
                        Order
                    </Button>
                    </div>
                    <br />
                    <div className="center">
<Row><Col s={6}>
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
                    </Col></Row></div>
                  </Col>
                  <Col s={12} l={6}>
                    <h3> Our tiniest house. </h3>
                    <div className="text left-align">
                    <h5>   A detached building with a loggia to
                      year-round use.<br/>
                    It is possible to put the building on wheels. <br/>
                    Lower prices when buying in bulk.
                    </h5>
                    </div>
                    <Table>
                      <tbody>
                        <tr>
                          <td> Number of overground storeys </td>
                          <td> 1 </td>
                        </tr>

                        <tr>
                          <td> Building area </td>
                          <td> 27 m2 + terrace</td>
                        </tr>

                        <tr>
                          <td> Height of the building to the ridge </td>
                          <td> 2.7 m </td>
                        </tr>
                        <tr>
                          <td> Face to face </td>
                          <td> 10.45 m </td>
                        </tr>
                        <tr>
                          <td> Building width </td>
                          <td> 2.6 m </td>
                        </tr>

                        <tr>
                          <td> Building ground floor </td>
                          <td> min + 0.25m from ground level </td>
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
                    <img alt="" src={weather} width="100%" />
                    <img alt="" src={site} width="100%" />
                  </Col>
                  <Col s={12} l={6}>
                    <h3> Description of technology </h3>
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
                          <td> Steel  </td>
                        </tr>
                        <tr>
                          <td> Building support </td>
                          <td> Micro Piles or Wheels </td>
                        </tr><tr>
                          <td> Roof finish </td>
                          <td> Sandwich panels and finishing </td>
                        </tr>
                        <tr>
                          <td> Finishing of the terrace </td>
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
                            Average U for partitions around 0.11, windows 0.76
                          </td>

                        </tr>
                        <tr>
                          <td> Type of building </td>
                          <td>
                            year-round, freestanding house
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
                    <h3> List of rooms </h3>
                    <div className="text left-align">
                      The entrance to the building is in the living area. We propose to locate the bedroom with a loggia towards the private part of the plot.
                    </div>
                    <Table>
                      <tbody>
                        <tr className="red-text text-darken-3">
                          <td> 1. Bedroom and storage</td>

                        </tr>
                        <tr className="blue-text text-darken-3">
                          <td> 2. Bathroom </td>

                        </tr>
                        <tr className="green-text text-darken-3">
                          <td> 3. Kitchen and Living Room </td>

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
                  <h5 className="text left-align">
                    1. Air conditioning with heating option
                    <br />

                    2. A heater in the bathroom
                  </h5>
                </Row>
              </Card>
            </Col>
            <Col s={12} m={6}>
              <Card className="house3card black-text z-depth-3 yellow">
                <Row>
                  <h3> Electrical Installation </h3>
                  <h5 className="text left-align">
                    From mains or optional Solar Panels and battery pack, 6 sockets, 4 light points.
                  </h5>
                </Row>
              </Card>
            </Col>


            <Col s={12}>
              <Card className="house2card z-depth-3">
                <Row>
                  <Col s={12} l={6}>
                    <img alt="" src={diagram} width="100%" />
                  </Col>
                  <Col s={12} l={6}>
                    <h3> Detailed list of spaces </h3>
                    <div className="text left-align">
                      HouseQ Micro was designed to maximalise space efficiency.
                      By carefully distributing storage spaces we achieved clean, spacious design, in which the key is the view.
                      House Q Micro is designed to be placed in various enviroments, altidutes and types of soil.
                  </div>

                      1. Terrace
                      <br />
                      2. Bedroom, bed 1.4m wide
                      <br />
                      3. Storage under the bed
                      <br />
                      4. Wardrobe
                      <br />
                      5. Optional water storage and heating unit
                      <br />
                      6. Battery pack
                      <br />
                      7. Bathroom
                      <br />
                      8. Kitchen
                      <br />
                      9. Living room and entrance
                      <br />

                  </Col>
                </Row>
              </Card>
            </Col>


            <Col s={12}>
              <Card className="house3card white-text z-depth-3">
                <Row>
                  <h3 className="center">
                    An example of finished houses.
                  </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/BhkK6SEHV50"
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
                  <h3 className="center"> Various plots and weather conditions </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/ISV5h1Lr5bg"
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
                    url="https://p3d.in/eSNAZ"
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />

                  <h3 className="black-text"> 3D model </h3>
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
                  <h3> House_Q Micro </h3>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/BhkK6SEHV50"
                      width="100%"
                      height="100%"
                      playing={true}
                      muted={true}
                    />
                  </div>
                  <br />
                  <div className="center">
                    <Button node="a" href="zamow" large className="orange">
                      Zamøów
                  </Button>
                  </div>
                  <br />
                  <div className="center">
<Row><Col s={6}>
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
                  </Col></Row></div>
                </Col>
                <Col s={12} l={6}>
                  <h3> Nasz namnijeszy dom. </h3>
                  <div className="text left-align">
                  <h5>   Całoroczny dom wolnostojący<br/>
                 Istnieje moliwość posadowienia domu na kołach. <br/>
                  Nisza cena orzy zamówieniu hurtowym.
                  </h5>
                  </div>
                  <Table>
                    <tbody>
                      <tr>
                        <td> Liczba pięter </td>
                        <td> 1 </td>
                      </tr>

                      <tr>
                        <td> Powierzchnia </td>
                        <td> 27 m2 + taras</td>
                      </tr>

                      <tr>
                        <td> Wysokość </td>
                        <td> 2.7 m </td>
                      </tr>
                      <tr>
                        <td> Długość</td>
                        <td> 10.45 m </td>
                      </tr>
                      <tr>
                        <td> Szerokość </td>
                        <td> 2.6 m </td>
                      </tr>

                      <tr>
                        <td> Posadowienie parteru </td>
                        <td> min + 0.25m od gruntu </td>
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
                  <img alt="" src={weather} width="100%" />
                  <img alt="" src={site} width="100%" />
                </Col>
                <Col s={12} l={6}>
                  <h3> Technologia </h3>
                  <div className="text left-align">
                  Nasz system pozwala na wybór różnych wykończeń.
                    Na ostateczny wygląd Twojego budynku będą miały wpływ takie czynniki jak:
                    własne preferencje, charakterystyka terenu, lokalna
                     materiały o charakterze lokalnym lub lokalne
                    prawo. Połączenie naszego projektu i Twoich wymagań
                    przyniesie różne wyniki. Zapraszamy do zapoznania się z
                    wykazem materiałów na naszej stronie, na życzenie
                    możemy zamontować inne materiały (może to wpłynąć na
                    cenę i czas budowy).
                </div>
                  <br />
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td> Ściany zewnętrzne </td>
                        <td>
                          Płyty warstwowe - zewnętrzne wykończenie
                      </td>
                      </tr>
                      <tr>
                        <td> Konstrukcja </td>
                        <td> Stal  </td>
                      </tr>
                      <tr>
                        <td> Posadowienie budynku </td>
                        <td> Mikro pale lub koła</td>
                      </tr><tr>
                        <td> Wykończenie dachu </td>
                        <td> Płyty warstwowe i wykończenie</td>
                      </tr>
                      <tr>
                        <td> Wykończenie tarasu </td>
                        <td> Deski </td>
                      </tr>
                      <tr>
                        <td> Ogrzewanie </td>
                        <td>
                          Klimatyzacja z opcją grzania
                        </td>
                      </tr>
                      <tr>
                        <td> Wentylacja </td>
                        <td> Mechaniczna </td>
                      </tr>
                      <tr>
                        <td> Izolacja termiczna </td>
                        <td>
                          Średnie U dla przegród 0.11, okna 0.76
                        </td>

                      </tr>
                      <tr>
                        <td> Typ budynku </td>
                        <td>
                         całoroczny wolnostojący
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
                  <h3> Pomieszczenia </h3>
                  <div className="text left-align">
                  Wejście do budynku znajduje się w części dziennej. Proponujemy usytuowanie sypialni z loggią od strony prywatnej działki.                  </div>
                  <Table>
                    <tbody>
                      <tr className="red-text text-darken-3">
                        <td> 1. Sypialnia i garderoba</td>

                      </tr>
                      <tr className="blue-text text-darken-3">
                        <td> 2. Łazienka </td>

                      </tr>
                      <tr className="green-text text-darken-3">
                        <td> 3. Kuchnia i pokój dzienny </td>

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
                <h5 className="text left-align">
                  1. Klimatyzacja z opcją grzania 
                  <br />

                  2. Grzejnik w łazience
                </h5>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={6}>
            <Card className="house3card black-text z-depth-3 yellow">
              <Row>
                <h3> Instalacja elektryczna </h3>
                <h5 className="text left-align">
                Z sieci lub opcjonalnych paneli słonecznych i akumulatora, 6 gniazd, 4 punkty świetlne.
                </h5>
              </Row>
            </Card>
          </Col>


          <Col s={12}>
            <Card className="house2card z-depth-3">
              <Row>
                <Col s={12} l={6}>
                  <img alt="" src={diagram} width="100%" />
                </Col>
                <Col s={12} l={6}>
                  <h3> Szczegółowa lista </h3>
                  <div className="text left-align">
                  HouseQ Micro został zaprojektowany, aby zmaksymalizować wydajność przestrzeni.
                    Dzięki starannemu rozmieszczeniu przestrzeni do przechowywania uzyskaliśmy czysty, przestronny design, w którym kluczem jest widok.
                    House Q Micro jest przeznaczony do umieszczania w różnych środowiskach, wysokościach i rodzajach gleby.
                </div>

                1. Taras
                    <br />
                    2. Sypialnia, łóżko o szerokości 1,4m
                    <br />
                    3. Przechowywanie pod łóżkiem
                    <br />
                    4. Szafa
                    <br />
                    5. Opcjonalna jednostka do przechowywania i podgrzewania wody
                    <br />
                    6. Akumulator
                    <br />
                    7. Łazienka
                    <br />
                    8. Kuchnia
                    <br />
                    9. Salon i wejście
                    <br />

                </Col>
              </Row>
            </Card>
          </Col>


          <Col s={12}>
            <Card className="house3card white-text z-depth-3">
              <Row>
                <h3 className="center">
                 Przykład wykończonych domów.
                </h3>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/BhkK6SEHV50"
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
                <h3 className="center"> Różne działki i warunki pogodowe</h3>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/ISV5h1Lr5bg"
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
                  url="https://p3d.in/eSNAZ"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />

                <h3 className="black-text"> 3D model </h3>
              </Row>
            </Card>
          </Col>

        </Col>
      </Row>
      );
  }
}

export default HouseqMicro;

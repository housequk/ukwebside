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
  Icon,
} from "react-materialize";
import ReactPlayer from "react-player";
import Plans from "../../SVG/QHousePlanspl.svg";
import Gallery from "../../SVG/QHouseGallerypl.svg";
import Eco from "../../SVG/QHouseEcologypl.svg";
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
        <div className="">
          <br />
          <br />
          <br />
          <br />
          <Row className="hide-on-small-only   darken-3 white-text">
            <Col m={2} push="m1">
              <Button
                node="a"
                href="/dachplaski"
                className="orange darken-3 hoverable"
                large
              >
                Info
              </Button>
            </Col>
            <Col m={9} push="m1" className="right-align">
              <Button
                node="a"
                href="/dachplaskigaleria"
                className="orange darken-3 hoverable"
                large
              >
                Gallery
              </Button>

              <Button
                node="a"
                href="/dachplaskiukladfunkcjonalny"
                className="orange darken-3 hoverable"
                large
              >
                Functional layout
              </Button>

              <Button
                node="a"
                href="/dachplaskiekologia"
                className="orange darken-3 hoverable"
                large
              >
                Eco
              </Button>

              <Button
                node="a"
                href="/dachplaskispecyfikacja"
                className="orange darken-3 hoverable"
                large
              >
                Specification
              </Button>

              <Button
                node="a"
                href="zamow"
                className="orange darken-3 hoverable"
                large
              >
                Order
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
          <div className="">
            <Row>
              <br />
              <Col m={12} l={6} push="l3">
                <div className="center">
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
                  <h3 className="orange-text">House_Q Flat </h3>
                  <Divider />
                  <h5 className="black-text left-align">
                    The building can be divided into 3 zones: private, public
                    and utility. Building we designed so that these zones do not
                    happen intersected. We encourage you to post building on
                    site so that the private area it was directed north or "more
                    private part of the site ". The building is entered via a
                    utility area that acts as a bridge between private and
                    shared area.
                  </h5>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />

            <br />
            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="orange darken-3">
                    <h3 className="white-text">Design i Wygoda</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Col m={12} l={6} push="l">
                        <Card>
                          <p1>
                            We focused on creating the perfect shelter. A place
                            where you can safely and comfortably live for many
                            years. We don't know where it will stand that's why
                            we designed it to work in different settings. We
                            took into account aspects such as: natural lighting,
                            temperature and humidity control and the relation
                            between inside and out. Large glazing and minimalist
                            form are the key aspects of our homes.
                          </p1>
                        </Card>
                      </Col>
                      <Col m={12} l={6} push="l1">
                        <img
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxoplaski.png"
                          alt=""
                          width="100%"
                        />
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
            <br />

            <Row>
              <Col m={12} l={5} push="l2">
                <div className="center">
                  <Card className="grey darken-3">
                    <h3 className="white-text">Jakość</h3>
                    <Divider />
                    <h5 className="white-text left-align">
                      In House_Q you will find the highest quality of window
                      woodwork. Large glazing separating the interiors and
                      terraces are framed with high-class aluminum frames and
                      top-class HS mechanisms.
                    </h5>
                    <img
                      alt=""
                      width="100%"
                      src="https://kobiplast.com.pl/files/photo/knipping%2076%20md%203.png"
                    />
                  </Card>
                </div>
              </Col>
              <Col m={12} l={3} push="l2">
                <div className="center">
                  <Card className=" light-green darken-3">
                    <h3 className="white-text">Passive House </h3>
                    <Divider />
                    <h5 className="white-text left-align">
                      We consider it is our responsibility to design
                      environmentally friendly buildings. The emphasis was put
                      on prefabrication and ecological construction. The house
                      is designed so that inhabitants use renewable energy
                      sources through: panels solar, heat pump, floor heating,
                      large glazing, great U-value and building cubature.
                    </h5>
                    <h3 className="z-depth-3 white-text">
                      Windows: 0.09 W/m2K
                    </h3>
                    <h3 className="z-depth-3 white-text">Walls: 0.8 W/m2K</h3>
                    <h3 className="z-depth-3 white-text">Roof: 0.11 W/m2K</h3>
                    <h3 className="z-depth-3 white-text">
                      Energy Demand:
                      <br /> 15 kWh/m2/year
                    </h3>
                  </Card>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="  brown">
                    <h3 className="white-text">
                      Materials: Choice and Adaptation
                    </h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Col m={12} l={8} push="l">
                        <div className="player-wrapper">
                          <ReactPlayer
                            className="react-player"
                            url="https://youtu.be/cbuGaG715ps"
                            width="100%"
                            height="100%"
                            playing={false}
                            muted={true}
                          />
                        </div>
                      </Col>
                      <Col
                        className="white-text left-align"
                        m={12}
                        l={4}
                        push="l"
                      >
                        <li> wood </li>
                        <li> wood </li>
                        <li> wood </li>
                        <li> stone </li>
                        <li> brick </li>
                        <li> concrete </li>
                        <li> metal </li>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <br />
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <h3 className="orange-text">
                    Designed for plots of different sizes and geographic
                    locations
                  </h3>
                  <Divider />
                  <h5 className="white-text left-align">
                    House_Q Flat with external dimensions 24 meters by 8 meters
                    meters, it will fit perfectly even on a small plot.
                  </h5>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/Rr0CdU5vu-s"
                      width="100%"
                      height="100%"
                      playing={false}
                      muted={true}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="orange darken-3">
                    <h3 className="white-text">House_Q - addons</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Slider
                        fullscreen={false}
                        className="sliderDachplaski"
                        options={{
                          duration: 500,
                          height: 800,
                          indicators: true,
                          interval: 6000,
                        }}
                      >
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "GarageFlat/Image%2003.png"}
                            />
                          }
                        >
                          <Caption placement="center">
                            <h3>Garagge</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "WiataPlaska/Image%2003.png"}
                            />
                          }
                        >
                          <Caption placement="left">
                            <h3>Shed</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "Kitchen/Image%2011.png"}
                            />
                          }
                        >
                          <Caption placement="left">
                            <h3>Outdoor kitchen</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src="https://thumbs.img-sprzedajemy.pl/1000x901c/72/34/fa/basen-ogrodowy-ibiza-60x32x155-z-izolacja-baseny-oczka-wodne-dom-ogrod-szydlowiec-509496994.jpg"
                            />
                          }
                        >
                          <Caption placement="right">
                            <h3>Swimming pool</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src="https://www.tapis.pl/sauny/sauny-ogrodowe/foto/crux-1.jpg"
                            />
                          }
                        >
                          <Caption placement="center">
                            <h3>Sauna</h3>
                          </Caption>
                        </Slide>
                      </Slider>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
    else
      return (
        <div className="">
          <br />
          <br />
          <br />

          <br />
          <Row className="hide-on-small-only  darken-3 white-text">
            <Col m={2} push="m1">
              <Button
                node="a"
                href="/dachplaski"
                className="orange darken-3 hoverable"
                large
              >
                Infromacje
              </Button>
            </Col>
            <Col m={9} push="m1" className="right-align">
              <Button
                node="a"
                href="/dachplaskigaleria"
                className="orange darken-3 hoverable"
                large
              >
                Galeria
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
                  <div className="white-text orange darken-3 button large center ">
                    Więcej informacji
                  </div>{" "}
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

          <div className="">
            <Row>
              <br />
              <Col m={12} l={6} push="l3">
                <div className="center">
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
                  <h3 className="orange-text">House_Q Flat </h3>
                  <Divider />
                  <h5 className="text left-align">
                    Budynek można podzielić na 3 strefy: prywatną, publiczną i
                    użytkową. Budynek zaprojektowaliśmy tak, aby strefy te się
                    nie przecinały. Zachęcamy do umieszczenia budynku na
                    miejscu, tak aby strefa prywatna była skierowana na północ
                    lub „bardziej prywatna część terenu”. Do budynku wchodzi się
                    przez strefę użytkową, która działa jako pomost między
                    strefą prywatną i wspólną.
                  </h5>
                </div>
              </Col>
            </Row>

         

            <Col m={4} l={2} push="l3">
              <Button
                node="a"
                href="/dachplaskigaleria"
                className="white z-depth-0"
                large
                style={{
                  height: "40vh",
                }}
              >
                <img src={Gallery} width="100%" />
              </Button>
            </Col>

            <Col m={4} l={2} push="l3">
              <Button
                node="a"
                href="/dachplaskiukladfunkcjonalny"
                className="white z-depth-0"
                large
                style={{
                  height: "40vh",
                }}
              >
                {" "}
                <img src={Plans} width="100%" />
              </Button>
            </Col>

            <Col m={4} l={2} push="l3">
              <Button
                node="a"
                href="/dachplaskiekologia"
                className="white z-depth-0"
                large
                style={{
                  height: "40vh",
                }}
              >
                {" "}
                <img src={Eco} width="100%" />
              </Button>
            </Col>
            <Row />

            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="orange darken-3">
                    <h3 className="white-text">Design i Wygoda</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Col m={12} l={6} push="l">
                        <Card>
                          <p1>
                            Skupiliśmy się na stworzeniu idealnego schronienia.
                            Miejsca, w którym można bezpiecznie i komfortowo
                            mieszkać przez długie lata. Nie wiemy, gdzie stanie
                            budynek, dlatego zaprojektowaliśmy go aby sprawdzał
                            się w różnych ustawieniach. Wzięliśmy pod uwagę
                            takie aspekty, jak: naturalne oświetlenie, możliwość
                            kontroli temperatury i wilgotności oraz grę między
                            wnętrzem a zewnętrzem. Duże przeszklaenia i
                            minimalistyczna forma są kluczowymi aspektami
                            naszych domów.
                          </p1>
                        </Card>
                      </Col>
                      <Col m={12} l={6} push="l1">
                        <img
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_QFlat/rzut3dladny.png"
                          alt=""
                          width="100%"
                        />
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
           

            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="  brown">
                    <h3 className="white-text">Materiały: Wybor i Adaptacja</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Col m={12} l={8} push="l">
                        <div className="player-wrapper">
                          <ReactPlayer
                            className="react-player"
                            url="https://youtu.be/cbuGaG715ps"
                            width="100%"
                            height="100%"
                            playing={false}
                            muted={true}
                          />
                        </div>
                      </Col>
                      <Col
                        className="white-text left-align"
                        m={12}
                        l={4}
                        push="l"
                      >
                        <h5>
                          <li>drewno</li>
                          <li>drewno</li>
                          <li>drewno</li>
                          <li>kamien</li>
                          <li>cegla</li>
                          <li>beton</li>
                          <li>metal</li>
                        </h5>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
            
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <h3 className="orange-text">
                    Zaprojektowany dla działek o róznych wielkościach i
                    położeniach geograficznych
                  </h3>
                  <Divider />
                  <h5 className="white-text left-align">
                    Dom House_Q Flat o wymiarach zewnętrznych 24 metrów na 8m
                    metrów, wpasuje się idealnie nawet na małej działce.
                  </h5>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/Rr0CdU5vu-s"
                      width="100%"
                      height="100%"
                      playing={false}
                      muted={true}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            
            <Row>
              <Col m={12} l={8} push="l2">
                <div className="center">
                  <Card className="orange darken-3">
                    <h3 className="white-text">House_Q To Nie Tylko Domy</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Slider
                        fullscreen={false}
                        className="sliderDachplaski"
                        options={{
                          duration: 500,
                          height: 800,
                          indicators: true,
                          interval: 6000,
                        }}
                      >
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "GarageFlat/Image%2003.png"}
                            />
                          }
                        >
                          <Caption placement="center">
                            <h3>Garaż</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "WiataPlaska/Image%2003.png"}
                            />
                          }
                        >
                          <Caption placement="left">
                            <h3>Wiata</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src={baseUrl + "Kitchen/Image%2011.png"}
                            />
                          }
                        >
                          <Caption placement="left">
                            <h3>Kuchnia na świeżym powietrzu</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src="https://thumbs.img-sprzedajemy.pl/1000x901c/72/34/fa/basen-ogrodowy-ibiza-60x32x155-z-izolacja-baseny-oczka-wodne-dom-ogrod-szydlowiec-509496994.jpg"
                            />
                          }
                        >
                          <Caption placement="right">
                            <h3>Basen</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img
                              alt=""
                              src="https://www.tapis.pl/sauny/sauny-ogrodowe/foto/crux-1.jpg"
                            />
                          }
                        >
                          <Caption placement="center">
                            <h3>Sauna</h3>
                          </Caption>
                        </Slide>
                      </Slider>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
  }
}

export default DachPlaski;

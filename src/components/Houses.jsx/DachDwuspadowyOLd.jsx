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
  Dropdown
} from "react-materialize";
import ReactPlayer from "react-player";
import Plans from "../../SVG/QHousePlanspl.svg";
import Gallery from "../../SVG/QHouseGallerypl.svg";
import Eco from "../../SVG/QHouseEcologypl.svg";
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
        <div className="">
          <br />
          <br />
          <br />
          <br />
          <Row className="hide-on-small-only orange darken-3 white-text">
            <Col m={2} push="m1">
              <Button
                node="a"
                href="/dachdwuspadowy"
                className="orange darken-3 hoverable"
                large
              >
                Infromacje
              </Button>
            </Col>
            <Col m={9} push="m1" className="right-align">
              <Button
                node="a"
                href="/dachdwuspadowygaleria"
                className="orange darken-3 hoverable"
                large
              ><img src={Gallery} width="100%"/>
              <br/>
                Galeria
              </Button>

              <Button
                node="a"
                href="/dachdwuspadowyukladfunkcjonalny"
                className="orange darken-3 hoverable"
                large
              ><img src={Plans} width="100%"/>
              <br/>
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
          <div className="">
            <Row>
              <br />
              <Col m={12} l={6} push="l3">
                <div className="center">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/HLNJ7Jov9UE"
                      width="100%"
                      height="100%"
                      playing={true}
                      muted={true}
                    />
                  </div>
                  <h3 className="orange-text">House_Q dach dwuspadowy </h3>
                  <Divider />
                  <h5 className="black-text left-align">Budynek można podzielić na 3 strefy: prywatną, publiczną i
                    użytkową. Budynek zaprojektowaliśmy tak, aby strefy te się
                    nie przecinały. Zachęcamy do umieszczenia budynku na
                    miejscu, tak aby strefa prywatna była skierowana na północ
                    lub „bardziej prywatna część terenu”. Do budynku wchodzi się przez
                    strefę użytkową, która działa jako pomost między strefą
                    prywatną i wspólną.</h5>
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
                        <img alt=''
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
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
            <br />
            <br />
            <br />
            <Row>
              <Col m={12} l={5} push="l2">
                <div className="center">
                  <Card className="grey darken-3">
                    <h3 className="white-text">Jakość</h3>
                    <Divider />
                    <h5 className="white-text left-align">
                    W domach House_Q znajdziecie Państwo najwyższej jakości
                      stolarkę okienną. Duże przeszklenia oddzielające wnętrza z
                      tarasami opięte są wysokiej klasy ramami aluminiowymi i
                      najwyższej klasy mechanizmami HS.
                    </h5>
                    <img alt=''
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
                    <h3 className="white-text">Dom Pasywny </h3>
                    <Divider />
                    <h5 className="white-text left-align">
                      Uważamy, że naszym obowiązkiem jest projektowanie budynków
                      przyjaznych dla środowiska. House_Q to nie tylko budynek
                      energooszczędny. Nacisk położono na prefabrykację i
                      ekologiczne budownictwo. Dom zaprojektowany jest tak aby
                      wykorzystać odnawialne żródła energii poprzez: panele
                      słoneczne, pompę ciepła, oghrzewanie podłogowe, duże
                      przeszklenia, świetny współczynnik U i kubaturę budynku.
                    </h5>
                    <h3 className="z-depth-3 white-text">Okna: 0.09 W/m2K</h3>
                    <h3 className="z-depth-3 white-text">Ściany: 0.8 W/m2K</h3>
                    <h3 className="z-depth-3 white-text">Dach: 0.11 W/m2K</h3>
                    <h3 className="z-depth-3 white-text">
                      Zapotrzebowanie Energetyczne:
                      <br /> 15 kWh/m2/rok
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
                            url="https://youtu.be/I1k8GyyewwQ"
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
                        <li>drewno</li>
                        <li>drewno</li>
                        <li>drewno</li>
                        <li>kamien</li>
                        <li>cegla</li>
                        <li>beton</li>
                        <li>metal</li>
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
                      url="https://youtu.be/RxrRndao5T4"
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
                    <h3 className="white-text">House_Q To Nie Tylko Domy</h3>
                    <Divider />
                    <Row>
                      <br />
                      <br />
                      <br />
                      <Slider
                        fullscreen={false}
                        className="sliderdachdwuspadowy"
                        options={{
                          duration: 500,
                          height: 800,
                          indicators: true,
                          interval: 6000,
                        }}
                      >
                        <Slide
                          image={
                            <img alt=''
                              alt=""
                              src={baseUrl + "GaragePitched/Image%2010.png"}
                            />
                          }
                        >
                          <Caption placement="center">
                            <h3>Garaż</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img alt=''
                              alt=""
                              src={baseUrl + "WiataSpadek/Image%2003.png"}
                            />
                          }
                        >
                          <Caption placement="left">
                            <h3>Wiata</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img alt=''
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
                            <img alt=''
                              alt=""
                              src="https://thumbs.img alt=''-sprzedajemy.pl/1000x901c/72/34/fa/basen-ogrodowy-ibiza-60x32x155-z-izolacja-baseny-oczka-wodne-dom-ogrod-szydlowiec-509496994.jpg"
                            />
                          }
                        >
                          <Caption placement="right">
                            <h3>Basen</h3>
                          </Caption>
                        </Slide>
                        <Slide
                          image={
                            <img alt=''
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
      return (  <div className="">
      <br />
      <br />
      <br />
      <br />
      <Row className="hide-on-small-only  darken-3 white-text">
        <Col m={2} push="m1">
          <Button
            node="a"
            href="/dachdwuspadowy"
            className="orange darken-3 hoverable"
            large
          >
            Infromacje
          </Button>
        </Col>
        <Col m={9} push="m1" className="right-align">
          <Button
            node="a"
            href="/dachdwuspadowygaleria"
            className="orange darken-3 hoverable"
            large
            
          >
            Galeria
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
                  url="https://youtu.be/HLNJ7Jov9UE"
                  width="100%"
                  height="100%"
                  playing={true}
                  muted={true}
                />
              </div>
              <h3 className="orange-text">House_Q dach dwuspadowy </h3>
              <Divider />
              <h5 className="text left-align">Budynek można podzielić na 3 strefy: prywatną, publiczną i
                użytkową. Budynek zaprojektowaliśmy tak, aby strefy te się
                nie przecinały. Zachęcamy do umieszczenia budynku na
                miejscu, tak aby strefa prywatna była skierowana na północ
                lub „bardziej prywatna część terenu”. Do budynku wchodzi się przez
                strefę użytkową, która działa jako pomost między strefą
                prywatną i wspólną.</h5>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
        <Row className="  ">
        <Col m={4} l={2} push="l3">
              <Button
                node="a"
                href="/dachdwuspadowygaleria"
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
                href="/dachdwuspadowyukladfunkcjonalny"
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
                href="/dachdwuspadowyekologia"
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
           
      </Row>





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
                    <img alt=''
                      src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
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
        <br />
        <br />
        <br />
        <Row>
          <Col m={12} l={5} push="l2">
            <div className="center">
              <Card className="grey darken-3">
                <h3 className="white-text">Jakość</h3>
                <Divider />
                <h5 className="white-text left-align">
                W domach House_Q znajdziecie Państwo najwyższej jakości
                  stolarkę okienną. Duże przeszklenia oddzielające wnętrza z
                  tarasami opięte są wysokiej klasy ramami aluminiowymi i
                  najwyższej klasy mechanizmami HS.
                </h5>
                <img alt=''
                  alt=""
                  width="100%"
                  src="https://kobiplast.com.pl/files/photo/knipping%2076%20md%203.png"
                />
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
                        url="https://youtu.be/I1k8GyyewwQ"
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
                    <li>drewno</li>
                    <li>drewno</li>
                    <li>drewno</li>
                    <li>kamien</li>
                    <li>cegla</li>
                    <li>beton</li>
                    <li>metal</li>
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
                  url="https://youtu.be/RxrRndao5T4"
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
                <h3 className="white-text">House_Q To Nie Tylko Domy</h3>
                <Divider />
                <Row>
                  <br />
                  <br />
                  <br />
                  <Slider
                    fullscreen={false}
                    className="sliderdachdwuspadowy"
                    options={{
                      duration: 500,
                      height: 800,
                      indicators: true,
                      interval: 6000,
                    }}
                  >
                    <Slide
                      image={
                        <img alt=''
                          alt=""
                          src={baseUrl + "GaragePitched/Image%2003.png"}
                        />
                      }
                    >
                      <Caption placement="center">
                        <h3>Garaż</h3>
                      </Caption>
                    </Slide>
                    <Slide
                      image={
                        <img alt=''
                          alt=""
                          src={baseUrl + "WiataPitched/Image%2003.png"}
                        />
                      }
                    >
                      <Caption placement="left">
                        <h3>Wiata</h3>
                      </Caption>
                    </Slide>
                    <Slide
                      image={
                        <img alt=''
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
                        <img alt=''
                          alt=""
                          src="https://thumbs.img alt=''-sprzedajemy.pl/1000x901c/72/34/fa/basen-ogrodowy-ibiza-60x32x155-z-izolacja-baseny-oczka-wodne-dom-ogrod-szydlowiec-509496994.jpg"
                        />
                      }
                    >
                      <Caption placement="right">
                        <h3>Basen</h3>
                      </Caption>
                    </Slide>
                    <Slide
                      image={
                        <img alt=''
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
    </div> );
  }
}

export default DachDwuspadowy;

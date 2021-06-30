import "materialize-css";
import React from "react";
import {
  Card,
  CardPanel,
  CardTitle,
  Carousel,
  Col,
  Icon,
  Parallax,
  Row,
  Slide,
  Slider,
} from "react-materialize";
import Button from "react-materialize/lib/Button";
import Divider from "react-materialize/lib/Divider";
import ReactPlayer from "react-player";
import Pictures from "./Pictures";
class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }

  render() {
    if (this.state.lang == "en")
      return (
        <div className="homepageCointainer">
          <Row>
            {/* desktop */}
            <div className="hide-on-small-only">
              <div className="homeimg">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/GEy8-B9qkoY"
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                  />
                </div>
              </div>
              <div className="homeheader white-text">
                <CardPanel className="orangeaplfa1 z-depth-3">
                  <span className="white-text">
                    <h4>House_Q</h4>

                    <h5>Modern / Eco / Timeless / Personalised</h5>
                    <Divider />
                    <p1 className="">
                      We have developed a modern housing system. Our focus was
                      put on enabling investors to customize their homes for
                      different purposes. We understand that a house is built
                      for life and it should best suit the needs of its owners.
                      We have created a modern and timeless design that can be
                      easily costomised to YOUR needs.
                    </p1>
                  </span>
                </CardPanel>
              </div>
              <br />
              <br />
              <br />
              <Card className="cardhomeo1  z-depth-3">
                <div>
                  <Row>
                    <Col m={12}>
                      <h5 className="white-text">❶ Design</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Iniversal</li>
                        <li>Adaptable</li>
                        <li>Flexible</li>
                        <li>Local</li>
                        <li>Personal</li>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <br />
                    {/* <Col m={6}>
                  <img className="" src={Pictures.img3} alt="" width="80%" />
                </Col> */}
                    <Col m={12}>
                      <h5 className="white-text">❷ Production</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Quick</li>
                        <li>Quality</li>
                        <li>Economic</li>
                        <li>Scalable</li>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <br />
                    {/* <Col m={6}>
                  <img className="" src={Pictures.img4} alt="" width="80%" />
                </Col> */}
                    <Col m={12}>
                      <h5 className="white-text">❸ Assembly</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Quick</li>
                        <li>Pro</li>
                        <li>Non-intrusive</li>
                        <li>Also in hard-to-reach locations</li>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
            {/* mobile */}
            <div className="hide-on-med-and-up">
              <Card className="homeMobile">
                <Slider
                  fullscreen={true}
                  options={{
                    duration: 500,
                    indicators: false,
                    interval: 4000,
                  }}
                >
                  <Slide image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image37.png"/>}></Slide>
                  <Slide image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image38.png" />}></Slide>
                  <Slide image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image39.png" />}></Slide>
                  <Slide image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/House_Q%20Pitched/Image40.png" />}></Slide>
                </Slider>

                <Card className="homeMobileCard ">
                  <div className="white-text ">
                    <Row>
                      <Col s={6}>
                        <h4 className="">Domy House_Q</h4>
                        <h5>
                          Nowoczesne <br /> Ekologiczne
                          <br /> Ponadczasowe <br /> Spersonalizowane
                        </h5>
                      </Col>
                      <Col s={6} className="right-align">
                        <Button className="zamowMobile" node="a" href="zamow">
                          Order
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="galeria">
                          Gallery
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="dodatki">
                          Addons
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="system">
                          Houses
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="contact">
                          Contact
                        </Button>
                      </Col>
                    </Row>{" "}
                  </div>
                </Card>
              </Card>
            </div>
            <div className="">
              <div className="section black">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <Col m={12} s={12} push="">
                          <Card
                            className="black"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={4}>
                                  <img
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/easy.png"
                                    width="60%"
                                  />
                                </Col>
                                <br />
                                <h3> Easy Process</h3>
                                <Divider />
                                <br />
                                The construction process can be complicated.
                                Conducting construction from feasibility studies
                                to handover requires a lot of experience and
                                training. By choosing us, you save yourself
                                problems related to running the construction
                                site, orders and contractors. You decide what
                                you want, we provide it.
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="grey darken-4"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={8}>
                                  <h3> Economy & Ecology</h3>
                                  <Divider />
                                  <br />
                                  We used the principles of the economy of
                                  production mass to our advantage. We
                                  negotiated prices for components used in our
                                  system, reducing overall costs. Due to
                                  repeatability, labor costs design were also
                                  lowered.
                                </Col>
                                <Col s={4}>
                                  <img
                                    className="right"
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/economy.png"
                                    width="60%"
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="black"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={4}>
                                  <img
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/time.png"
                                    width="60%"
                                  />
                                </Col>
                                <br />
                                <h3> Time </h3>
                                <Divider />
                                <br />
                                Construction process is extremely time consuming
                                and full of surprises that extend construction
                                time. Our prefabricated system solves these
                                problems.
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="grey darken-4"
                            closeIcon={<Icon>close</Icon>}
                            // header={
                            //   <CardTitle image="https://www.colourbox.com/preview/39258427-vector-of-birds-dove-design-on-a-black-background-wild-animals-bird-logo-or-icon-easy-editable-layered-vector-illustration.jpg">
                            //     Adaptacja
                            //   </CardTitle>
                            // }
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={8}>
                                  <h3> Adaptability & Timeless </h3>
                                  <Divider />
                                  <br />
                                  Our system can be used in various climatic and
                                  location settings. The outer shell can be
                                  customized and changed in the future depending
                                  on your needs. Same as interior design, we
                                  believe realize that life is full of changes
                                  and surprises, therefore House_Q allows you to
                                  change interior layout in future if needed.
                                </Col>
                                <Col s={4}>
                                  <img
                                    className="right"
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/adaptability.png"
                                    width="60%"
                                  />
                                </Col>
                              </Row>
                            </div>{" "}
                          </Card>
                        </Col>
                      </Row>
                      <br />
                      {/* <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                      width="100%"
                      height="80%"
                      playing={false}
                      muted={true}
                    />
                  </div> */}
                      <img src={Pictures.img1} width="100%" />
                      <Row>
                        <Col m={5} s={10} push="s1">
                          <h3 className="white-text">
                            Fast and efficient investment process, free from
                            financial surprises.
                          </h3>
                        </Col>

                        <Col m={5} s={12} push="m2">
                          <br />
                          <br />
                          <div className="hide-on-small-only">
                            <CardPanel className="orangealpfa2-1">
                              <div className="white-text">
                                <p>
                                  We focus on providing continuous and reliable
                                  service. Our supply chain is diverse and
                                  decentralized, which allows us to be flexible.
                                  We pride ourselves on the ability to maintain
                                  high quality despite variable number of
                                  orders.
                                </p>
                                <Divider />
                                <h3>Investment in 3 steps:</h3>
                              </div>
                            </CardPanel>
                          </div>
                          <div className="hide-on-med-and-up">
                            <CardPanel className="orange darken-3">
                              <div className="white-text">
                                <h3 className="center">
                                  Investment in 3 steps:
                                </h3>
                              </div>
                            </CardPanel>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Step 1</h3>
                      <Divider />
                      <h5>Personalization</h5>
                      <br />
                      <p>
                        Your house, your rules. Please specify number of parking
                        spaces , location, size of the house, its finish and
                        extras such as a garage or a swimming pool.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Step 2</h3>
                      <Divider />
                      <h5>Placing an order</h5>
                      <br />
                      <p>
                        We'll take care of everything. We contact our suppliers
                        and contractors and we come back to you with the exact
                        date of when the building can be put on your site.
                        Usually it takes us few weeks, but it all depends por
                        work load.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Step 3</h3>
                      <Divider />
                      <h5>Construction</h5>
                      <br />
                      <p>
                        Professional, fast and discreet assembly. We pack all
                        the "ingredients" and send them to the destination.
                        Professional builders can assemble the structure within
                        days and then surround it with walls and roof. Next the
                        floor, internal walls and installation are assembled.
                        While we are laying the cladding, our trustworthy
                        contractors mount all winds and doors, and all
                        addons/optionas ordered.
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img6} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section white">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <br />

                        <br />
                        <Col m={4} s={12} push="">
                          <CardPanel className="orangealpfa2">
                            <span className="white-text">
                              <h3>We'll get everywhere!</h3>
                              <h5>
                                Our system allows for the installation of houses
                                in various, seemingly inaccessible places.
                              </h5>
                            </span>
                          </CardPanel>
                        </Col>

                        <Col m={4} s={12} push="m1">
                          <img
                            width="100%"
                            src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/truck.png"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Before our arrival</h3>
                      <Divider />
                      <h5 className="white-text">Preparation of the plot.</h5>
                      <br />
                      <p className="white-text">text text text text</p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Components</h3>
                      <Divider />
                      <h5 className="white-text">
                        The components of House_Q houses are designed to fit on
                        the truck.
                      </h5>
                      <br />
                      <p className="white-text">text text text text</p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Local materials</h3>
                      <Divider />
                      <h5 className="white-text">
                        The design of our houses allows the use of local
                        materials
                      </h5>
                      <br />
                      <p className="white-text">text text text text</p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img35} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <Row>
                  <Col m={10} s={12} push="m1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <Card className="black">
                      <Row>
                        <Col m={4} s={12} push="">
                          <div className="white-text">
                            <br />
                            <br />
                            <br />
                            <br />

                            <h3>House_Q - a high-quality living space</h3>
                            <Divider />
                            <br />
                            <p>
                              The building can be divided into 3 zones: private,
                              public and utility. We designed the building so
                              that these zones do not intersect. We encourage
                              you to place the building so that the private zone
                              faces north or a "more private part of the site ".
                              Double ceiling height in bedrooms create amazing
                              spaces, in which one can experience rejuvenation.
                              Attic openes up to the living area and terrace.
                              Building is entered through the utility area that
                              works as a bridge between the private and shared
                              areas.
                            </p>
                            <br />
                          </div>
                        </Col>
                        <Col m={7} s={12} push="m1">
                          <div className="white-text">
                            <Row>
                              <img
                                src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/strefy.png"
                                width="100%"
                              />

                              <Col m={4}>
                                <h5> Private area </h5>
                                <li> main bedrooms </li>
                                <li> One or two bedrooms </li>
                              </Col>
                              <Col className="left" m={4}>
                                <h5> Utilitarian zone </h5>
                                <li> vestibule </li>
                                <li> hol </li>
                                <li> technical room </li>
                                <li> Toilet </li>
                                <li> Optional WC </li>
                                <li> office </li>
                              </Col>
                              <Col m={4}>
                                <div className="right">
                                  <h5> Day zone </h5>
                                  <li> salted with a kitchenette </li>
                                  <li>
                                    {" "}
                                    or living room with separate kitchen{" "}
                                  </li>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                    <Row>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-31"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2> House_Qflat127 functional layout </h2>
                            <Divider />
                            <div className="player-wrapper">
                              <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                                width="100%"
                                height="100%"
                                playing={false}
                                muted={true}
                              />
                            </div>
                          </div>
                          <div className="black">
                            {" "}
                            <h2> House_Qflat127 functional layout </h2>
                            <Divider />
                            <div className="player-wrapper">
                              <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                                width="100%"
                                height="100%"
                                playing={false}
                                muted={true}
                              />
                            </div>
                          </div>
                        </Carousel>
                      </Col>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-2"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2> Aluminum Windows </h2>

                            <Divider />
                            <p> Top Quality Joinery </p>
                            <img
                              src="https://kobiplast.com.pl/files/photo/knipping%2076%20md%203.png"
                              width="50%"
                            />
                          </div>
                        </Carousel>
                      </Col>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-2w"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2> Weather conditions </h2>
                            <Divider />
                            <div className="left-align">
                              <p className="">
                                First of all, we focused on creation great
                                shelter. A place where you can live safely and
                                comfortably for long periods patch. We don't
                                know where the building will stand, that's why
                                we designed it to work in a variety of settings.
                                We took these grounds into account like: natural
                                lighting, possibility controlling temperature
                                and humidity environment and the game between
                                inside and outside.
                              </p>
                            </div>
                          </div>
                          <div className="black">
                            <h2> Wind and Sun </h2>
                            <Divider />
                            <p> This is your second panel </p>
                          </div>
                          <div className="black">
                            <h2> Humidity </h2>
                            <Divider />
                            <p> This is your third panel </p>
                          </div>
                          <div className="black">
                            <h2> Temperature </h2>
                            <Divider />
                            <p> This is your fourth panel </p>
                          </div>
                        </Carousel>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img34} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <Row>
                  <Col m={10} s={12} push="m1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <CardPanel className="orangealpfa2">
                      <Row>
                        <div className="center">
                          <Col m={12} s={12} push="">
                            <span className="white-text">
                              <h3> Various volumes </h3>
                              <h5> Flat roof or gable roof? </h5>
                              <Divider />
                              <p>
                                Local provisions, and individual preferences
                                define the demand for different kinds roofs. We
                                offer houses with a total area from 127 m2 up to
                                225 m2, thanks to our proportions houses will
                                fit perfectly into your plot. IN House_Q we are
                                ready to meet yours requirements!
                              </p>
                            </span>
                          </Col>
                        </div>
                      </Row>
                    </CardPanel>
                    <br />
                    <br />
                    <Row>
                      <Col m={5} s={12} push="m1">
                        <Button
                          node="a"
                          href="dachplaski"
                          className="pickHouse"
                        >
                          <div className="white-text center">
                            <img
                              src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxoplaski.png"
                              alt=""
                              width="100%"
                            />
                            <h3>
                              Flat roof
                              <Divider />
                            </h3>
                          </div>
                        </Button>
                      </Col>
                      <Col m={5} s={12} push="m2">
                        <Button
                          node="a"
                          href="dachdwuspadowy"
                          className="pickHouse"
                        >
                          <div className="white-text center">
                            <img
                              src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
                              alt=""
                              width="100%"
                            />
                            <h3>
                              Gable Roof
                              <Divider />
                            </h3>
                          </div>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <br />
              <Parallax
                image={<img alt="" src={Pictures.img36} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />

              <div className="section black">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <br />
                        <br />

                        {/* <CardPanel className="orangealpfa2">
                      <span className="white-text">
                        
                        <h3>Opisac personalizacje!</h3>
                      </span>
                    </CardPanel> */}

                        <Col m={12} s={12}>
                          <h3 className="white-text center">
                            Our system - your home!
                          </h3>
                          <Divider />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Col m={5} s={12} push="m1">
                    <Card className="">
                      <h5> Functional layout </h5>
                      <Divider />

                      <p>
                        One, two or maybe three bedrooms? Thanks to the
                        construction used in our homes, ALL walls internal are
                        partition walls. This allows for anything modifying the
                        layout of rooms!
                      </p>
                      <br />
                      <div className="player-wrapper">
                        <ReactPlayer
                          className="react-player"
                          url="https://youtu.be/o6UCIQTHhmY"
                          width="100%"
                          height="100%"
                          playing={false}
                          muted={true}
                        />
                      </div>
                    </Card>
                  </Col>
                  <Col m={5} s={12} push="m1">
                    <Card className="">
                      <h5> Exterior walls finishing </h5>
                      <Divider />

                      <p>
                        In House_Q houses, we used a ventilated facade. This
                        allows for any choice of external finish home. Wood,
                        facade brick, corten, stone, yours own material -
                        examples of facade materials.
                      </p>
                      <br />
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
                    </Card>
                  </Col>
                </Row>
              </div>

              <br />
              <br />

              <Parallax
                image={<img alt="" src={Pictures.img37} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <br />
                <br />
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <Col m={4} s={12} push="">
                          <br />
                          <br />
                          <br />
                          <br />

                          <CardPanel className="light-green darken-0">
                            <span className="white-text">
                              <h3> Ecology! </h3>
                              <p>
                                We focus on providing a continuous and
                                dependable service. Our supply chain is
                                diversified and decentralised allowing us to be
                                flexible. We take pride in the ability to
                                maintain high quality regardless of volume.
                              </p>
                            </span>
                          </CardPanel>
                        </Col>
                        <Col m={4} s={12} push="m1">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <h5 className="white-text">
                            We believe that design is our responsibility
                            environmentally friendly buildings. We must make it
                            clear to say that responsible design is not only
                            energy-saving building. The emphasis was on greening
                            of prefabrication and construction processes
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={5} s={12} push="m1">
                    <Card className="embodiedCarbon white-text">
                      <h4> Build / Embodied Carbon </h4>
                      <Divider />
                      <h5> We build ecologically! </h5>
                      <br />
                      <li> Reduced fuel consumption during construction </li>
                      <li>
                        The use of high Embodied Carbon materials has been
                        reduced Footprint
                      </li>
                      <li>Reduce construction and manufacturing waste</li>
                      <li> Materials used locally </li>
                      <li> Build time was reduced </li>
                      <li> Reduced negative impact on plot </li>
                      <br />
                      <br />
                    </Card>
                  </Col>
                  <Col m={5} s={12} push="m1">
                    <Card className="operationalCarbon white-text">
                      <h4> Po Budowie / Operational Carbon </h4>
                      <Divider />
                      <h5> Live ecologically and economically! </h5>
                      <br />
                      <li> Effective space planning </li>
                      <li> High energy class </li>
                      <li> Ease of modification </li>
                      <li> Ease of repair, longevity </li>
                      <li> Natural light </li>
                      <li> Renewable energy </li> {""}
                      <li> Recuperation and solar panels </li>
                      <li> Energy-efficient house </li>
                    </Card>
                  </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={
                        <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                          The heat pump
                        </CardTitle>
                      }
                      revealIcon={<Icon> more_vert </Icon>}
                    >
                      <p1 className="white-text">
                        Air source heat pump (air / water pump) is heat pump,
                        which as a heat source (environment, incl which is
                        extracted heat), uses free atmospheric air
                        (aerothermal). Same as other heat pumps in the home
                        heating system may perform the same role as a coal, gas
                        or electric, so it can be used for delivery heat for
                        central heating installation (c.o.) and for preparation
                        hot water ).
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={
                        <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                          Naturally Lighting
                        </CardTitle>
                      }
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Air source heat pump (air / water pump) is heat pump,
                        which as a heat source (environment, incl which is
                        extracted heat), uses free atmospheric air
                        (aerothermal). Same as other heat pumps in the home
                        heating system may perform the same role as a coal, gas
                        or electric, so it can be used for delivery heat for
                        central heating installation (c.o.) and for preparation
                        hot water ).
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={
                        <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                          U value
                        </CardTitle>
                      }
                      revealIcon={<Icon> more_vert </Icon>}
                    >
                      <p1 className="white-text">
                        Air source heat pump (air / water pump) is heat pump,
                        which as a heat source (environment, incl which is
                        extracted heat), uses free atmospheric air
                        (aerothermal). Same as other heat pumps in the home
                        heating system may perform the same role as a coal, gas
                        or electric, so it can be used for delivery heat for
                        central heating installation (c.o.) and for preparation
                        hot water ).
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={
                        <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                          Passive house
                        </CardTitle>
                      }
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Passive house - standard for erecting buildings, which
                        are distinguished by very good insulation parameters
                        external partitions and the use of a series solutions
                        aimed at minimizing wear energy during operation.
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={
                        <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                          Solar panels
                        </CardTitle>
                      }
                      revealIcon={<Icon> more_vert </Icon>}
                    >
                      <p1 className="white-text">
                        Solar panels are devices whose main function is to
                        convert electricity from energy solar radiation. Solar
                        panels are less precise definition of photovoltaic
                        panels. {""}
                      </p1>
                    </Card>
                  </Col>
                </Row>
              </div>
              <br />
              <br />
            </div>
          </Row>
        </div>
      );
    else
      return (
        <div className="homepageCointainer">
          <Row>
            {/* desktop */}
            <div className="hide-on-small-only">
              <div className="homeimg">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/GEy8-B9qkoY"
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                  />
                </div>
              </div>
              <div className="homeheader white-text">
                <CardPanel className="orangeaplfa1 z-depth-3">
                  <span className="white-text">
                    <h4>Domy House_Q</h4>

                    <h5>
                      Nowoczesne / Ekologiczne / Ponadczasowe / Spersonalizowane
                    </h5>
                    <Divider />
                    <p1 className="">
                      W qHouse opracowaliśmy nowoczesny system mieszkaniowy.
                      Umożliwiamy inwestorom dostosowywanie domów na różne
                      sposoby. Rozumiemy, że dom buduje się na całe życie i
                      powinien najlepiej odpowiadać potrzebom jego właścicieli.
                      Stworzyliśmy nowoczesny i ponadczasowy projekt.
                    </p1>
                  </span>
                </CardPanel>
              </div>
              <br />
              <br />
              <br />
              <Card className="cardhomeo1  z-depth-3">
                <div>
                  <Row>
                    <Col m={12}>
                      <h5 className="white-text">❶ Projekt</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Uniwersalny</li>
                        <li>Łatwy w adopcji</li>
                        <li>Nastawiony na zmiany w życiu</li>
                        <li>Lokalny</li>
                        <li>W harmionii z lokalizacją</li>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <br />
                    {/* <Col m={6}>
                  <img className="" src={Pictures.img3} alt="" width="80%" />
                </Col> */}
                    <Col m={12}>
                      <h5 className="white-text">❷ Produkcja</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Szybka</li>
                        <li>Wysoka jakość</li>
                        <li>Ekonomiczna</li>
                        <li>Skalowalna</li>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <br />
                    {/* <Col m={6}>
                  <img className="" src={Pictures.img4} alt="" width="80%" />
                </Col> */}
                    <Col m={12}>
                      <h5 className="white-text">❸ Montaż</h5>
                      <Divider />
                      <p className="white-text">
                        <li>Szybki</li>
                        <li>Profesjonalny</li>
                        <li>Nieintruzywny</li>
                        <li>Również w trudnodostępnych lokalizacjach</li>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
            {/* mobile */}
            <div className="hide-on-med-and-up">
              <Card className="homeMobile">
                <Slider
                  fullscreen={true}
                  options={{
                    duration: 500,
                    indicators: false,
                    interval: 4000,
                  }}
                >
                  <Slide image={<img alt="" src={Pictures.img33} />}></Slide>
                  <Slide image={<img alt="" src={Pictures.img34} />}></Slide>
                  <Slide image={<img alt="" src={Pictures.img35} />}></Slide>
                  <Slide image={<img alt="" src={Pictures.img36} />}></Slide>
                </Slider>

                <Card className="homeMobileCard ">
                  <div className="white-text ">
                    <Row>
                      <Col s={6}>
                        <h4 className="">Domy House_Q</h4>
                        <h5>
                          Nowoczesne <br /> Ekologiczne
                          <br /> Ponadczasowe <br /> Spersonalizowane
                        </h5>
                      </Col>
                      <Col s={6} className="right-align">
                        <Button className="zamowMobile" node="a" href="zamow">
                          Zamów
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="galeria">
                          Galeria
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="dodatki">
                          Dodatki
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="system">
                          Domy
                        </Button>
                        <br />
                        <Button className="zamowMobile" node="a" href="contact">
                          Kontakt
                        </Button>
                      </Col>
                    </Row>{" "}
                  </div>
                </Card>
              </Card>
            </div>
            <div className="">
              <div className="section black">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <Col m={12} s={12} push="">
                          <Card
                            className="black"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={4}>
                                  <img
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/easy.png"
                                    width="60%"
                                  />
                                </Col>
                                <br />
                                <h3> Łatwy Proces</h3>
                                <Divider />
                                <br />
                                Proces budowy może być skomplikowany.
                                Przeprowadzenie budowy od studiów wykonalności
                                do przekazania wymaga dużego doświadczenia i
                                przeszkolenia. Wybierając nas oszczędzasz sobie
                                kłopotów związanych z prowadzeniem budowy,
                                urzędami i konstruktorami. Ty decydujesz, czego
                                chcesz, my to zapewniamy.
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="grey darken-4"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={8}>
                                  <h3> Ekonomia i Ekologia</h3>
                                  <Divider />
                                  <br />
                                  Wykorzystaliśmy zasady ekonomii produkcji
                                  masowej na naszą korzyść. Udało nam się
                                  wynegocjować ceny komponentów używanych w
                                  naszym systemie, obniżając ogólne koszty. Ze
                                  względu na powtarzalność, koszty pracy
                                  projektowej zostały również obniżone.
                                </Col>
                                <Col s={4}>
                                  <img
                                    className="right"
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/economy.png"
                                    width="60%"
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="black"
                            closeIcon={<Icon>close</Icon>}
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={4}>
                                  <img
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/time.png"
                                    width="60%"
                                  />
                                </Col>
                                <br />
                                <h3> Czas </h3>
                                <Divider />
                                <br />
                                Proces budowy jest niezwykle czasochłonny i
                                pełen niespodzianek, które wydłużają czas
                                budowy. Nasz prefabrykowany system rozwiązuje te
                                problemy.
                              </Row>
                            </div>
                          </Card>
                        </Col>
                        <Col m={12} s={12} push="">
                          <Card
                            className="grey darken-4"
                            closeIcon={<Icon>close</Icon>}
                            // header={
                            //   <CardTitle image="https://www.colourbox.com/preview/39258427-vector-of-birds-dove-design-on-a-black-background-wild-animals-bird-logo-or-icon-easy-editable-layered-vector-illustration.jpg">
                            //     Adaptacja
                            //   </CardTitle>
                            // }
                          >
                            <div className="white-text">
                              <Row>
                                <Col s={8}>
                                  <h3> Adaptacja i Ponadczasowość </h3>
                                  <Divider />
                                  <br />
                                  Nasz system można zastosować w różnych
                                  warunkach klimatycznych i lokalizacyjnych.
                                  Zewnętrzną powłokę można dostosować i zmienić
                                  w przyszłości w zależności od potrzeb. To samo
                                  można powiedzieć o aranżacji wnętrz, zdajemy
                                  sobie sprawę, że życie jest pełne zmian i
                                  niespodzianek, dlatego projekt domów House_Q
                                  pozwala na zmianę układu wnętrza w
                                  przyszłości, wedle potrzeb.
                                </Col>
                                <Col s={4}>
                                  <img
                                    className="right"
                                    src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/adaptability.png"
                                    width="60%"
                                  />
                                </Col>
                              </Row>
                            </div>{" "}
                          </Card>
                        </Col>
                      </Row>
                      <br />
                      {/* <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                      width="100%"
                      height="80%"
                      playing={false}
                      muted={true}
                    />
                  </div> */}
                      <img src={Pictures.img1} width="100%" />
                      <Row>
                        <Col m={5} s={10} push="s1">
                          <h3 className="white-text">
                            Szybki i sprawny proces inwestycyjny, wolny od
                            niespodzianek finansoych.
                          </h3>
                        </Col>

                        <Col m={5} s={12} push="m2">
                          <br />
                          <br />
                          <div className="hide-on-small-only">
                            <CardPanel className="orangealpfa2-1">
                              <div className="white-text">
                                <p>
                                  Koncentrujemy się na zapewnieniu ciągłej i
                                  niezawodnej usługi. Nasz łańcuch dostaw jest
                                  zróżnicowany i zdecentralizowany, co pozwala
                                  nam być elastycznymi. Jesteśmy dumni z
                                  możliwości utrzymania wysokiej jakości mimo
                                  zmiennej ilości zamówień.
                                </p>
                                <Divider />
                                <h3>Inwestycja w 3 Krokach:</h3>
                              </div>
                            </CardPanel>
                          </div>
                          <div className="hide-on-med-and-up">
                            <CardPanel className="orange darken-3">
                              <div className="white-text">
                                <h3 className="center">
                                  Inwestycja w 3 Krokach:
                                </h3>
                              </div>
                            </CardPanel>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Krok 1</h3>
                      <Divider />
                      <h5>Personalziacja</h5>
                      <br />
                      <p>
                        Twój dom, twoje reguły Najpierw prosimy o określenie
                        wymagań, lokalizacji, wielkości domu, jego wykończenia i
                        dodatków, takich jak garaż czy basen.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Krok 2</h3>
                      <Divider />
                      <h5>Zamówienie</h5>
                      <br />
                      <p>
                        Zajmiemy sie wszystkim Po drugie, sprawdzamy stan
                        magazynowy, kontaktujemy się z naszymi dostawcami i
                        wykonawcami i wracamy do Ciebie z dokładną datą, kiedy
                        budynek można postawić na miejscu. Zwykle może to
                        nastąpić w ciągu kilku tygodni, ale wszystko zależy od
                        ilości zamówień.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="">
                      <h3>Krok 3</h3>
                      <Divider />
                      <h5>Konstrukcja</h5>
                      <br />
                      <p>
                        Profesjonalny, szybki i dyskretny montaż Pakujemy
                        wszystkie „składniki” i wysyłamy je na miejsce.
                        Profesjonalni budowniczowie mogą postawić konstrukcję w
                        ciągu kilku dni, a następnie otoczyć ją ścianami i
                        dachem. Następna kondygnacja, ściany wewnętrzne i
                        instalacja są na miejscu. Podczas gdy my kładziemy
                        pożądaną okładzinę, nasi godni zaufania wykonawcy
                        montują wszystkie wiatry i drzwi, a także wszystkie
                        dodatki wybrane podczas fazy 1.
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img6} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section white">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <br />

                        <br />
                        <Col m={4} s={12} push="">
                          <CardPanel className="orangealpfa2">
                            <span className="white-text">
                              <h3>Dojedziemy wszędzie!*</h3>
                              <h5>
                                Nasz system pozwala na montaż domów w rożnych,
                                pozornie niedostępnych miejscach.
                              </h5>
                            </span>
                          </CardPanel>
                        </Col>

                        <Col m={4} s={12} push="m1">
                          <img
                            width="100%"
                            src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/truck.png"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Przed naszym przyjazdem</h3>
                      <Divider />
                      <h5 className="white-text">Przygotowanie Działki.</h5>
                      <br />
                      <p className="white-text">
                        Twój dom, twoje reguły Najpierw prosimy o określenie
                        wymagań, lokalizacji, wielkości domu, jego wykończenia i
                        dodatków, takich jak garaż czy basen.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Komponenty</h3>
                      <Divider />
                      <h5 className="white-text">
                        Części składowe domów House_Q zaprojektopwane są aby
                        zmieściły się na ciężarówce.
                      </h5>
                      <br />
                      <p className="white-text">
                        Zajmiemy sie wszystkim Po drugie, sprawdzamy stan
                        magazynowy, kontaktujemy się z naszymi dostawcami i
                        wykonawcami i wracamy do Ciebie z dokładną datą, kiedy
                        budynek można postawić na miejscu. Zwykle może to
                        nastąpić w ciągu kilku tygodni, ale wszystko zależy od
                        ilości zamówień.
                      </p>
                    </Card>
                  </Col>
                  <Col m={3} s={12} push="m1">
                    <Card className="black">
                      <h3 className="white-text">Lokalne materiały</h3>
                      <Divider />
                      <h5 className="white-text">
                        Design naszych domów pozwala na wykorzystanie lokalnych
                        materiałow.
                      </h5>
                      <br />
                      <p className="white-text">
                        Dzięki czemu jest taniej lepiej itp
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img35} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <Row>
                  <Col m={10} s={12} push="m1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <Card className="black">
                      <Row>
                        <Col m={4} s={12} push="">
                          <div className="white-text">
                            <br />
                            <br />
                            <br />
                            <br />

                            <h3>
                              House_Q to wysoka jakość przestrzeni mieszkalnej
                            </h3>
                            <Divider />
                            <br />
                            <p>
                              Budynek można podzielić na 3 strefy: prywatną,
                              publiczną i użytkową. Budynek zaprojektowaliśmy
                              tak, aby strefy te się nie przecinały. Zachęcamy
                              do umieszczenia budynku na miejscu, tak aby strefa
                              prywatna była skierowana na północ lub „bardziej
                              prywatna część terenu”. Podwójna wysokość sufitu w
                              sypialniach tworzy niesamowite przestrzenie, w
                              których można doświadczyć odmłodzenia. Poddasze
                              otwarte na część dzienną i taras. Do budynku
                              wchodzi się przez strefę użytkową, która działa
                              jako pomost między strefą prywatną i wspólną.
                            </p>
                            <br />
                          </div>
                        </Col>
                        <Col m={7} s={12} push="m1">
                          <div className="white-text">
                            <Row>
                              <img
                                src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/strefy.png"
                                width="100%"
                              />

                              <Col m={4}>
                                <h5>Strefa prywatna</h5>
                                <li> głowna sypialniach</li>
                                <li> Jedna lub dwie sypialnie</li>
                              </Col>
                              <Col className="left" m={4}>
                                <h5>Strefa utylitarna</h5>
                                <li> przedsionek</li>
                                <li> hol</li>
                                <li> pomieszczenie techniczne</li>
                                <li> Toaleta</li>
                                <li> Opcjonalnie WC</li>
                                <li> biuro</li>
                              </Col>
                              <Col m={4}>
                                <div className="right">
                                  <h5>Strefa dzienna</h5>
                                  <li> solon z aneksem kuchennym</li>
                                  <li> lub salon z osobną kuchnią</li>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                    <Row>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-31"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2>Układ funkcjonalny House_Qflat127 </h2>
                            <Divider />
                            <div className="player-wrapper">
                              <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                                width="100%"
                                height="100%"
                                playing={false}
                                muted={true}
                              />
                            </div>
                          </div>
                          <div className="black">
                            {" "}
                            <h2>Układ funkcjonalny House_Qflat127 </h2>
                            <Divider />
                            <div className="player-wrapper">
                              <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=9JadMAqtNRg"
                                width="100%"
                                height="100%"
                                playing={false}
                                muted={true}
                              />
                            </div>
                          </div>
                        </Carousel>
                      </Col>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-2"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2>Aluminiowe Okna</h2>
                            <Divider />
                            <p>Najwyższej Jakości Stolarka</p>
                            <img
                              src="https://kobiplast.com.pl/files/photo/knipping%2076%20md%203.png"
                              width="50%"
                            />
                          </div>
                        </Carousel>
                      </Col>
                      <Col m={4} s={12} push="">
                        <Carousel
                          carouselId="Carousel-2w"
                          className="white-text center"
                          options={{
                            fullWidth: true,
                            indicators: true,
                          }}
                        >
                          <div className="black">
                            <h2>Warunki atmosferyczne</h2>
                            <Divider />
                            <div className="left-align">
                              <p className="">
                                Przede wszystkim skupiliśmy się na stworzeniu
                                świetnego schronienia. Miejsce, w którym można
                                bezpiecznie i wygodnie mieszkać przez długie
                                lata. Nie wiemy, gdzie stanie budynek, dlatego
                                zaprojektowaliśmy go do pracy w różnych
                                ustawieniach. Wzięliśmy pod uwagę podstawy takie
                                jak: naturalne oświetlenie, możliwość
                                kontrolowania temperatury i wilgotności
                                otoczenia oraz gra między wnętrzem a zewnętrzem.
                              </p>
                            </div>
                          </div>
                          <div className=" black">
                            <h2>Wiatr i Słońce</h2>
                            <Divider />
                            <p>This is your second panel</p>
                          </div>
                          <div className="black">
                            <h2>Wilgotność</h2>
                            <Divider />
                            <p>This is your third panel</p>
                          </div>
                          <div className="black">
                            <h2>Temperatura</h2>
                            <Divider />
                            <p>This is your fourth panel</p>
                          </div>
                        </Carousel>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Parallax
                image={<img alt="" src={Pictures.img34} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <Row>
                  <Col m={10} s={12} push="m1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <CardPanel className="orangealpfa2">
                      <Row>
                        <div className="center">
                          <Col m={12} s={12} push="">
                            <span className="white-text">
                              <h3>Różne kubatury</h3>
                              <h5>Dach płaski, czy dach dwuspadowy?</h5>
                              <Divider />
                              <p>
                                Przezpisy lokalne, oraz idywidualne preferencje
                                definiują zapotrzebowanie na różnego rodzaju
                                dachy. Oferujemy domy o powierzchni całkowitej
                                od 127m2 aż do 225m2, dzięki proporcjom nasze
                                domy idealnie wpasują sie w Twoją działkę. W
                                House_Q jesteśmy przegotowani, aby spełnić Twoje
                                wymagania!
                              </p>
                            </span>
                          </Col>
                        </div>
                      </Row>
                    </CardPanel>
                    <br />
                    <br />
                    <Row>
                      <Col m={5} s={12} push="m1">
                        <Button
                          node="a"
                          href="dachplaski"
                          className="pickHouse"
                        >
                          <div className="white-text center">
                            <img
                              src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxoplaski.png"
                              alt=""
                              width="100%"
                            />
                            <h3>
                              Dach Płaski
                              <Divider />
                            </h3>
                          </div>
                        </Button>
                      </Col>
                      <Col m={5} s={12} push="m2">
                        <Button
                          node="a"
                          href="dachdwuspadowy"
                          className="pickHouse"
                        >
                          <div className="white-text center">
                            <img
                              src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/3daxopitched.png"
                              alt=""
                              width="100%"
                            />
                            <h3>
                              Dach Dwuspadowy
                              <Divider />
                            </h3>
                          </div>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <br />
              <Parallax
                image={<img alt="" src={Pictures.img36} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />

              <div className="section black">
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <br />
                        <br />

                        {/* <CardPanel className="orangealpfa2">
                      <span className="white-text">
                        
                        <h3>Opisac personalizacje!</h3>
                      </span>
                    </CardPanel> */}

                        <Col m={12} s={12}>
                          <h3 className="white-text center">
                            Nasz system - Twój dom!
                          </h3>
                          <Divider />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Col m={5} s={12} push="m1">
                    <Card className="">
                      <h5>Układ funkcjonalny</h5>
                      <Divider />

                      <p>
                        Jedna, dwie a moze trzy sypialnie? Dzięki konstrukcji
                        zastosowanej w naszych domach WSZYSTKIE ściany
                        wewnętrzne sa ścianami działowymi. Pozwala to na dowolne
                        modyfikowanie układu pomieszczeń!
                      </p>
                      <br />
                      <div className="player-wrapper">
                        <ReactPlayer
                          className="react-player"
                          url="https://youtu.be/o6UCIQTHhmY"
                          width="100%"
                          height="100%"
                          playing={false}
                          muted={true}
                        />
                      </div>
                    </Card>
                  </Col>
                  <Col m={5} s={12} push="m1">
                    <Card className="">
                      <h5>Wykończenie ścian zewnetrznych</h5>
                      <Divider />

                      <p>
                        W domach House_Q zastosowaliśmy elewacje wentylowaną.
                        Pozwala to na dowolne dobranie wykończenia zewnętrznego
                        domu. Drewno, cegła elewacyjna, corten, kamień, Twój
                        własny materiał - przykładowe materiały elewacyjne.
                      </p>
                      <br />
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
                    </Card>
                  </Col>
                </Row>
              </div>

              <br />
              <br />

              <Parallax
                image={<img alt="" src={Pictures.img37} width="100%" />}
                options={{
                  responsiveThreshold: 0,
                }}
              />
              <div className="section black">
                <br />
                <br />
                <Row>
                  <Row>
                    <Col m={10} s={12} push="m1">
                      <Row>
                        <Col m={4} s={12} push="">
                          <br />
                          <br />
                          <br />
                          <br />

                          <CardPanel className=" light-green darken-0">
                            <span className="white-text">
                              <h3>Ekologia!</h3>
                              <p>
                                We focus on providing a continuous and
                                dependable service. Our supply chain is
                                diversified and decentralised allowing us to be
                                flexible. We take pride in the ability to
                                maintain high quality regardless of volume.
                              </p>
                            </span>
                          </CardPanel>
                        </Col>
                        <Col m={4} s={12} push="m1">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <h5 className="white-text">
                            Wierzymy, że naszym obowiązkiem jest projektowanie
                            budynków przyjaznych dla środowiska. Musimy jasno
                            powiedzieć, że odpowiedzialny projekt to nie tylko
                            energooszczędny budynek. Nacisk położono na
                            zazielenienie procesów prefabrykacji i budowy
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col m={5} s={12} push="m1">
                    <Card className="orange darken-3 white-text">
                      <h4>Budowa/ Embodied Carbon</h4>
                      <Divider />
                      <h5>Budujemy ekologicznie! </h5>
                      <br />
                      <li>Zmniejszono zużycie paliwa podczas budowy</li>
                      <li>
                        Zmniejszono użycie materiałów o wysokim Embodied Carbon
                        Footprint
                      </li>
                      <li>
                        Zmniejsz liczbę odpadów konstrukcyjnych i produkcyjnych
                      </li>
                      <li>Użyto lokalnie materiały</li>
                      <li>Skrócono czas budowy</li>
                      <li>Zmniejszono negatywny wpływ na działkę</li>
                      <br />
                      <br />
                    </Card>
                  </Col>
                  <Col m={5} s={12} push="m1">
                    <Card className="teal darken-3 white-text">
                      <h4>Po Budowie/ Operational Carbon</h4>
                      <Divider />
                      <h5>Mieszkaj ekologicznie i ekonomicznie! </h5>
                      <br />
                      <li>Efektywne rozplanowanie przestrzeni</li>
                      <li>Wysoka klasa energetyczna</li>
                      <li>Łatwość modyfikacji</li>
                      <li>Łatwość naprawy, długowieczność</li>
                      <li>Naturalne światło</li>
                      <li>Odnawialne źródła energii</li>{" "}
                      <li>Rekuperacja i panele solarne</li>
                      <li>Dom energooszczędny</li>
                    </Card>
                  </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col m={2} s={12} push="m1">
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle>Pompa Ciepła</CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Powietrzna pompa ciepła (pompa powietrze / woda) to
                        pompa ciepła, która jako dolne źródło (środowisko, z
                        którego pozyskuje się ciepło), wykorzystuje wolne
                        powietrze atmosferyczne (aerotermalne). Podobnie jak
                        inne pompy ciepła, w domowej instalacji grzewczej może
                        pełnić taką samą rolę jak kocioł węglowy, gazowy czy
                        elektryczny, dzięki czemu może służyć do dostarczania
                        ciepła do instalacji c.o. (c.o.) oraz do przygotowania
                        c.w.u. ).
                      </p1>
                    </Card>
                  </Col>

                  <Col m={2} s={12} push="m1">

                    <br/>
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle>Naturalnie Światło</CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Powietrzna pompa ciepła (pompa powietrze / woda) to
                        pompa ciepła, która jako dolne źródło (środowisko, z
                        którego pozyskuje się ciepło), wykorzystuje wolne
                        powietrze atmosferyczne (aerotermalne). Podobnie jak
                        inne pompy ciepła, w domowej instalacji grzewczej może
                        pełnić taką samą rolę jak kocioł węglowy, gazowy czy
                        elektryczny, dzięki czemu może służyć do dostarczania
                        ciepła do instalacji c.o. (c.o.) oraz do przygotowania
                        c.w.u. ).
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1"><br/>
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle>Współczynnik U</CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Powietrzna pompa ciepła (pompa powietrze / woda) to
                        pompa ciepła, która jako dolne źródło (środowisko, z
                        którego pozyskuje się ciepło), wykorzystuje wolne
                        powietrze atmosferyczne (aerotermalne). Podobnie jak
                        inne pompy ciepła, w domowej instalacji grzewczej może
                        pełnić taką samą rolę jak kocioł węglowy, gazowy czy
                        elektryczny, dzięki czemu może służyć do dostarczania
                        ciepła do instalacji c.o. (c.o.) oraz do przygotowania
                        c.w.u. ).
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1"><br/>
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle>Dom Pasywny</CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Dom pasywny – standard wznoszenia obiektów budowlanych,
                        który wyróżniają bardzo dobre parametry izolacyjne
                        przegród zewnętrznych oraz zastosowanie szeregu
                        rozwiązań, mających na celu zminimalizowanie zużycia
                        energii w trakcie eksploatacji.
                      </p1>
                    </Card>
                  </Col>
                  <Col m={2} s={12} push="m1"><br/>
                    <Card
                      className="black"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle>Panele Sloneczne</CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      <p1 className="white-text">
                        Panele słoneczne to urządzenia, których głównym zadaniem
                        jest przetworzenie energii elektrycznej z energii
                        promieniowania słonecznego. Panele słoneczne to mniej
                        precyzyjne określenie paneli fotowoltaicznych.{" "}
                      </p1>
                    </Card>
                  </Col>
                </Row>
              </div>
              <br />
              <br />
            </div>
          </Row>
        </div>
      );
  }
}
export default Home;

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
  Table,
  Carousel,
  CollapsibleItem,
  Collapsible,
  Checkbox,
  Tab,
  Tabs,
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "materialize-css";
import React, { Component, useState } from "react";
import ListaWzor from "./Resources";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";
import Resources from "./Resources";
import throttle from "lodash.throttle";


import { Document, Page } from "react-pdf";

const images170 = [
  {
    original: `${Resources.img1house170}`,
    thumbnail: `${Resources.img1house170}`,
  },
  {
    original: `${Resources.img2house170}`,
    thumbnail: `${Resources.img2house170}`,
  },
  {
    original: `${Resources.img3house170}`,
    thumbnail: `${Resources.img3house170}`,
  },
  {
    original: `${Resources.img4house170}`,
    thumbnail: `${Resources.img4house170}`,
  },
  {
    original: `${Resources.img5house170}`,
    thumbnail: `${Resources.img5house170}`,
  },
  {
    original: `${Resources.img6house170}`,
    thumbnail: `${Resources.img6house170}`,
  },
];
const Plrooms170 = Resources.plrooms170.map((plrooms170) => (
  <li>{plrooms170}</li>
));
const images225 = [
  {
    original: `${Resources.img1house225}`,
    thumbnail: `${Resources.img1house225}`,
  },
  {
    original: `${Resources.img2house225}`,
    thumbnail: `${Resources.img2house225}`,
  },
  {
    original: `${Resources.img3house225}`,
    thumbnail: `${Resources.img3house225}`,
  },
  {
    original: `${Resources.img4house225}`,
    thumbnail: `${Resources.img4house225}`,
  },
  {
    original: `${Resources.img5house225}`,
    thumbnail: `${Resources.img5house225}`,
  },
  {
    original: `${Resources.img6house225}`,
    thumbnail: `${Resources.img6house225}`,
  },
];
const Plrooms225 = Resources.plrooms225.map((plrooms225) => (
  <li>{plrooms225}</li>
));
const imagesFlat = [
  {
    original: `${Resources.img1houseFlat}`,
    thumbnail: `${Resources.img1houseFlat}`,
  },
  {
    original: `${Resources.img2houseFlat}`,
    thumbnail: `${Resources.img2houseFlat}`,
  },
  {
    original: `${Resources.img3houseFlat}`,
    thumbnail: `${Resources.img3houseFlat}`,
  },
  {
    original: `${Resources.img4houseFlat}`,
    thumbnail: `${Resources.img4houseFlat}`,
  },
  {
    original: `${Resources.img5houseFlat}`,
    thumbnail: `${Resources.img5houseFlat}`,
  },
  {
    original: `${Resources.img6houseFlat}`,
    thumbnail: `${Resources.img6houseFlat}`,
  },
];
const PlroomsFlat = Resources.plroomsFlat.map((plroomsFlat) => (
  <li>{plroomsFlat}</li>
));

class System extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      // pdf: `${Resources.rooms3dFlat}`,
      state: { width: null },
    };
  }
  // handleClick = (e) => {
  //   this.setState({ pdf: e.target.id });
  //   e.preventdefault();

  //   this.myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", throttle(this.setDivSize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setDivSize, 500));
  }

  setDivSize = () => {
    this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
  };
  // eslint-disable-next-line no-lone-blocks
  render() {
    return (
      <div className="marginTop black">
        <br />
        <br />
        <br />
        <form>
          <Row>
            <br />
            <Card className="black">
              <div className="black white-text center">
                <h3>Wybierz wersję</h3>
              </div>
              <Row>
                <Col m={12} s={12} push="">
                  <div className="">
                    <Tabs
                      className="tab-demo z-depth-1"
                      options={
                        {
                          // swipeable: true
                        }
                      }
                    >
                      <br />
                      <Tab
                        active
                        className="tab-zamow"
                        options={{
                          duration: 300,
                          onShow: null,
                          responsiveThreshold: Infinity,
                          swipeable: false,
                          active: true,
                        }}
                        title="House_Q ▢ Flat"
                      >
                        <div className="">
                          <Card className="black white-text">
                            <Row>
                              <Col m={4} s={12}>
                                <Card className="orange darken-2 white-text z-depth-1">
                                  <h3>House_Q Flat</h3>
                                </Card>
                              </Col>
                              <Col m={8} s={12}>
                                <h5>Opis Domu</h5>
                                <p1>{Resources.pldescriptionFlat}</p1>
                              </Col>
                            </Row>
                          </Card>
                          <Row>
                            <div className="white-text">CGI</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="systemCard">
                                <ImageGallery items={imagesFlat} />
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text ">
                                <div className="player-wrapper">
                                  <ReactPlayer
                                    className="react-player"
                                    url={Resources.house_QFlatvideo}
                                    width="100%"
                                    height="100%"
                                    playing={false}
                                    muted={true}
                                  />
                                </div>
                                <Divider />
                                <h5>Przykładowy dom</h5>
                                ściany:
                                <br />
                                dach:
                                <br />
                                dodatki:
                              </Card>
                            </Col>
                          </Row>
                          <Row>
                            <div className="white-text">
                              Układ przestrzenny
                              <Divider />
                            </div>

                            <br />
                            <Col m={3} s={12} push="">
                              <Card className="black white-text">
                                <h3>
                                  Kluczowe informacje
                                  <Divider />
                                </h3>

                                <Row>
                                  <Col l={12}>
                                    <Card className="orange darken-3">
                                      <h3>Eco</h3>

                                      <br />
                                      <p1>
                                        Współczynnik U ściany:<h5>123</h5>
                                        <Divider />
                                      </p1>
                                      <br />
                                      <p1>
                                        Współczynnik U okna: <h5>123</h5>
                                        <Divider />
                                      </p1>
                                      <br />
                                      <p1>
                                        Roczne zapotrzebowanie energii do
                                        ogrzewania: <h5>123</h5>
                                      </p1>
                                      <br />
                                    </Card>
                                  </Col>
                                  <Col l={6}>
                                    <h5>Pomieszczenia</h5>
                                    <ul>{PlroomsFlat}</ul>
                                  </Col>
                                  <br />
                                  <Col l={12}>
                                    <br />
                                    <br />
                                    <br />
                                  </Col>
                                </Row>
                              </Card>
                            </Col>
                            <Col m={9} s={12} push="">
                              <Card className="orange darken-2 ">
                                <h3 className="white-text">
                                  Przykładowe układy przestrzenne
                                  <Divider />
                                </h3>
                                <br /><br /><br />
                                <Carousel
                                  carouselId="Carousel-2"
                                  className="white-text center ukladPrzestrzenny"
                                  options={{
                                    fullWidth: true,
                                    indicators: true,
                                  }}
                                >
                                  <div className=" ukladPrzestrzenny orange darken-2">
                                    <Row>
                                      <Col s={6} >
                                        <h2>Wersja A</h2>
                                      </Col>
                                      <Col s={6}>
                                        <h5>»</h5>
                                      </Col>
                                    </Row>
                                   
                                    <p>This is your first panel</p>

                                    <div
                                      id="row"
                                      style={{
                                        height: "100vh",
                                        width: "100vw",
                                        display: "flex",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        id="placeholderWrapper"
                                        style={{
                                          width: "0vw",
                                          height: "100vh",
                                        }}
                                      />
                                      <div
                                        id="pdfWrapper"
                                        style={{ width: "70vw" }}
                                        ref={(ref) => (this.pdfWrapper = ref)}
                                      >
                                        <Document
                                          file={{
                                            url: `${Resources.rooms3dFlat}`,
                                          }}
                                        >
                                          <Page
                                            pageNumber={1}
                                            width={this.state.width}
                                          />
                                        </Document>
                                        <Document
                                          file={{
                                            url: `${Resources.parterFlat}`,
                                          }}
                                        >
                                          <Page
                                            pageNumber={1}
                                            width={this.state.width}
                                          />
                                        </Document>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="orange darken-2">
                                    <h2>Second Panel</h2>
                                    <p>This is your second panel</p>

                                    <div
                                      id="row"
                                      style={{
                                        // height: "100vh",
                                        // width: "100vw",
                                        display: "flex",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        id="placeholderWrapper"
                                        style={{
                                          width: "0vw",
                                          height: "100vh",
                                        }}
                                      />
                                      <div
                                        id="pdfWrapper"
                                        style={{ width: "70vw" }}
                                        ref={(ref) => (this.pdfWrapper = ref)}
                                      >
                                        <Document
                                          file={{
                                            url: `${Resources.rooms3dFlat}`,
                                          }}
                                        >
                                          <Page
                                            pageNumber={1}
                                            width={this.state.width}
                                          />
                                        </Document>
                                        <Document
                                          file={{
                                            url: `${Resources.parterFlat}`,
                                          }}
                                        >
                                          <Page
                                            pageNumber={1}
                                            width={this.state.width}
                                          />
                                        </Document>
                                      </div>
                                    </div>
                                  </div>
                                </Carousel>
                                

                                <br />
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                      <Tab
                        className="tab-zamow"
                        options={{
                          duration: 300,
                          onShow: null,
                          responsiveThreshold: Infinity,
                          swipeable: false,
                          active: true,
                        }}
                        title="House_Q ⌂ 225"
                      >
                        <div className="">
                          <Card className="black white-text">
                            <Row>
                              <Col m={4} s={12}>
                                <Card className="orange darken-2 white-text z-depth-1">
                                  <h3>House_Q 225</h3>
                                </Card>
                              </Col>
                              <Col m={8} s={12}>
                                <h5>Opis Domu</h5>
                                <p1>{Resources.pldescription225}</p1>
                              </Col>
                            </Row>
                          </Card>
                          <Row>
                            <div className="white-text">CGI</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="systemCard">
                                <ImageGallery items={images225} />
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text ">
                                <div className="player-wrapper">
                                  <ReactPlayer
                                    className="react-player"
                                    url="https://youtu.be/ru7O5LK4jVI"
                                    width="100%"
                                    height="100%"
                                    playing={false}
                                    muted={true}
                                  />
                                </div>
                                <Divider />
                                <h5>Przykładowy dom</h5>
                                ściany:
                                <br />
                                dach:
                                <br />
                                dodatki:
                              </Card>
                            </Col>
                          </Row>
                          <Row>
                            <div className="white-text">Układ przestrzenny</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                <h3>Kluczowe informacje</h3>
                                <Divider />
                                <Row>
                                  <Col m={8} s={12}>
                                    <br />
                                    <img
                                      className=""
                                      src={Resources.rooms3d225}
                                      alt=""
                                      width="100%"
                                    />
                                  </Col>
                                  <Col m={4} s={12}>
                                    <h5>Pomieszczenia</h5>
                                    <ul>{Plrooms225}</ul>
                                  </Col>
                                </Row>
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                Rzuty i przekroje
                                <Collapsible accordion popout>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Better safe than sorry. That's my motto."
                                    icon={<Icon>filter_drama</Icon>}
                                    node="div"
                                  >
                                    Better safe than sorry. That's my motto.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Yeah, you do seem to have a little 'shit creek' action going."
                                    icon={<Icon>place</Icon>}
                                    node="div"
                                  >
                                    Yeah, you do seem to have a little 'shit
                                    creek' action going.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                                    icon={<Icon>whatshot</Icon>}
                                    node="div"
                                  >
                                    You know, FYI, you can buy a paddle. Did you
                                    not plan for this contingency?
                                  </CollapsibleItem>
                                </Collapsible>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                      <Tab
                        className="tab-zamow"
                        options={{
                          duration: 300,
                          onShow: null,
                          responsiveThreshold: Infinity,
                          swipeable: false,
                          active: true,
                        }}
                        title="House_Q ⌂ 170"
                      >
                        <div className="">
                          <Card className="black white-text">
                            <Row>
                              <Col m={4} s={12}>
                                <Card className="orange darken-2 white-text z-depth-1">
                                  <h3>House_Q 170</h3>
                                </Card>
                              </Col>
                              <Col m={8} s={12}>
                                <h5>Opis Domu</h5>
                                <p1>{Resources.pldescription170}</p1>
                              </Col>
                            </Row>
                          </Card>
                          <Row>
                            <div className="white-text">CGI</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="systemCard">
                                <ImageGallery items={images170} />
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text ">
                                <div className="player-wrapper">
                                  <ReactPlayer
                                    className="react-player"
                                    url="https://youtu.be/ru7O5LK4jVI"
                                    width="100%"
                                    height="100%"
                                    playing={false}
                                    muted={true}
                                  />
                                </div>
                                <Divider />
                                <h5>Przykładowy dom</h5>
                                ściany:
                                <br />
                                dach:
                                <br />
                                dodatki:
                              </Card>
                            </Col>
                          </Row>
                          <Row>
                            <div className="white-text">Układ przestrzenny</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                <h3>Kluczowe informacje</h3>
                                <Divider />
                                <Row>
                                  <Col m={8} s={12}>
                                    <br />
                                    <img
                                      className=""
                                      src={Resources.rooms3d170}
                                      alt=""
                                      width="100%"
                                    />
                                  </Col>
                                  <Col m={4} s={12}>
                                    <h5>Pomieszczenia</h5>
                                    <ul>{Plrooms170}</ul>
                                  </Col>
                                </Row>
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                Rzuty i przekroje
                                <Collapsible accordion popout>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Better safe than sorry. That's my motto."
                                    icon={<Icon>filter_drama</Icon>}
                                    node="div"
                                  >
                                    Better safe than sorry. That's my motto.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Yeah, you do seem to have a little 'shit creek' action going."
                                    icon={<Icon>place</Icon>}
                                    node="div"
                                  >
                                    Yeah, you do seem to have a little 'shit
                                    creek' action going.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                                    icon={<Icon>whatshot</Icon>}
                                    node="div"
                                  >
                                    You know, FYI, you can buy a paddle. Did you
                                    not plan for this contingency?
                                  </CollapsibleItem>
                                </Collapsible>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                      <Tab
                        className="tab-zamow"
                        options={{
                          duration: 300,
                          onShow: null,
                          responsiveThreshold: Infinity,
                          swipeable: false,
                          active: true,
                        }}
                        title="House_Q ⌂ 225"
                      >
                        <div className="">
                          <Card className="black white-text">
                            <Row>
                              <Col m={4} s={12}>
                                <Card className="orange darken-2 white-text z-depth-1">
                                  <h3>House_Q 225</h3>
                                </Card>
                              </Col>
                              <Col m={8} s={12}>
                                <h5>Opis Domu</h5>
                                <p1>{Resources.pldescription225}</p1>
                              </Col>
                            </Row>
                          </Card>
                          <Row>
                            <div className="white-text">CGI</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="systemCard">
                                <ImageGallery items={images225} />
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text ">
                                <div className="player-wrapper">
                                  <ReactPlayer
                                    className="react-player"
                                    url="https://youtu.be/ru7O5LK4jVI"
                                    width="100%"
                                    height="100%"
                                    playing={false}
                                    muted={true}
                                  />
                                </div>
                                <Divider />
                                <h5>Przykładowy dom</h5>
                                ściany:
                                <br />
                                dach:
                                <br />
                                dodatki:
                              </Card>
                            </Col>
                          </Row>
                          <Row>
                            <div className="white-text">Układ przestrzenny</div>
                            <Divider />
                            <br />
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                <h3>Kluczowe informacje</h3>
                                <Divider />
                                <Row>
                                  <Col m={8} s={12}>
                                    <br />
                                    <img
                                      className=""
                                      src="https://materializecss.com/images/sample-1.jpg"
                                      alt=""
                                      width="100%"
                                    />
                                  </Col>
                                  <Col m={4} s={12}>
                                    <h5>Pomieszczenia</h5>
                                    <ul>{Plrooms225}</ul>
                                  </Col>
                                </Row>
                              </Card>
                            </Col>
                            <Col m={6} s={12} push="">
                              <Card className="black-text">
                                Rzuty i przekroje
                                <Collapsible accordion popout>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Better safe than sorry. That's my motto."
                                    icon={<Icon>filter_drama</Icon>}
                                    node="div"
                                  >
                                    Better safe than sorry. That's my motto.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="Yeah, you do seem to have a little 'shit creek' action going."
                                    icon={<Icon>place</Icon>}
                                    node="div"
                                  >
                                    Yeah, you do seem to have a little 'shit
                                    creek' action going.
                                  </CollapsibleItem>
                                  <CollapsibleItem
                                    expanded={false}
                                    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                                    icon={<Icon>whatshot</Icon>}
                                    node="div"
                                  >
                                    You know, FYI, you can buy a paddle. Did you
                                    not plan for this contingency?
                                  </CollapsibleItem>
                                </Collapsible>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row>
            <div className="white-text">Dodatkowe Informacje</div>
            <Divider />
            <br />
            <Col m={6}>
              <Card>
                <h3 className="">Animacja skladania domkow</h3>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/ru7O5LK4jVI"
                    width="100%"
                    height="100%"
                    playing={false}
                    muted={true}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default System;

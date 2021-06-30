import {
  NavItem,
  Navbar,
  Icon,
  Button,
  Col,
  CardTitle,
  Card,
  Row,
  MediaBox,
  Divider,
  Modal,
  DatePicker,
  Form,
  Carousel,
  Collapsible,
  CollapsibleItem,
  Tab,
  Tabs,
  Dropdown,
} from "react-materialize";
import "materialize-css";

import React, { Component, useState } from "react";
import Resources from "../../Resources";
import throttle from "lodash.throttle";
import QHouseFlatRzut from "../../../SVG/QHouseFlatRzut.svg";
import QHouseFlatAxo from "../../../SVG/QHouseFlatAxo.svg";
import QHouseFlatPrzekroj from "../../../SVG/QHouseFlatPrzekroj.svg";
import QHouseFlatStrefy from "../../../SVG/QHouseFlatStrefy.svg";
import QHouseFlatPZT from "../../../SVG/QHouseFlatPZT.svg";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PlroomsFlat = Resources.plroomsFlat.map((plroomsFlat) => (
  <li>
    {plroomsFlat}
    <Divider />
  </li>
));

class UkladFunkcjonalny extends Component {
  constructor() {
    super();
    // this.myRef = React.createRef();
    this.state = {
      state: {
        width: null,
        // pdf3dFlat: Resources.rooms3dFlat,
        lang: localStorage.getItem("lang"),
      },
    };
  }

  // componentDidMount() {
  //   this.setDivSize();
  //   window.addEventListener("resize", throttle(this.setDivSize, 500));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", throttle(this.setDivSize, 500));
  // }

  // setDivSize = () => {
  //   this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
  // };

  // eslint-disable-next-line no-lone-blocks
  render() {
    if (this.state.lang == "en") return <Row></Row>;
    else
      return (
        <Row>
          <Col l={10} push="l1">
            <div className="">
              <br />
              <br />
              <br />
              <br />

              <Row className="hide-on-small-only orange darken-1 black-text">
                <Col m={2} push="m1">
                  <Button
                    node="a"
                    href="/dachplaskiukladfunkcjonalny"
                    className="orange darken-3 hoverable"
                    large
                  >
                    Układ Funkcjonalny
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
                    href="/dachplaski"
                    className="orange darken-3 hoverable"
                    large
                  >
                    Infromacje
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
              <Row>
                <Col m={12} s={12} push="">
                  <Card className="">
                    <Row>
                      <h3 className="black-text">
                        House_Q Flat
                        <Divider />
                      </h3>
                      <br />
                      <br />
                      <br />
                      <Col m={8} xl={3} push="m2">
                        <h5 className="black-text">
                          <h4>Pomieszczenia</h4>

                          <ul>{PlroomsFlat}</ul>
                        </h5>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseFlatAxo} width="100%" />
                      </Col>
                    </Row>
                    <Divider />
                    <Row>
                      <Col m={12} xl={3} push="">
                      <br/><br/>
                        <h5 className="black-text center">Rzut Domu</h5>
                        <br />
                        <Collapsible accordion>
                          <CollapsibleItem
                            expanded={false}
                            header="Dla osób niepełnosprawnych"
                            icon={
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/673px-Wheelchair_symbol.svg.png"
                                width="10%"
                              />
                            }
                            node="div"
                          >
                            Rozplanowanie pomieszczeń pozwala na swobodne
                            przemieszczanie się osób na wózkach inwalidzkich, do
                            domu prowadzi rampa.
                          </CollapsibleItem>
                          <CollapsibleItem
                            expanded={false}
                            header="Ściany działowe"
                            icon={
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/673px-Wheelchair_symbol.svg.png"
                                width="10%"
                              />
                            }
                            node="div"
                          >
                            
                            
                            Dom można  skonfigurować tak, aby pomieścił 1 główną
                            sypialnię i 2 pokoje idealne dla dzieci lub gabinetu
                            domowego.W łazience znajduje się miejsce na prysznic
                            i wannę. Isnieje możliwość wydzielenia osobnego WC.
                            Proponujemy projekt otwarty, ale
                            pamiętajmy, że wszystkie ściany wewnętrzne nie są
                            nośne, dlatego inwestor ma swobodę
                            dostosowania układu wnętrza do własnych potrzeb. W
                            razie potrzeby obie opcje można odbić lustrzanie. Sugerujemy
                            umieszczenie budynku tak, aby przestrzeń mieszkalna
                            była skierowana na południe.
                          </CollapsibleItem>

                          <CollapsibleItem
                            expanded={false}
                            header="???????????????"
                            icon={
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/673px-Wheelchair_symbol.svg.png"
                                width="10%"
                              />
                            }
                            node="div"
                          >
                            ??????????????????????????????????
                          </CollapsibleItem>
                        </Collapsible>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseFlatRzut} width="100%" />
                      </Col>
                      <br />
                    </Row>
                    <Divider />
                    <Row>
                      <Col m={12} xl={3} push="">
                        
                          <h5 className="black-text center">
                            Praktyczne strefowanie
                          </h5>
                          <br />
                          <Card className="center">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/All_5_free_tetrominoes.svg/1200px-All_5_free_tetrominoes.svg.png"
                              width="50%"
                            />
                            <Divider />
                            
                          
                        </Card>
                      </Col>
                      <Col m={12} xl={9}>
                        <Col m={2}>
                          <Card className=" purple accent-2 white-text">
                            Strefa dzienna
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className=" cyan white-text">
                            Strefa prywatna
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="yellow darken-2 white-text">
                            Strefa utylitarna
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="green  white-text">Tarasy</Card>
                        </Col>
                        <Col m={2}>
                          <Card className="orange darken-3 white-text">
                            Komunikacja
                          </Card>
                        </Col>
                        <img src={QHouseFlatStrefy} width="100%" />
                      </Col>

                      <br />
                    </Row>
                    <Divider />
                    <Row>
                      <Col m={12} xl={3} push="">
                       
                          <h5 className="black-text center">
                            Otwarta przestrzeń
                          </h5>
                          <br />
                          <Card className="center">
                            <img
                              src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/18412817881553228266-512.png"
                              width="50%"
                            />
                            <Divider />
                            tex t textt exttext text t textt exttext text t
                            textt exttext text t textt exttext text
                         
                        </Card>
                      </Col>

                      <Col m={12} xl={9}>
                        <img src={QHouseFlatPrzekroj} width="100%" />
                      </Col>

                      <br />
                    </Row>
                    <Divider />
                    <Row>
                      <Col m={12} xl={3} push="">
                       
                          <h5 className="black-text center">
                            Przykładowy Plan Zagospodarowania
                          </h5>
                          <br />
                          <Card className="center">
                            <img
                              src="https://www.flaticon.com/svg/static/icons/svg/3079/3079076.svg"
                              width="50%"
                            />
                            <Divider />
                            Dom w relacji do działki i dodatków. Zaleca się
                            ustawić dom na działce tak, aby salon znajdował się
                            jak najbliżej południa.
                      
                        </Card>
                      </Col>

                      <Col m={12} xl={9}>
                        <img src={QHouseFlatPZT} width="100%" />
                        <Col m={2}>
                          <Card className="orange darken-3 white-text">
                            Dom
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="grey lighten-1 white-text">
                            Działka
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="purple accent-2 white-text">
                            Kuchnia na świeżym powietrzu
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="blue darken-3 white-text">
                            Basen
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="red darken-3 white-text">Sauna</Card>
                        </Col>
                        <Col m={2}>
                          <Card className="cyan darken-0 white-text">
                            Garaż
                          </Card>
                        </Col>
                        <Col m={2}>
                          <Card className="cyan lighten-2 white-text">
                            Wiata
                          </Card>
                        </Col>
                      </Col>

                      <br />
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
  }
}

export default UkladFunkcjonalny;

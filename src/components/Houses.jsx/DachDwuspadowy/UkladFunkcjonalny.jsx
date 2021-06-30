import throttle from "lodash.throttle";
import "materialize-css";
import React, { Component } from "react";
import { Button, Card, Col, Divider, Row, Tab, Tabs, Dropdown, Collapsible, CollapsibleItem } from "react-materialize";
import { Document, Page, pdfjs } from "react-pdf";
import Resources from "../../Resources";
import QHouseLRzut from "../../../SVG/QHouseLRzut.svg";
import QHouseLAxo from "../../../SVG/QHouseLAxo.svg";
import QHouseLPrzekroj from "../../../SVG/QHouseLPrzekroj.svg";
import QHouseLStrefy from "../../../SVG/QHouseLStrefy.svg";
import QHouseMRzut from "../../../SVG/QHouseMRzut.svg";
import QHouseMAxo from "../../../SVG/QHouseMAxo.svg";
import QHouseMPrzekroj from "../../../SVG/QHouseMPrzekroj.svg";
import QHouseMStrefy from "../../../SVG/QHouseMStrefy.svg";
import QHouseM2Rzut from "../../../SVG/QHouseM2Rzut.svg";
import QHouseM2Axo from "../../../SVG/QHouseM2Axo.svg";
import QHouseM2Przekroj from "../../../SVG/QHouseM2Przekroj.svg";
import QHouseM2Strefy from "../../../SVG/QHouseM2Strefy.svg";
import QHouseSRzut from "../../../SVG/QHouseSRzut.svg";
import QHouseSAxo from "../../../SVG/QHouseSAxo.svg";
import QHouseSPrzekroj from "../../../SVG/QHouseSPrzekroj.svg";
import QHouseSStrefy from "../../../SVG/QHouseSStrefy.svg";

import QHouseFlatPZT from "../../../SVG/QHouseFlatPZT.svg";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Plrooms225 = Resources.plrooms225.map((plrooms225) => (
  <li>
    {plrooms225}
    <Divider />
  </li>
));
const Plrooms170 = Resources.plrooms170.map((plrooms170) => (
  <li>
    {plrooms170}
    <Divider />
  </li>
));
const Plrooms117 = Resources.plrooms117.map((plrooms117) => (
  <li>
    {plrooms117}
    <Divider />
  </li>
));

class UkladFunkcjonalny extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      state: {
        width: null,
        pdf3d225: Resources.rooms3d225,
        pdf3d117: Resources.rooms3d117,
        pdf3d170: Resources.rooms3d170,
      },
    };
  }
  // change225s2 = () => {
  //   this.setState({ pdf3d225: Resources.rooms3d225 });
  // };
  // change225s3 = () => {
  //   this.setState({ pdf3d225: Resources.rooms3d225s3 });
  // };
  // change225kuchnia = () => {
  //   this.setState({ pdf3d225: Resources.rooms3d225kuchnia });
  // };

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
    return (
      <Row>
        <Col s={12} m={12} l={10} push="l1">
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <div className="hide-on-med-and-up">
                <Dropdown
                  className="hide-on-med-and-up"
                  id="Dropdown_931"
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
         
        <Row className="hide-on-small-only  white darken-3 white-text">
          <Col m={2} push="m1">
            <Button
              node="a"
              href="/dachdwuspadowyukladfunkcjonalny"
              className="orange darken-3 hoverable"
              large
            >
              Układ Funkcjonalny
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
              href="/dachdwuspadowy"
              className="orange darken-3 hoverable"
              large
            >
              Infromacje Ogólne
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
        {/* <Button className="show-on-small">
        <Dropdown
            
            id="Dropdown_591"
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
                <div className="white-text orange darken-3 button large center ">Więcej informacji</div>{" "}
              </a>
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
         </Button> */}
       <br/> <br/>
        <Tabs
          className="tab-demo z-depth-1"
         
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
            title="Wersja L"
          >
               <Row>
                <Col m={12} s={12} push="">
                  <Card className="">
                    <Row>
                      <h3 className="black-text">
                        House_Q L
                        <Divider />
                      </h3>
                      <br />
                      <br />
                      <br />
                      <Col m={8} xl={3} push="m2">
                        <h5 className="black-text">
                          <h4>Pomieszczenia</h4>

                          <ul>{Plrooms225}</ul>
                        </h5>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseLAxo} width="100%" />
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
                        <img src={QHouseLRzut} width="100%" />
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
                        <img src={QHouseLStrefy} width="100%" />
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
                        <img src={QHouseLPrzekroj} width="100%" />
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
           
                    
                      {/* <Button
                        className="orange darken-3 black-text"
                        onClick={this.change225s3}
                      >
                        Wersja z 3 sypialniami
                      </Button>

                      <Button
                        className="orange darken-3 black-text"
                        onClick={this.change225s2}
                      >
                        Wersja z 2 sypialniami
                      </Button>

                      <Button
                        className="orange darken-3 black-text"
                        onClick={this.change225kuchnia}
                      >
                        Wersja z osobną kuchnią
                      </Button>
                       */} 
                
             
          
          </Tab>
          
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
            title="Wersja M"
          >
               <Row>
                <Col m={12} s={12} push="">
                  <Card className="">
                    <Row>
                      <h3 className="black-text">
                        House_Q M
                        <Divider />
                      </h3>
                      <br />
                      <br />
                      <br />
                      <Col m={8} xl={3} push="m2">
                        <h5 className="black-text">
                          <h4>Pomieszczenia</h4>

                          <ul>{Plrooms170}</ul>
                        </h5>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseMAxo} width="100%" />
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
                        <img src={QHouseMRzut} width="100%" />
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
                        <img src={QHouseMStrefy} width="100%" />
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
                        <img src={QHouseMPrzekroj} width="100%" />
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

          </Tab>
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
            title="Wersja M2"
          >
               <Row>
                <Col m={12} s={12} push="">
                  <Card className="">
                    <Row>
                      <h3 className="black-text">
                        House_Q M2
                        <Divider />
                      </h3>
                      <br />
                      <br />
                      <br />
                      <Col m={8} xl={3} push="m2">
                        <h5 className="black-text">
                          <h4>Pomieszczenia</h4>

                          <ul>{Plrooms170}</ul>
                        </h5>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseM2Axo} width="100%" />
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
                        <img src={QHouseM2Rzut} width="100%" />
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
                        <img src={QHouseM2Strefy} width="100%" />
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
                        <img src={QHouseM2Przekroj} width="100%" />
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

          </Tab>
   
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
            title="Wersja S"
          >
               <Row>
                <Col m={12} s={12} push="">
                  <Card className="">
                    <Row>
                      <h3 className="black-text">
                        House_Q S
                        <Divider />
                      </h3>
                      <br />
                      <br />
                      <br />
                      <Col m={8} xl={3} push="m2">
                        <h5 className="black-text">
                          <h4>Pomieszczenia</h4>

                          <ul>{Plrooms117}</ul>
                        </h5>
                      </Col>
                      <Col m={12} xl={9}>
                        <img src={QHouseSAxo} width="100%" />
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
                        <img src={QHouseSRzut} width="100%" />
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
                        <img src={QHouseSStrefy} width="100%" />
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
                        <img src={QHouseSPrzekroj} width="100%" />
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

          </Tab>
   
      </Tabs>
      
      
      
      </div>
    </Col></Row>
    );
  }
}

export default UkladFunkcjonalny;

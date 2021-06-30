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
  DatePicker,
  Form,
  Carousel,
  Collapsible,
  CollapsibleItem,
  Dropdown
} from "react-materialize";
import "materialize-css";
import YouTube from "react-youtube";
import React, { Component } from "react";
import ReactPlayer from "react-player";

class Ekologia extends Component {
  render() {
    return (
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <Row className="hide-on-small-only  darken-1 white-text">
          <Col m={2} push="m1">
            <Button
              node="a"
              href="/dachdwuspadowyekologia"
              className="orange darken-3 hoverable"
              large
            >
              Ekologia
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
              href="/dachdwuspadowy"
              className="orange darken-3 hoverable"
              large
            >
              Infromacje
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
         
        <Col m={12} xl={3} push="">
          <Card className="green white-text darken-3 ekologiaCard">
            <h3 className="white-text">Kluczowe liczby</h3>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/ecology-environment-leaf-plant-nature-12-28925.png"
              alt=""
              width="100%"
            />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="orange white-text darken-3 ekologiaCard">
            <h3 className="white-text">Ekologiczna budowa</h3>
            <li>Zmniejszono zużycie paliwa podczas budowy</li>
            <li>
              Zmniejszono użycie materiałów o wysokim Embodied Carbon Footprint
            </li>
            <li>Zmniejsz liczbę odpadów konstrukcyjnych i produkcyjnych</li>
            <li>Użyto lokalnie materiały</li>
            <li>Skrócono czas budowy</li>
            <li>Zmniejszono negatywny wpływ na działkę</li>
            <br />
            <img
              className=""
              src="https://svgsilh.com/svg/2824556.svg"
              alt=""
              width="30%"
            />
          </Card>
        </Col>

        <Col m={12} xl={3} push="">
          <Card className="yellow  darken-3 white-text ekologiaCard">
            <h3 className="white-text"> Panele słoneczne</h3>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img
              src="https://pngimg.com/uploads/solar_panel/solar_panel_PNG90.png"
              alt=""
              width="100%"
            />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="grey darken-2 white-text  ekologiaCard">
            <h3 className="white-text"> Ekologiczne użytkowanie</h3>
            <li>Efektywne rozplanowanie przestrzeni</li>
            <li>Wysoka klasa energetyczna</li>
            <li>Łatwość naprawy, długowieczność</li>
            <li>Łatwość modyfikacji</li>
            <li>Odnawialne źródła energii</li>
            <li>Naturalne światło</li>
            <br />
            <img src="https://svgsilh.com/svg/312308.svg" alt="" width="100%" />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="orange darken-3 white-text ekologiaCard">
            <h3 className="white-text"> pompa ciepla </h3>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Heatpump.svg/1200px-Heatpump.svg.png"
              alt=""
              width="100%"
            />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="green darken-1 white-text ekologiaCard">
            <h3 className="white-text"> Ogrzewanie</h3>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img
              src="https://as-eko.eu/wp-content/uploads/2020/05/pompy_ciepla.svg"
              alt=""
              width="100%"
            />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="teal darken-1 white-text ekologiaCard">
            <h3 className="white-text"> Naturalne światło</h3>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img src="https://svgsilh.com/svg/227893.svg" alt="" width="100%" />
          </Card>
        </Col>
        <Col m={12} xl={3} push="">
          <Card className="blue darken-3 white-text ekologiaCard">
            <h3 className="white-text"> Wilgotność</h3>
            <li>opcjonalnie filtr wody</li>
            <li>opis techniczny</li>
            <li>opis techniczny</li>
            <br />
            <img src="https://www.flaticon.com/svg/static/icons/svg/1113/1113797.svg" alt="" width="100%" />
          </Card>
        </Col>

        <Row></Row>
      </div>
    );
  }
}

export default Ekologia;

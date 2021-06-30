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
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "materialize-css";
import React, { Component } from "react";
import ListaWzor from "./ListaWzor";
import Form1 from "./Form1";

class Serwis extends Component {
  constructor() {
    super();

    this.state = {
      name: "chujku",
      location: "",
      email: "",
      phonenumber: "",
      date: "",
      size: "100",
      sizePrice: 350000,
      roof: "",
      roofPrice: 0,
      walls: "",
      wallsPrice: 0,
      pool: true,
      poolPrice: 0,
      rekuperacja: true,
      rekuperacjaPrice: 0,
      solarpanels: false,
      solarpanelsPrice: 0,
      garage: false,
      garagePrice: 0,
    };
  }
  SetSize = (event) => {
    
    if (this.state.size === "100") {
      this.setState({ sizePrice: 320000 });
    } else if (this.state.size === "120") {
      this.setState({ sizePrice: 350000 });
    } else if (this.state.size=== "140") {
      this.setState({ sizePrice: 400000 });
    }
  };
  SetRoof = (event, id) => {
    this.setState({ roof: id });
    if (id === "blacha") {
      this.setState({ roofPrice: 0 });
    } else if (id === "lupek") {
      this.setState({ roofPrice: this.state.size * 0.03 });
    } else if (id === "dachowka") {
      this.setState({ roofPrice: this.state.size * 0.05 });
    }
  };
  SetWalls = (event, id) => {
    this.setState({ walls: id });
    if (id === "blacha") {
      this.setState({ wallsPrice: 0 });
    } else if (id === "kamien") {
      this.setState({ wallsPrice: this.state.size * 0.03 });
    } else if (id === "drewnopionowe") {
      this.setState({ wallsPrice: this.state.size * 0.05 });
    }
  };
  SetName = (event, id) => {
    this.setState({ name: id });
  };
  SetPool = (event, id) => {
    this.setState({ pool: id });
    if (id === true) {
      this.setState({ poolPrice: 50000 });
    } else if (id === false) {
      this.setState({ poolPrice: 0 });
    } 
  };
  
 
  render() {
    return (
      <div>
        <Row>
          <Card>
            <Row>
              <Col m={8} s={12} push="">
                <form>
                  <Carousel
                    carouselId="Carousel-3"
                    className="contactForm"
                    options={{
                      fullWidth: true,
                      indicators: false,
                    }}
                  >
                    <div className="">
                      <div>
                        <h3>1. Dane Kontaktowe</h3>
                        <Row>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="name"
                                type="text"
                                className="validate"
                                onChange={this.handleChange}
                              />
                              <label for="name">Twóje Imię</label>
                            </div>
                          </Col>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="text"
                                type="text"
                                className="validate"
                              />
                              <label for="text">Lokaizacja Inwestycji</label>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="email"
                                type="email"
                                className="validate"
                              />
                              <label for="email">Twój Email</label>
                            </div>
                          </Col>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="number"
                                type="number"
                                className="validate"
                              />
                              <label for="number">Twój numer kontaktowy</label>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="location"
                                type="date"
                                className="validate"
                              />
                              <label for="location">
                                Przybliżony czas realizacji inwestycji
                              </label>
                            </div>
                          </Col>
                          <Col m={6}>
                            <div className="input-field col s9">
                              <input
                                id="number"
                                type="number"
                                className="validate"
                              />
                              <label for="number">Cos Tam</label>
                            </div>
                          </Col>
                        </Row>
                        <h3>Swipe right, zrobic jakis znacznik</h3>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <h3>2. Konfiguracja Domu</h3>
                        <Row>
                          <Col m={6}>
                            <div className="input-field ">
                            <label>Wybierz Powierzchnię Domu:</label>
          
          <select value={this.state.size} onChange={this.SetSize} className="browser-default">
            <option value="100">100 m2</option>
            <option value="120">120 m2</option>
            <option value="140">140 m2</option>
           
          </select>
        
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col m={6}>
                            <div className="input-field ">
                              <label>Wybierz Wykończenie Dachu</label>
                              <br />
                              <br />
                              <select className="browser-default">
                                <option value="" disabled selected>
                                  Choose your option
                                </option>
                                <option value="" data-icon="">
                                  Aluminium
                                </option>
                                <option value="" data-icon="">
                                  Dachówka
                                </option>
                                <option value="" data-icon="">
                                  Łupek
                                </option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col m={6}>
                            <div className="input-field ">
                              <label>
                                Wybierz Wykończenie Ścian Zewnętrznych
                              </label>
                              <br />
                              <br />
                              <select className="browser-default">
                                <option value="" disabled selected>
                                  Choose your option
                                </option>
                                <option value="" data-icon="">
                                  Aluminium
                                </option>
                                <option value="" data-icon="">
                                  Drewno Pionowe
                                </option>
                                <option value="" data-icon="">
                                  Drewno Poziome
                                </option>
                                <option value="" data-icon="">
                                  Drewno Z Odzysku
                                </option>
                                <option value="" data-icon="">
                                  Kamień Elewacyjny
                                </option>
                                <option value="" data-icon="">
                                  Cegła
                                </option>
                                <option value="" data-icon="">
                                  Beton
                                </option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <h3>Swipe right, zrobic jakis znacznik</h3>
                      </div>
                    </div>
                    <div className="">
                      <h3>3. Dodatki</h3>
                      <Row>
                        <Col m={6}>
                          <p>
                            <label>
                              <input type="checkbox" />
                              <span>Basen</span>
                            </label>
                          </p>
                          <br />
                          <p>
                            <label>
                              <input type="checkbox" />
                              <span>opcja, dodatkowa cena: 123123 PLN </span>
                            </label>
                          </p>
                          <br />
                          <p>
                            <label>
                              <input type="checkbox" />
                              <span>opcja, dodatkowa cena: 123123 PLN </span>
                            </label>
                          </p>
                          <br />
                          <p>
                            <label>
                              <input type="checkbox" />
                              <span>opcja, dodatkowa cena: 123123 PLN </span>
                            </label>
                          </p>
                        </Col>
                      </Row>
                      <h3>Swipe right, zrobic jakis znacznik</h3>
                    </div>

                    <div className="">
                      <input
                        className="orange"
                        type="submit"
                        value="Wyślij zapytanie ofertowe"
                      />
                    </div>
                  </Carousel>
                </form>
              </Col>
              <Col m={4}>
                <h3>Witaj,  {this.state.name}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Kategoria</th>
                      <th>Wybrana Opcja</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Pakiet bazowy{" "}
                        <Modal
                          actions={[
                            <Button
                              flat
                              modal="close"
                              node="button"
                              waves="green"
                            >
                              Close
                            </Button>,
                          ]}
                          bottomSheet={false}
                          fixedFooter={false}
                          header="Pakiet Bazowy"
                          id="Modal-0"
                          open={false}
                          options={{
                            dismissible: true,
                            endingTop: "10%",
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: "4%",
                          }}
                          trigger={
                            <Button className="grey" node="button">
                              Info
                            </Button>
                          }
                        >
                          <p>opis tego co zawiera</p>
                        </Modal>
                      </td>
                      <td></td>
                      <td>+ 0 PLN</td>
                    </tr>
                    <tr>
                      <td>Powierzchnia</td>
                      <td>{this.state.size}m2</td>
                      <td>{this.state.sizePrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Wykończnie dachu</td>
                      <td>{this.state.roof}</td>
                      <td>{this.state.roofPrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Wykończnie ścian zewnętrznych</td>
                      <td>{this.state.walls}</td>
                      <td>{this.state.wallsPrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Basen</td>
                      <td>{this.state.pool}</td>
                      <td>{this.state.poolPrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Rekuperacja</td>
                      <td>{this.state.rekuperacja}</td>
                      <td>{this.state.rekuperacjaPrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Solary</td>
                      <td>{this.state.solarpanels}</td>
                      <td>{this.state.solarpanelsPrice} PLN</td>
                    </tr>
                    <tr>
                      <td>Garaż</td>
                      <td>{this.state.garage}</td>
                      <td>{this.state.garagePrice} PLN</td>
                    </tr>
                    <tr>
                      <td>System kamer</td>
                      <td>Nie </td>
                      <td>+0 PLN</td>
                    </tr>
                    <br />
                    <tr>
                      <td>SUMA</td>
                      <td> </td>
                      <td>{this.state.sizePrice + this.state.roofPrice +this.state.poolPrice + this.state.wallsPrice + this.state.garagePrice + this.state.rekuperacjaPrice } PLN</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </Col>
            </Row>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Serwis;

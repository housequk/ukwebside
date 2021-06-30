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
  Dropdown,
} from "react-materialize";
import "materialize-css";
import YouTube from "react-youtube";
import React, { Component } from "react";
import Resources from "../../Resources";
import throttle from "lodash.throttle";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Specyfikacja extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      state: {
        width: null,
      },
    };
  }
 

  render() {
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
              href="/dachdwuspadowyspecyfikacja"
              className="orange darken-3 hoverable"
              large
            >
              Specyfikacja
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
              href="/dachdwuspadowy"
              className="orange darken-3 hoverable"
              large
            >
              Infromacje Ogólne
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

        <Row>
          <br />
          <Col m={12} l={6} push="l3">
            <div className="center">
              <h3 className="orange-text">Dokument PDF z Specyfikacja </h3>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Specyfikacja;

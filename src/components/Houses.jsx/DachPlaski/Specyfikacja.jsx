import throttle from "lodash.throttle";
import "materialize-css";
import React, { Component } from "react";
import {
  Button,
  Col,
Dropdown,

  Row
} from "react-materialize";
import { Document, Page, pdfjs } from "react-pdf";
import Resources from "../../Resources";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Specyfikacja extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      state: {
        width: null,
        lang: localStorage.getItem("lang"),
      },
    };
  }
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

  render() {
    if (this.state.lang == "en")
    return (
      <div className="">
        <br />
        <br />
        <br />
        <br />

        <Row className=" hide-on-small-only orange darken-1 white-text">
          <Col m={2} push="m1">
            <Button
              node="a"
              href="/dachplaskispecyfikacja"
              className="orange darken-3 hoverable"
              large
            >
              Specification
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
              href="/dachplaski"
              className="orange darken-3 hoverable"
              large
            >
              Info 
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
              <a className=" przycisk_nawigacja ">
                {" "}
                <div className="white-text orange darken-3 button large center ">Więcej informacji</div>{" "}
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
        <Row>
          <Col m={12} xl={12}>
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
                style={{ width: "100vw" }}
                ref={(ref) => (this.pdfWrapper = ref)}
              >
                <Document
                  file={{
                    url: `${Resources.specyfikacjadachplaski}`,
                  }}
                >
                  <Page pageNumber={1} width={this.state.width} />
                </Document>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
    else
    return (
      <div className="">
      <br />
      <br />
      <br />
      <br />

      <Row className=" hide-on-small-only orange darken-1 white-text">
        <Col m={2} push="m1">
          <Button
            node="a"
            href="/dachplaskispecyfikacja"
            className="orange darken-3 hoverable"
            large
          >
            Specyfikacja
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
            href="/dachplaski"
            className="orange darken-3 hoverable"
            large
          >
            Infromacje 
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
            <a className=" przycisk_nawigacja ">
              {" "}
              <div className="white-text orange darken-3 button large center ">Więcej informacji</div>{" "}
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
      <Row>
        <Col m={12} xl={12}>
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
              style={{ width: "100vw" }}
              ref={(ref) => (this.pdfWrapper = ref)}
            >
              <Document
                file={{
                  url: `${Resources.specyfikacjadachplaski}`,
                }}
              >
                <Page pageNumber={1} width={this.state.width} />
              </Document>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
  }
}

export default Specyfikacja;

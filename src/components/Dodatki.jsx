import "materialize-css";
import React from "react";
import {
  Button, Card,
  CardTitle,
  Col,
  Divider, Icon,







  Modal, Row
} from "react-materialize";
import ReactPlayer from "react-player";
import ResourcesAddons from "./ResourcesAddons";
import QHouseExtrasSauna from '../SVG/QHouseExtrasSauna.svg'
import QHouseExtrasGarageFlat from '../SVG/QHouseExtrasGarageFlat.svg'
import QHouseExtrasGaragePitched from '../SVG/QHouseExtrasGaragePitched.svg'
import QHouseExtrasOutdoorKitchen from '../SVG/QHouseExtrasOutdoorKitchen.svg'
import QHouseExtrasSwimmingPool from '../SVG/QHouseExtrasSwimmingPool.svg'
import QHouseExtrasShedFlat from '../SVG/QHouseExtrasShedFlat.svg'
import QHouseExtrasShedPitched from '../SVG/QHouseExtrasShedPitched.svg'

const cardsArray = ResourcesAddons.map((ResourcesAddons) => (
  <Col xl={5} l={5} m={6} s={12}
  push="xl1 l1">
    <Card
      className="dodatki  black-text"
      closeIcon={<Icon>close</Icon>}
      header={
        <CardTitle  image={ResourcesAddons.img1}>
          <div className="white-text orange darken-2 z-depth-2 " >{ResourcesAddons.plname}</div>
        </CardTitle>
      }
      revealIcon={<Icon>more_vert</Icon>}
    >
      <div>
        {ResourcesAddons.pldescription}
        <br />
        <br />
        <Row>
          <Col l={4}  s={12}>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header={ResourcesAddons.plname}
              id={ResourcesAddons.plname}
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
                <Button className="orange darken-2" node="button">
                  Youtube
                </Button>
              }
            >
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={ResourcesAddons.video}
                  width="100%"
                  height="100%"
                  playing={false}
                  muted={true}
                />
              </div>
            </Modal>
            <Card className="orange darken-2 white-text ">Specyfikacja</Card>
            <ul>{ResourcesAddons.plspecification}</ul>
          </Col>
          <Col l={8}  s={12}>
            <div></div>

            <img alt="" src={ResourcesAddons.rysunki} width="100%" />

            <br />
            <br />
          </Col>
        </Row>
      </div>
    </Card>
  </Col>
));


const cardsArrayen = ResourcesAddons.map((ResourcesAddons) => (
  <Col xl={5} l={5} m={6} s={12}
  push="xl1 l1">
    <Card
      className="dodatki  black-text"
      closeIcon={<Icon>close</Icon>}
      header={
        <CardTitle  image={ResourcesAddons.img1}>
          <div className="white-text orange darken-2 z-depth-2 " >{ResourcesAddons.enname} 
          </div>
          various finishes avaible
        </CardTitle>
      }
      revealIcon={<Icon>more_vert</Icon>}
    >
      <div>
        {ResourcesAddons.endescription}
        <br />
        <br />
        <Row>
          <Col l={4}  s={12}>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header={ResourcesAddons.plname}
              id={ResourcesAddons.plname}
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
                <Button className="orange darken-2" node="button">
                  Youtube
                </Button>
              }
            >
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={ResourcesAddons.video}
                  width="100%"
                  height="100%"
                  playing={false}
                  muted={true}
                />
              </div>
            </Modal>
            <Card className="orange darken-2 white-text ">Specification</Card>
            <ul>{ResourcesAddons.enspecification}</ul>
          </Col>
          <Col l={8}  s={12}>
            <div></div>

            <img alt="" src={ResourcesAddons.rysunki} width="100%" />

            <br />
            <br />
          </Col>
        </Row>
      </div>
    </Card>
  </Col>
));

  class Dodatki extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }
 
  render()
  {
  
      return (

    <div className="">
      <br />
      <br />
      <br />
      <br />
      <h3 className="center orange-text">More than Houses</h3>
      <Divider/>
      <br/>
      <Row>{cardsArrayen}</Row>
    </div>
  );

};
};
export default Dodatki;

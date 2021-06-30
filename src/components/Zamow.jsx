import "materialize-css";
import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Collapsible,
  CollapsibleItem,
  Divider,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-materialize";
import Resources from "./Resources";
import QHouseflatandpitched from "../SVG/QHouseflatandpitched.svg";

import QHouseSRzut from "../SVG/QHouseSRzut.svg";
import QHouseMRzut from "../SVG/QHouseMRzut.svg";
import QHouseLRzut from "../SVG/QHouseLRzut.svg";
import QHouseM2Rzut from "../SVG/QHouseM2Rzut.svg";

import QHouseMaterials from "../SVG/QHouseMaterials.svg";

import FlatWood1 from "../SVG/FlatWood1.png";
import FlatWood2 from "../SVG/FlatWood2.png";
import FlatConcrete from "../SVG/FlatConcrete.png";
import FlatBricks from "../SVG/FlatBricks.png";
import FlatPanels from "../SVG/FlatPanels.png";

import GableWood1 from "../SVG/GableWood1.png";
import GableWood2 from "../SVG/GableWood2.png";
import GableConcrete from "../SVG/GableConcrete.png";
import GableBricks from "../SVG/GableBricks.png";
import GablePanels from "../SVG/GablePanels.png";

import QHouseSwimmingPool from "../SVG/QHouseSwimmingPool.svg";
import QHouseGarageFlat from "../SVG/QHouseGarageFlat.svg";
import QHouseGaragePitched from "../SVG/QHouseGaragePitched.svg";
import QHouseGreenhouse from "../SVG/QHouseGreenhouse.svg";
import QHouseKitchen from "../SVG/QHouseKitchen.svg";
import QHouseShedFlat from "../SVG/QHouseShedFlat.svg";
import QHouseShedPitched from "../SVG/QHouseShedPitched.svg";
import QHouseSauna from "../SVG/QHouseSauna.svg";
import QHouseArchitect from "../SVG/QHouseArchitect.svg";
import QHouseInterrior from "../SVG/QHouseInterrior.svg";
import QHouse35ARzut from "../SVG/QHouse35ARzuty.svg";
import QHouse35BRzut from "../SVG/QHouse35BRzuty.svg";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a1wwmva",
      "template_jnm4g0d",
      e.target,
      "user_x9kPpW1JmhYVbwVWmxAVD"
    )
    .then(
      window.location.reload(false)
      // (result) => {
      //   console.log(result.text);
      // },
      // (error) => {
      //   console.log(error.text);
      //}
    )
    
    ;
}

class Zamow extends Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
      cladding: QHouseMaterials,
      name: "",
      location: "",
      email: "",
      phonenumber: "",
      date: "",
      size: "S",
      sizePrice: 499500,
      roof: "",
      cameras: "",
      camerasPrice: 0,
      roofFactor: 1,
      roofPrice: 0,
      walls: "",
      wallsFactor: 1,
      wallsPrice: 0,
      pool: "",
      poolPrice: 0,
      rekuperacja: "",
      rekuperacjaPrice: 0,
      garagepitched: "",
      garagepitchedPrice: 0,
      garage: "",
      garagePrice: 0,
      shed: "",
      shedPrice: 0,
      kitchen: "",
      kitchenPrice: 0,
      sauna: "",
      saunaPrice: 0,
      greenhouse: "",
      greenhousePrice: 0,
      wnetrza: "",
      wnetrzaPrice: 0,
      pozwolenie: "",
      pozwoleniePrice: 0,
      ordermsg: null,
    };
  }
  submitHandler = (event) => {
    let msg = [
      this.state.shed,
      this.state.garage,
      this.state.garagepitched,
      this.state.greenhouse,
      this.state.walls,
      this.state.pool,
      this.state.kitchen,
      this.state.pozwolenie,
      this.state.wnetrza,
      this.state.sauna,
    ];
    this.setState({ ordermsg: msg });
  };

  myChangeHandler = (event) => {
    let zmienna = event.target.value;
    let roof = this.state.roof;
    this.setState({ [event.target.name]: event.target.value });

    if (zmienna === "S") {
      return this.setState({
        sizePrice: 499500,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Gable",
      });
    } else if (zmienna === "M") {
      return this.setState({
        sizePrice: 550000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Gable",
      });
    }
    if (zmienna === "M2") {
      return this.setState({
        sizePrice: 600000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Gable",
      });
    } else if (zmienna === "L") {
      return this.setState({
        sizePrice: 600000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Gable",
      });
    } else if (zmienna === "L2") {
      return this.setState({
        sizePrice: 650000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Gable",
      });
    } else if (zmienna === "F") {
      return this.setState({
        sizePrice: 420000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Flat",
      });
    } else if (zmienna === "A") {
      return this.setState({
        sizePrice: 160000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Flat",
      });
    } else if (zmienna === "B") {
      return this.setState({
        sizePrice: 160000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Flat",
      });
    } else if (zmienna === "Micro") {
      return this.setState({
        sizePrice: 90000,
        roofPrice: this.state.roofFactor * 110,
        wallsPrice: this.state.wallsFactor * 110,
        roof: "Flat",
      });
    } else if (zmienna === "Wood1" && roof === "Gable") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: GableWood1,
      });
    } else if (zmienna === "Wood1" && roof === "Flat") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: FlatWood1,
      });
    } else if (zmienna === "Wood2" && roof === "Gable") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: GableWood2,
      });
    } else if (zmienna === "Wood2" && roof === "Flat") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: FlatWood2,
      });
    } else if (zmienna === "Concrete" && roof === "Gable") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: GableConcrete,
      });
    } else if (zmienna === "Concrete" && roof === "Flat") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: FlatConcrete,
      });
    } else if (zmienna === "Bricks" && roof === "Gable") {
      return this.setState({
        wallsPrice: 50 * this.state.size,
        cladding: GableBricks,
      });
    } else if (zmienna === "Bricks" && roof === "Flat") {
      return this.setState({
        wallsFactor: 50,
        wallsPrice: 50 * this.state.size,
        cladding: FlatBricks,
      });
    } else if (zmienna === "Panels" && roof === "Gable") {
      return this.setState({
        wallsFactor: 50,
        wallsPrice: 50 * this.state.size,
        cladding: GablePanels,
      });
    } else if (zmienna === "Panels" && roof === "Flat") {
      return this.setState({
        wallsFactor: 50,
        wallsPrice: 50 * this.state.size,
        cladding: FlatPanels,
      });
    } else if (zmienna === "brak basenu") {
      return this.setState({ poolPrice: 0 });
    } else if (zmienna === "basen") {
      return this.setState({ poolPrice: 30000 });
    } else if (zmienna === "bez kuchni") {
      return this.setState({ kitchenPrice: 0 });
    } else if (zmienna === "kuchnia") {
      return this.setState({ kitchenPrice: 30000 });
    } else if (zmienna === "bez garazu") {
      return this.setState({ garagePrice: 0 });
    } else if (zmienna === "garaz") {
      return this.setState({ garagePrice: 50000 });
    } else if (zmienna === "bez garazu") {
      return this.setState({ garagepitchedPrice: 0 });
    } else if (zmienna === "garaz dwuspadowy") {
      return this.setState({ garagepitchedPrice: 45000 });
    } else if (zmienna === "bez garazu dwuspadowego") {
      return this.setState({ saunaPrice: 0 });
    } else if (zmienna === "sauna") {
      return this.setState({ saunaPrice: 20000 });
    } else if (zmienna === "bez sauny") {
      return this.setState({ saunaPrice: 0 });
    } else if (zmienna === "bez szklarni") {
      return this.setState({ greenhousePrice: 0 });
    } else if (zmienna === "szklarnia") {
      return this.setState({ greenhousePrice: 5000 });
    } else if (zmienna === "bez wiaty") {
      return this.setState({ shedPrice: 0 });
    } else if (zmienna === "wiata") {
      return this.setState({ shedPrice: 10000 });
    } 
    // else if (zmienna === "pozwolenie") {
    //   return this.setState({ shedPrice: 3000 });
    // } else if (zmienna === "wnetrza") {
    //   return this.setState({ shedPrice: 0 });
    // }
  };

  render() {
   
      return (
<div className = "marginTop">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <form>
            <Row>
              {this.state.ordersmg}
              <Card className = "">
                <Row>
                  <Col m = {8} s = {12} push = "">
                    <div className = "">
                      <h3> ❶ Contact Details </h3>
                      <div className = "">
                        <br />
                        <Row>
                          <Col s = {12} m = {6}>
                            <div className = "input-field col s9">
                              <input
                                type = "text"
                                name = "name"
                                onChange = {this.myChangeHandler}
                              />
                              <label for = "name"> ✒ Your name </label>
                            </div>
                          </Col>
                          <Col s = {12} m = {6}>
                            <div className = "input-field col s9">
                              <input
                                id = "text"
                                type = "text"
                                name = "location"
                                className = "validate"
                                onChange = {this.myChangeHandler}
                              />
                              <label for = "text"> ➴ Location </label>
                            </div>
                          </Col>

                          <Col s = {12} m = {6}>
                            <div className = "input-field col s9">
                              <input
                                id = "email"
                                type = "email"
                                className = "validate"
                              />
                              <label for = "email"> ✉ Email </label>
                            </div>
                          </Col>
                          <Col s = {12} m = {6}>
                            <div className = "input-field col s9">
                              <input
                                id = "phone"
                                type = "tel"
                                className = "validate"
                                name = "phonenumber"
                                onChange = {this.myChangeHandler}
                              />
                              <label for = "phone"> ☎ Phone Number </label>
                            </div>
                          </Col>
                          <Col m = {6}>
                            <div className = "input-field col s9">
                              <input
                                id = "email"
                                type = "email"
                                className = "validate"
                                name = "email"
                                onChange = {this.myChangeHandler}
                              />
                              <label for = "email"> ✉ Your Email </label>
                            </div>
                          </Col>
                          <Col s = {12} m = {6}>
                            <div className = "input-field col s9">
                              <input
                                id = "date"
                                type = "text"
                                className = "validate"
                                name = "date"
                                onChange = {this.myChangeHandler}
                              />
                              <label for = "date"> Investment date </label>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      {/* {/ * second tabs starts here * /} */}
                      <h3> ❷ Home Configuration </h3>

                      <div>
                        <Row>
                          <Divider />
                          <Col m = {4} s = {12}>
                            <div className = "input-field z-depth-1">
                              <select
                                value = {this.state.size}
                                className = "browser-default"
                                type = "text"
                                name = "size"
                                onChange = {this.myChangeHandler}
                              >
                                <option disabled value = "" data-icon = "">
                                  Choose version:
                                </option>
                                <option value = "S" data-icon = "">
                                  S.
                                </option>
                                <option value = "M" data-icon = "">
                                  M.
                                </option>
                                <option value = "M2" data-icon = "">
                                  M-2 premises</option>
                                <option value = "L" data-icon = "">
                                  L.
                                </option>
                                <option value = "L2" data-icon = "">
                                  L-2 premises
                                </option>
                                <option value = "F" data-icon = "">
                                  Flat
                                </option>
                                <option value = "A" data-icon = "">
                                  35A
                                </option>
                                <option value = "B" data-icon = "">
                                  35B
                                </option>
                                <option value = "Micro" data-icon = "">
                                  Micro
                                </option>
                              </select>
                            </div>
                            <img src = {QHouseflatandpitched} width = "100%" />
                          </Col>
                          <Col m = {6} s = {12} push = "m1">
                            <Row />
                            <Collapsible accordion>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q S"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouseSRzut} width = "100%" />
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q M"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouseMRzut} width = "100%" />
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q M2"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouseM2Rzut} width = "100%" />
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q L"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouseLRzut} width = "100%" /> {""}
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q 35A"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouse35ARzut} width = "100%" /> {""}
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "House_Q 35B"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                <img src = {QHouse35BRzut} width = "100%" /> {""}
                              </CollapsibleItem>
                            </Collapsible>
                          </Col>
                        </Row>

                        <Row>
                          <Divider />
                          <Col m = {4}>
                            <div className = "input-field z-depth-1">
                              <select
                                value = {this.state.walls}
                                className = "browser-default"
                                type = "text"
                                name = "walls"
                                onChange = {this.myChangeHandler}
                              >
                                <option disabled value = "" data-icon = "">
                                  Choose exterior wall finish:
                                </option>
                                <option value = "Wood1" data-icon = "">
                                  Wood option A
                                </option>
                                <option value = "Wood2" data-icon = "">
                                  Wood option B
                                </option>
                                <option value = "Concrete" data-icon = "">
                                  Plates
                                </option><option value = "Panels" data-icon = "">
                                  Plate
                                </option>
                                <option value = "Bricks" data-icon = "">
                                  Brick
                                </option>
                              </select>
                            </div>

                            <img src = {this.state.cladding} width = "100%" />
                          </Col>
                          <Col m = {6} s = {12} push = "m1">
                            <Row />
                            <Collapsible accordion>
                              <CollapsibleItem
                                expanded = {false}
                                header = "Plate"
                                // icon = {<Icon> filter_drama </Icon>}
                                node = "div"
                              >
                                                                <img src = "https://www.ruukki.com/images/default-source/b2b/product-images/sandwich-panels/mw-panels/spb_wei_02.tmb-768v.png?Culture=pl&sfvrsn=bc845085_11" alt = "" width = "100%" />

                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "Brick"
                                // icon = {<Icon> place </Icon>}
                                node = "div"
                              >
    <img src = "https://www.archispace.pl/public/objdata/938/938865/thumb.jpg" alt = "" width = "100%" />

                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "Concrete"
                                // icon = {<Icon> whatshot </Icon>}
                                node = "div"
                              >
                             <img src = "https://lh3.googleusercontent.com/proxy/qv9MDrem1s8B9Vyjkbivc4HJAcaGRCn6xwlJ0VSvtTtoOh5HTHmnxZdjiOnx-8W2catbTl5JLn2QxGdT7uq8OCFL7wzzJI5b4JWnvohRJHrDZ6Mqp3EcJRzOwTL4KvdSz3U" alt = "" width = "100%" />
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "Boards 1"
                                // icon = {<Icon> whatshot </Icon>}
                                node = "div"
                              >
                                 <img src = "https://hurtownia-drewna.com/wp-content/uploads/2018/10/14x116-Modzrew-Syberyjski-MINI.jpg" alt = "" width = "100%" />
                              </CollapsibleItem>
                              <CollapsibleItem
                                expanded = {false}
                                header = "Boards 2"
                                // icon = {<Icon> whatshot </Icon>}
                                node = "div"
                              >
                                    <img src = "https://hurtownia-drewna.com/wp-content/uploads/2018/10/125x96-%C5%9Awierk-Skandynawski-Softline-MINI.jpg" alt = "" width = "100%" />
                              </CollapsibleItem>
                             
                            </Collapsible>
                          </Col>
                        </Row>
                      </div>

                      {/* {/ * here is 3 tab * /} */}

                      <h3> ❸ Additional options </h3>
                      <Divider />
                      <Row>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.pool}
                              className = "browser-default"
                              type = "text"
                              name = "pool"
                              onChange = {this.myChangeHandler}
                            >
                              <option disable value = "" data-icon = "">
                                German pool
                              </option>
                              <option value = "no pool" data-icon = "">
                                No
                              </option>
                              <option value = "pool" data-icon = "">
                                Yes
                              </option>
                            </select>
                            <img src = {QHouseSwimmingPool} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.garage}
                              className = "browser-default"
                              type = "text"
                              name = "garage"
                              onChange = {this.myChangeHandler}>
                              <option disabled value = "" data-icon = "">
                                Flat roof garage
                              </option>
                              <option value = "no garage" data-icon = "">
                                No
                              </option>
                              <option value = "garaz" data-icon = "">
                                Yes
                              </option>
                            </select>
                            <img src = {QHouseGarageFlat} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.garagepitched}
                              className = "browser-default"
                              type = "text"
                              name = "garagepitched"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                Gable roof garage
                              </option>
                              <option value = "double pitched garage" data-icon = "">
                                Yes
                              </option>
                              <option
                                value = "without double pitched garage"
                                data-icon = ""
                              >
                                No
                              </option>
                            </select>
                            <img src = {QHouseGaragePitched} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.shed}
                              className = "browser-default"
                              type = "text"
                              name = "shed"
                              onChange = {this.myChangeHandler}
                            >
                              <option disable value = "" data-icon = "">
                                Shed
                              </option>
                              <option value = "without shelter" data-icon = "">
                                No
                              </option>
                              <option value = "world" data-icon = "">
                                Yes
                              </option>
                            </select>
                            <img src = {QHouseShedPitched} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.shed}
                              className = "browser-default"
                              type = "text"
                              name = "shed"
                              onChange = {this.myChangeHandler}
                            >
                              <option disable value = "" data-icon = "">
                                Shed
                              </option>
                              <option value = "without shelter" data-icon = "">
                                No
                              </option>
                              <option value = "world" data-icon = "">
                                Yes
                              </option>
                            </select>
                            <img src = {QHouseShedFlat} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.kitchen}
                              className = "browser-default"
                              type = "text"
                              name = "kitchen"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                Field kitchen
                              </option>
                              <option value = "no kitchen" data-icon = "">
                                No
                              </option>
                              <option value = "kitchen" data-icon = "">
                                Yes
                              </option>
                            </select>
                            <img src = {QHouseKitchen} width = "100%" />
                          </div></Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.sauna}
                              className = "browser-default"
                              type = "text"
                              name = "sauna"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                Sauna
                              </option>
                              <option value = "sauna" data-icon = "">
                                Yes
                              </option>
                              <option value = "without sauna" data-icon = "">
                                No
                              </option>
                            </select>
                            <img src = {QHouseSauna} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.greenhouse}
                              className = "browser-default"
                              type = "text"
                              name = "greenhouse"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                Greenhouse
                              </option>
                              <option value = "greenhouse" data-icon = "">
                                Yes
                              </option>
                              <option value = "no greenhouse" data-icon = "">
                                No
                              </option>
                            </select>
                            <img src = {QHouseGreenhouse} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.cameras}
                              className = "browser-default"
                              type = "text"
                              name = "cameras"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                CCTV
                              </option>
                              <option value = "CCTV" data-icon = "">
                                Yes
                              </option>
                              <option value = "no CCTV" data-icon = "">
                                No
                              </option>
                            </select>
                            <img
                              src = "https://www.clipartkey.com/mpngs/m/49-494270_clip-art-security-camera-drawing-cctv-camera-clipart.png"
                              width = "100%"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <h3> ❹ Services </h3>
                        <Divider />
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.allow}
                              className = "browser-default"
                              type = "text"
                              name = "greenhouse"
                              onChange = {this.myChangeHandler}
                            >
                              <option disabled value = "" data-icon = "">
                                Adaptation of the project to the plot
                              </option>
                              <option value = "permission" data-icon = "">
                                Yes
                              </option>
                              <option value = "without permission" data-icon = "">
                                No
                              </option>
                            </select>
                            <img src = {QHouseArchitect} width = "100%" />
                          </div>
                        </Col>
                        <Col m = {3} s = {6} push = "">
                          <div className = "input-field z-depth-1">
                            <select
                              value = {this.state.wnetrza}
                              className = "browser-default"
                              type = "text"
                              name = "greenhouse"
                              onChange = {this.myChangeHandler}
                              >
                                <option disabled value = "" data-icon = "">
                                  Interiors
                                </option>
                                <option value = "interiors" data-icon = "">
                                  Yes
                                </option>
                                <option value = "no insides" data-icon = "">
                                  No
                                </option>
                              </select>
                              <img src = {QHouseInterrior} width = "100%" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Col s = {12}>
                     
                        <div className = "hide-on-large-only">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <h3> Hello, {this.state.name} </h3>
                          <table>
                            <tr>
                              <td> Estimated SUM (gross) </td>
  
                              <td>
                                {this.state.sizePrice +
                                  this.state.roofPrice +
                                  this.state.poolPrice +
                                  this.state.wallsPrice +
                                  this.state.garagePrice +
                                  this.state.shedPrice +
                                  this.state.greenhousePrice +
                                  this.state.saunaPrice +
                                  this.state.kitchenPrice +
                                  this.state.permissionPrice +
                                  this.state.wnetrzaPrice}
                                PLN
                              </td>
  
                              <td> + Transport </td>
                            </tr>
                          </table>
                          <br />
                          <div className = "center">
                            <Modal
                              actions = {[
                                <Button
                                  flat
                                  modal = "close"
                                  node = "button"
                                  waves = "green"
                                >
                                  Close
                                </Button>,
                              ]}
                              bottomSheet = {false}
                              fixedFooter = {false}
                              header = "Summary"
                              id = "Modal-1"
                              open = {false}
                              options = {{
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
                              trigger = {
                                <Button
                                  className = "white black-text"
                                  node = "button"
                                >
                                  Send an inquiry
                                </Button>
                              }
                            >
                            
                            </Modal>
                          </div>
                        </div>
                      </Col>
                    </Col>
  
                    {/* {/ * Order page * /} */}
                    <div className = "white-text">
                      <Col l = {4} m = {12}>
                        <Card className = "orangealpfa2">
                          <h3> Hello, {this.state.name} </h3>
                          <table>
                            <tr>
                              <td> Estimated SUM (gross) </td>
  
                              <td>
                                {this.state.sizePrice +
                                  this.state.roofPrice +
                                  this.state.poolPrice +
                                  this.state.wallsPrice +
                                  this.state.garagePrice +
                                  this.state.shedPrice +
                                  this.state.greenhousePrice +
                                  this.state.saunaPrice +
                                  this.state.kitchenPrice +
                                  this.state.permissionPrice +
                                  this.state.wnetrzaPrice}
                                PLN
                              </td>
  
                              <td> + Transport </ td>
                          </tr>
                        </table>
                        <br />

                        <div className = "center">
                          <Modal
                            actions = {[
                              <Button
                                flat
                                modal = "close"
                                node = "button"
                                waves = "green"
                              >
                                Close
                              </Button>,
                            ]}
                            bottomSheet = {false}
                            fixedFooter = {false}
                            header = "Summary"
                            id = "Modal-1"
                            open = {false}
                            options = {{
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
                            trigger = {
                              <Button
                                className = "white black-text"
                                node = "button"
                                onClick = {this.submitHandler}
                              >
                                Send an inquiry
                              </Button>
                            }
                          >
                            <form className = "contact-form center" onSubmit = {sendEmail}>
                              <label> Ordering Party </label>
                              <input
                              className = "gray-text"
                                type = "text"
                                name = "user_name"
                                value = {["✒", this.state.name, "✉", this.state.email, "☎", this.state.phonenumber]}
                              />
                             
                              <label> Please send me an offer on: </label>
                              <textarea
                              className = "gray-text"
                                name = "message"
                                value = {[
                                  "☗ Selected house",
                                  this.state.size,
                                  "⚏ Selected finishing of external walls",
                                  this.state.walls,
                                  "✚ Selected add-ons",
                                  this.state.shed,
                                  this.state.garage,
                                  this.state.garagepitched,
                                  this.state.greenhouse,
                                  this.state.pool,
                                  this.state.kitchen,
                                  this.state.allowing,
                                  this.state.wnetrza,
                                  this.state.sauna,
                                  "/ Lokalziacja investment -", this.state.location,
                                  "/ Approximate term of investment -", this.state.date
                                ]}
                              />
                               <label className = "black-text center">
                                 <h5> A place for your message for us, we will be happy to answer your questions. </h5> </label>
                              
                              <textarea
                                name = "user_email"
                               
                              />

                              <input className = "orange btn-large white-text" type = "submit" value = "Send" />
                            </form>
                          </Modal>
                        </div>
                      </Card>

                         <Card className = "orangealpfa3">
                        <tbody>
                          <tr>
                            <td>
                              Base package {""}
                              <Modal
                                actions = {[
                                  <Button
                                    flat
                                    modal = "close"
                                    node = "button"
                                    waves = "green"
                                  >
                                    Close
                                  </Button>,
                                ]}
                                bottomSheet = {false}
                                fixedFooter = {false}
                                header = "Base Package"
                                id = "Modal-0"
                                open = {false}
                                options = {{
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
                                trigger = {
                                  <Button className = "gray" node = "button">
                                    Info
                                  </Button>
                                }
                              >
                                <h5> Base package: </h5>
                                <li> construction project </li>
                                typical / repetitive
                                <li>
                                  {""}
                                  supervision by the construction manager and conducting
                                  construction log {""}
                                </li>
                                <li>
                                  {""}
                                  bringing the building to the developer's state
                                  according to the Q_House executive standard, along with
                                  internal installations included - cost
                                  labor and materials with transport to
                                  construction site{" "}
                                </li>
                                <li> Solar Panels with assembly for HouseQ S, M, L, F </li>
                                <li> Floor heating with assembly for HouseQ S, M, L, F </li>
                                <li> Heat Pump with assembly for HouseQ S, M, L, F </li>
                                <li> Micropile foundations for HouseQ S, M, L, F </li>
                                <li> Wood deck </li>
                                <li> Window joinery </li>
                                <li>
                                  {""}
                                  backbone technology, prefabricated {""}
                                </li>
                                <li>
                                  {""}
                                  KVH timber, sandwich panels, plasterboards for HouseQ S, M, L, F {""}
                                </li>
                                <li>
                                  {""}
                                  accommodation and transport of workers
                                  participating in the construction process {""}
                                </li>
                                <li> sanitary facilities at the construction site </li>
                                <li>
                                  terrace and roof over the terrace are finished
                                  with wood - Scandinavian spruce, twice
                                  oiled Flügger U-605 for HouseQ S, M, L, F
                                </li>
                                <li>
                                  {""}
                                  electrical points for HouseQ S, M, L, F
                                </li>
                                
                                <li> lightning protection </li>
                                <li>
                                  assembly of electrical equipment and the board
                                  dashboard for HouseQ S, M, L, F
                                </li>
                                <li>
                                  installation resistance and fault loop measurements for HouseQ S, M, L, F
                                </li>
                                <li>
                                  water: installation of PP pipes distributed in
                                  separate installation space to
                                  pickup points, bringing to the contour
                                  foundations, pressure test, without
                                  metering connections for HouseQ S, M, L, F
                                </li>
                                <li>
                                  sewerage: pipe distribution
                                  PVC sewerage to collection points,
                                  bringing to the outline of the foundations for HouseQ S, M, L, F
                                </li>
                                <li>recuperation central unit together with
                                  distribution of ventilation ducts,
                                  white diffusers for HouseQ S, M, L, F
                                </li>
                              </Modal>
                            </td>
                            <td> </td>
                            <td> 0 PLN </td>
                          </tr>
                          <tr>
                            <td> Version </td>
                            <td> House_Q {this.state.size} </td>
                            <td> {this.state.sizePrice} PLN </td>
                          </tr>
                         
                          <tr>
                            <td> Finishing of external walls </td>
                            <td> {this.state.walls} </td>
                            <td> {this.state.wallsPrice} PLN </td>
                          </tr>
                          <tr>
                            <td> Pool </td>
                            <td> {this.state.pool} </td>
                            <td> {this.state.poolPrice} PLN </td>
                          </tr>

                          <tr>
                            <td> Gable garage </td>
                            <td> {this.state.garagepitched} </td>
                            <td> {this.state.garagepitchedPrice} PLN </td>
                          </tr>
                          <tr>
                            <td> Flat garage </td>
                            <td> {this.state.garage} </td>
                            <td> {this.state.garagePrice} PLN </td>
                          </tr>
                          <tr>
                            <td> World </td>
                            <td> {this.state.shed} </td>
                            <td> {this.state.shedPrice} PLN </td>
                          </tr>

                          <tr>
                            <td> Field Kitchen </td>
                            <td> {this.state.kitchen} </td>
                            <td> {this.state.kitchenPrice} PLN </td>
                          </tr>
                          <tr>
                            <td> Sauna </td>
                            <td> {this.state.sauna} </td>
                            <td> {this.state.saunaPrice} PLN </td>
                          </tr>
                          <tr>
                          <td> The presented price offer is informative and does not constitute a commercial offer within the meaning of Article 66 paragraph 1 of the Civil Code. </td>

                      </tr>

                          <br />
                        </tbody>
                      </Card>
                </Col>
                  </div>
                </Row>
              </Card>
            </Row>
          </form>
        </div>



   );
   
  }
}

export default Zamow;

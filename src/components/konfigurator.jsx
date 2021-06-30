import "materialize-css";
import React, { Component } from "react";
import {
  Button,


  Card,







  Carousel, Col,






  Modal, Row
} from "react-materialize";


   
class Wyszukiwarka extends Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
      search: null,
      site: "Lake",
      size: "140m2",
      roof: "Blacha",
      wall: "Aluminium",
      view: "Front",
      scenery: "Summer",

      idtoshow:
        "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/Lake140m2BlachaAluminiumSummerFront.png",
      www:
        "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/",
      extension: ".png",
    };
  }

  OnClinkSearchSize = (event, id) => {
    this.setState({ size: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };
  sitePick = (event, id) => {
    this.setState({ site: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };
  OnClinkSearchWall = (event, id) => {
    this.setState({ wall: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };
  OnClinkSearchRoof = (event, id) => {
    this.setState({ roof: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };
  OnClinkSearchView = (event, id) => {
    this.setState({ view: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };
  OnClinkSearchScenery = (event, id) => {
    this.setState({ scenery: id });
    this.setState({
      idtoshow:
        this.state.www +
        this.state.site +
        this.state.size +
        this.state.roof +
        this.state.wall +
        this.state.scenery +
        this.state.view +
        this.state.extension,
    });
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.lang == "en")
      return (
      <div>
        <Row>
          <Col m={7} s={12} push="">
            <div>
              <img
                className="obrazkiKonfigurator"
                src={this.state.idtoshow}
                alt=""
                width="100%"
              />
              {/* <h5>{this.state.idtoshow}</h5> */}
            </div>
          </Col>

          <Col m={4} s={12} push="m1">
            <Row>
              <Col m={6} s={12}>
                {/* site */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Lake")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1439066290691-510066268af5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
                          alt=""
                          width="100%"
                        /><h5>Lake</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Forest")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Forest</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Beach")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Beach</h5>
                      </button>{" "}
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Mountains")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Mountains</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Fields")}
                      >
                        {" "}
                      
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        />  <h5>Fields</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
                {/* size */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "140m2")}
                      >
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /> <h5>140m2</h5>{" "}
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "120m2")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /> <h5>120m2</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "100m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /><h5>100m2</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>

              <Col m={6} s={12}>
                {/* scenery */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Summer")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1560564029-6eb181a872c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Summer</h5>
                      </button>{" "}
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Spring")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        /> <h5 className="center"> Spring</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Autumn")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1507783548227-544c3b8fc065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Autumn</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Winter")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5 className="center"> Winter</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Night")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Night</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
                {/* view */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Front")}
                      >
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/FrontIcon.png"
                          alt=""
                          width="100%"
                        /> <h5>Elewacja Frontowa</h5>{" "}
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Side")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/SideIcon.png"
                          alt=""
                          width="100%"
                        /><h5>Elewacja Boczna</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Back")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/BackIcon.png"
                          alt=""
                          width="100%"
                        /> <h5>Elewacja Tylnia</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>
              {/* wall */}
              <Col m={6} s={12}>
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Aluminium")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1584464595532-de3ef71d11e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                          alt=""
                          width="100%"
                        /><h5>Ściana z Aluminium</h5>
                      </button>
                    </div>

                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Drewno")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1547998872-71a44f061d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          alt=""
                          width="100%"
                        /><h5>Ściana z Drewna</h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Drewno2")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Ściana z Drewna</h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Kamien")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1589562733209-fab72552a40b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Ściana z Kamienia</h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Blacha Eco")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1521911589143-88a221d6087c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Ściana z Odzysku</h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Cegla")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1547056961-3c25e9140b05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /><h5>Ściana z Cegły</h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Beton")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /><h5>Ściana z Betonu</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>
              {/* roof */}
              <Col m={6} s={12}>
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "Blacha")}
                      >
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.homedepot-static.com/productImages/72ce8030-760d-4135-bb37-6552dce92e3d/svn/gibraltar-building-products-metal-roofing-13513-64_1000.jpg"
                          alt=""
                          width="100%"
                        /><h5>Dach z Blachy</h5>{" "}
                      </button>
                      
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "120m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://www.craft-products.com/prodimages/IMG_3524.jpg"
                          alt=""
                          width="100%"
                        /><h5>Dach z Łupku</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "140m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://media.istockphoto.com/photos/roof-tiles-picture-id1005276114?k=6&m=1005276114&s=170667a&w=0&h=OUT5m9xhTefKrGGyHcmKVbBIFBJz4XTSgO_4QX0bLYY="
                          alt=""
                          width="100%"
                        /><h5>Dach z Dachówki</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>{" "}
              </Col>
              <div className="center">
                <Modal
                  actions={[
                    <Button flat modal="close" node="button" waves="green">
                      Close
                    </Button>,
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Wyślij zapytanie ofertowe"
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
                    <Button className="orderButton" node="button">
                      {" "}
                      <h2 className="black-text">Zamów !</h2>
                    </Button>
                  }
                >
                  <form>
                    <p>Wbrałeś dom o powierzchni {this.state.size}</p>
                    <p>Wbrałeś poszycie dachu: {this.state.roof}</p>
                    <p>
                      Wbrałeś wykonczenie ścian zewnętrznych:{this.state.wall}
                    </p>
                    <p>orientacyjna cena 1231231231</p>
                    <Row>
                    <Col m={6}>
                    <div class="input-field col s9">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Twóje Imię</label>
                    </div>
                    </Col>
                    <Col m={6}>
                    <div class="input-field col s9">
                      <input id="text" type="text" class="validate" />
                      <label for="text">Lokaizacja Inwestycji</label>
                    </div>
                    </Col></Row>
                    <Row>
                    <Col m={6}>
                    <div class="input-field col s9">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Twój Email</label>
                    </div>
                    </Col>
                    <Col m={6}>
                    <div class="input-field col s9">
                      <input id="number" type="number" class="validate" />
                      <label for="number">Twój numer kontaktowy</label>
                    </div></Col>
                    </Row>
                    <Row>
                      <div className="center">
                    <input className=""
      type="submit" value="Send" />
                    </div></Row>
                  </form>
                </Modal>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
    else
    return (
      <div>
        <Row>
          <Col m={7} s={12} push="">
            <div>
              <img
                className="obrazkiKonfigurator"
                src={this.state.idtoshow}
                alt=""
                width="100%"
              />
              {/* <h5>{this.state.idtoshow}</h5> */}
            </div>
          </Col>

          <Col m={4} s={12} push="m1">
            <Row>
              <Col m={6} s={12}>
                {/* site */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Lake")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1439066290691-510066268af5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
                          alt=""
                          width="100%"
                        /><h5>Lake</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Forest")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Forest</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Beach")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Beach</h5>
                      </button>{" "}
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Mountains")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5>Mountains</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.sitePick(e, "Fields")}
                      >
                        {" "}
                      
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        />  <h5>Fields</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
                {/* size */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "140m2")}
                      >
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /> <h5>140m2</h5>{" "}
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "120m2")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /> <h5>120m2</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchSize(e, "100m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Parthenon-top-view.svg/507px-Parthenon-top-view.svg.png"
                          alt=""
                          width="100%"
                        /><h5>100m2</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>

              <Col m={6} s={12}>
                {/* scenery */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Summer")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1560564029-6eb181a872c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Summer</h5>
                      </button>{" "}
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Spring")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        /> <h5 className="center"> Spring</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Autumn")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1507783548227-544c3b8fc065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Autumn</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Winter")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5 className="center"> Winter</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchScenery(e, "Night")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                          alt=""
                          width="100%"
                        /><h5 className="center"> Night</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
                {/* view */}
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>

                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Front")}
                      >
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/FrontIcon.png"
                          alt=""
                          width="100%"
                        /> <h5>Elewacja Frontowa</h5>{" "}
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Side")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/SideIcon.png"
                          alt=""
                          width="100%"
                        /><h5>Elewacja Boczna</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchView(e, "Back")}
                      >
                        {" "}
                       
                        <img
                          className="imgwyszukiwarka"
                          src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/zdjeciakonfigurator/BackIcon.png"
                          alt=""
                          width="100%"
                        /> <h5>Elewacja Tylnia</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>
              {/* wall */}
              <Col m={6} s={12}>
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-21"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Aluminium")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1584464595532-de3ef71d11e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                          alt=""
                          width="100%"
                        /><h5>Ściana z Aluminium</h5>
                      </button>
                    </div>

                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Drewno")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1547998872-71a44f061d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          alt=""
                          width="100%"
                        /><h5> Wooden Wall </h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Drewno2")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                        /> <h5> Wooden Wall </h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Kamien")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1589562733209-fab72552a40b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          alt=""
                          width="100%"
                        /> <h5> Stone Wall </h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                     
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Blacha Eco")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1521911589143-88a221d6087c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                          alt=""
                          width="100%"
                        /> <h5> Reclaimed Wall </h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Cegla")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1547056961-3c25e9140b05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                          /> <h5> Brick Wall </h5>
                      </button>{" "}
                    </div>
                    <div className="center">
                      
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchWall(e, "Beton")}
                      >
                        {" "}
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                          width="100%"
                          /> <h5> Concrete Wall </h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>
              </Col>
              {/* roof */}
              <Col m={6} s={12}>
                <Card className="optionCard z-depth-3">
                  <div className="center"></div>
                  <Carousel
                    carouselId="Carousel-3"
                    className="optionImg "
                    options={{
                      fullWidth: false,
                      indicators: true,
                    }}
                  >
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "Blacha")}
                      >
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://images.homedepot-static.com/productImages/72ce8030-760d-4135-bb37-6552dce92e3d/svn/gibraltar-building-products-metal-roofing-13513-64_1000.jpg"
                          alt=""
                          width="100%"
                        /><h5>Sheet Roof </h5>{" "}
                      </button>
                      
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "120m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://www.craft-products.com/prodimages/IMG_3524.jpg"
                          alt=""
                          width="100%"
                        /><h5>
                        Slate roof</h5>
                      </button>
                    </div>
                    <div>
                      <button
                        className="imgwyszukiwarka"
                        onClick={(e) => this.OnClinkSearchRoof(e, "140m2")}
                      >
                        {" "}
                        
                        <img
                          className="imgwyszukiwarka"
                          src="https://media.istockphoto.com/photos/roof-tiles-picture-id1005276114?k=6&m=1005276114&s=170667a&w=0&h=OUT5m9xhTefKrGGyHcmKVbBIFBJz4XTSgO_4QX0bLYY="
                          alt=""
                          width="100%"
                        /><h5>Tile roof</h5>
                      </button>
                    </div>
                  </Carousel>
                </Card>{" "}
              </Col>
              <div className="center">
                <Modal
                  actions={[
                    <Button flat modal="close" node="button" waves="green">
                      Close
                    </Button>,
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Wyślij zapytanie ofertowe"
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
                    <Button className="orderButton" node="button">
                      {" "}
                      <h2 className="black-text">Order !</h2>
                    </Button>
                  }
                >
                  <form>
                    <p> You have selected a house with the area of ​​{this.state.size} </p>
                    <p> You have selected a roof cover: {this.state.roof} </p>
                    <p>
                      You have chosen the finish of the outer walls: {this.state.wall}
                    </p>
                    <p> indicative price 1231231231 </p>
                    <Row>
                    <Col m = {6}>
                    <div class = "input-field col s9">
                      <input id = "email" type = "email" class = "validate" />
                      <label for = "email"> Your Name </label>
                    </div>
                    </Col>
                    <Col m = {6}>
                    <div class = "input-field col s9">
                      <input id = "text" type = "text" class = "validate" />
                      <label for = "text"> Investment Location </label>
                    </div>
                    </Col> </Row>
                    <Row>
                    <Col m = {6}>
                    <div class = "input-field col s9">
                      <input id = "email" type = "email" class = "validate" />
                      <label for = "email"> Your Email </label>
                    </div>
                    </Col>
                    <Col m = {6}>
                    <div class = "input-field col s9">
                      <input id = "number" type = "number" class = "validate" />
                      <label for = "number"> Your contact number </label>
                    </div> </Col>
                    </Row>
                    <Row>
                      <div className="center">
                    <input className=""
      type="submit" value="Send" />
                    </div></Row>
                  </form>
                </Modal>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wyszukiwarka;

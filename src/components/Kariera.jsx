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
} from "react-materialize";

import "materialize-css";
import React, { Component } from "react";
import ListaWzor from "./Resources";

class Kariera extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = ListaWzor.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.plname.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.plprodukty
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        data.plopakowania
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        data.rodzaj.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <Button className="btnwyszukiwarka orange hoverable">
            <h5>
              {data.plname}, {data.rodzaj}
            </h5>
            <p1>{data.plprodukty}</p1>
            <p1>{data.plopakowania}</p1>
          </Button>
        </div>
      );
    });

    return (
      <div className="marginTop">

        <Row>
          <Col m={10} s={12} push="m1">
          <Col m={6}>
            <Card className="z-depth-2" >
              <Row>
                <Col m={6} s={12}>
                  <img
                    src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                    width="100%"
                  />
                </Col>
                <Col m={6} s={12}>
                  <h5>Informacje</h5>
                  <p3>
Misją działu HR jest zapewnienie zarządom i pracownikom Grupy CANPACK najwyższej jakości usług w zakresie zarządzania zasobami ludzkimi.

Poszukujemy osób o zróżnicowanych kwalifikacjach – zarówno humanistów, ekonomistów, inżynierów, jak i pracowników na niższe szczeble organizacji. Stawiamy przede wszystkim na ludzi zaangażowanych, niebojących się wyzwań, o rozwiniętych zdolnościach interpersonalnych, potrafiących odnaleźć się w sytuacjach wymagających szybkiej reakcji i kreatywnego rozwiązywania problemów. Z uwagi na międzynarodowy charakter naszej działalności znajomość języków obcych jest kwestią oczywistą.

Jeśli stawiasz na rozwój, chcesz pracować w międzynarodowej firmie, a wymagania są dla Ciebie wyzwaniem, czekamy na Twoją aplikację!

Zachęcamy również do zapoznania się z aktualnymi pozycjami w działach oferty pracy oraz oferty praktyk. </p3>
                </Col>
              </Row>
              <Row>
              <Col m={6} s={12}>
                  <h5>Informacje</h5>
                  <p3>
Misją działu HR jest zapewnienie zarządom i pracownikom Grupy CANPACK najwyższej jakości usług w zakresie zarządzania zasobami ludzkimi.

Poszukujemy osób o zróżnicowanych kwalifikacjach – zarówno humanistów, ekonomistów, inżynierów, jak i pracowników na niższe szczeble organizacji. Stawiamy przede wszystkim na ludzi zaangażowanych, niebojących się wyzwań, o rozwiniętych zdolnościach interpersonalnych, potrafiących odnaleźć się w sytuacjach wymagających szybkiej reakcji i kreatywnego rozwiązywania problemów. Z uwagi na międzynarodowy charakter naszej działalności znajomość języków obcych jest kwestią oczywistą.

Jeśli stawiasz na rozwój, chcesz pracować w międzynarodowej firmie, a wymagania są dla Ciebie wyzwaniem, czekamy na Twoją aplikację!

Zachęcamy również do zapoznania się z aktualnymi pozycjami w działach oferty pracy oraz oferty praktyk. </p3>
                </Col>
                <Col m={6} s={12}>
                  <img
                    src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                    width="100%"
                  />
                </Col>
               
              </Row>
            </Card>{" "}
          </Col>
          <Col m={1} s={0}></Col>
          <Col
          m={5} s={12}>
           <Col m={12} s={12}>
           <Card className="orange klienci z-depth-3">
             <div className="center ">
            <h5 className="white-text">Otwarte Pozycje</h5>
            </div>
            <Divider/>
            </Card>
            </Col>
          <Col m={12}>
            <Card
            className="klienci z-depth-3"
            horizontal
              actions={[
                <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  //header="Tutaj nazwa maszyny"
  id="Modal-01"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  
  trigger={<Button className="orange" node="button">Aplikuj</Button>}
>

            
              <h5 className="center">Aplikuj</h5>
              <Divider />
              <Row></Row><Row></Row><Row></Row>
              <div className="center ">
                <form id="contact-form">
                  
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Imię</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Wiadomość</label>
                    <textarea className="form-control" rows="7"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Twoje CV</label>
                    <textarea className="form-control" rows="7"></textarea>
                  </div>
                  <Row>
                    
                  <Col m={6}>
                  <button type="submit" className="btn orange">
                    Wyślij
                  </button>
                  </Col>
                  <Col m={6}>
                  <a className="btn orange " href="tel:+48123454397">
              zadzwon
            </a></Col></Row>
                </form>
              </div>
            
</Modal>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image="https://static.thenounproject.com/png/192296-200.png" />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <h5>Mechanik</h5>
              <p1>
                Opis stanowiksa: blah blahblah blahblah blahblah blahblah
                blahblah blahblah blahblah blah
              </p1>
              <h5>Wymagania</h5>
              <li>asdasdasd</li>
              <li>asdasdasd</li>
              <li>asdasdasd</li>
              <li>asdasdasd</li>
              <li>asdasdasd</li>
            </Card>
          </Col>
          </Col></Col>
       </Row>
      </div>
    );
  }
}

export default Kariera;

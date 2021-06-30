import React, { Component } from "react";
import { BrowserRouter, Switch, Route, HashRouter as Router } from "react-router-dom";


import Nawigacja from "./components/Nawigacja";
import About from "./components/NasiKlienci";
import "materialize-css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NawigacjaTelefon from "./components/NawigacjaTelefon"; 
import Galeria from "./components/Galeria";
import Kariera from "./components/Kariera";
import Zamow from "./components/Zamow";
import { Footer } from "react-materialize";
import Certyfikaty from "./components/Certyfikaty";
import NaszeRealizacje from "./components/NaszeRealizacje";
import NasiKlienci from "./components/NasiKlienci";
import Kontrahenci from "./components/Kontrahenci";
import System from "./components/System";
import Dodatki from "./components/Dodatki";
import DachPlaski from "./components/Houses.jsx/DachPlaski";
import DachDwuspadowyQ from "./components/Houses.jsx/DachDwuspadowy";
import DachDwuspadowyM from "./components/Houses.jsx/DachDwuspadowyM";
import DachDwuspadowyL from "./components/Houses.jsx/DachDwuspadowyL";
import HouseqMicro from "./components/Houses.jsx/HouseqMicro";
import a35 from "./components/Houses.jsx/DachDwuspadowy35A";
import b35 from "./components/Houses.jsx/DachDwuspadowy35B";
import b70 from "./components/Houses.jsx/DachDwuspadowy70B";

import faq from "./components/faq";
import ReactGA from 'react-ga';
// import withTracker from '..public/withTracker';



ReactGA.initialize('Your Unique ID');
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nawigacja />

          <div className="row" />
          <div className="row">
            <div className="col s12 m12 l12 xl12">
              <Switch>
                {/* ONas = klienci */}
               
                <Route path="/Home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/faq" component={faq} />
                <Route path="/galeria" component={Galeria} />
                <Route path="/kariera" component={Kariera} />
                <Route path="/order" component={Zamow} />
                <Route path="/naszerealizacje" component={NaszeRealizacje} />
                <Route path="/nasiklienci" component={NasiKlienci} />
                <Route path="/certyfikaty" component={Certyfikaty} />
                <Route path="/system" component={System} />
                <Route path="/dachplaski" component={DachPlaski} />
                <Route path="/dachdwuspadowyq" component={DachDwuspadowyQ} />
                <Route path="/dachdwuspadowym" component={DachDwuspadowyM} />
                <Route path="/dachdwuspadowyl" component={DachDwuspadowyL} />
                <Route path="/35a" component={a35} />
                <Route path="/35b" component={b35} />
                <Route path="/70b" component={b70} />
                <Route path="/micro" component={HouseqMicro} />
                <Route path="/kontrahenci" component={Kontrahenci} />
                <Route path="/extras" component={Dodatki} />
                <Route path="/:any" component={Home} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

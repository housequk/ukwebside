import React, { Component } from "react";
import {
  NavItem,
  Navbar,
  Icon,
  Dropdown,
  Divider,
  Button,
  Modal
} from "react-materialize";
import { Redirect } from "react-router-dom";
import "materialize-css";
import globals from "./globals";
import logo from "../SVG/logo.png"
class Nawigacja extends Component {
  constructor() {
    super();


  }

  handleClickEn = () => {
    localStorage.setItem("lang", "en");
    window.location.href = "homeen";
  };
  handleClickPl = () => {
   
    localStorage.setItem("lang", "pl");
    window.location.href = "/homepl";
  };
  render() {
  
      return ( 
        <Navbar
        className="navbarmadejpak"
        alignLinks="right"
        brand={
          <img
            src={logo}
            alt=""
            height="100%"
          />
        }
        //<p1 className="brand-logo black-text ">En PL Madej-Pak</p1>}
        leftLogo
        menuIcon={
          <div className="black-text  ">
            <h5>menu</h5>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" width="90%" alt=""/> */}
          </div>
        }
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <div className="hide-on-med-and-up">
          <img
            src={logo}
            alt=""
            width="100%"
          />
        </div>

      
        <NavItem className=" przycisk_nawigacja " href="home">
          <div className="black-text ">Home</div>
        </NavItem>  <NavItem className=" przycisk_nawigacja " href="system">
          <div className="black-text ">Houses</div>
        </NavItem>{" "}
       
      
        <NavItem className=" przycisk_nawigacja " href="extras">
          <div className="black-text ">Extras</div>
        </NavItem> <NavItem className=" przycisk_nawigacja " href="galeria">
          <div className="black-text">Gallery</div>
        </NavItem>{" "}
        <NavItem className=" przycisk_nawigacja " href="order">
          <div className="black-text">Order</div>
        </NavItem>

        <NavItem className=" przycisk_nawigacja " href="contact"> 
          <div className="black-text">Contact</div>
        </NavItem>
        {/* <NavItem className=" przycisk_nawigacja " href="faq">
          <div className="black-text">FAQ</div>
        </NavItem> */}
        <Modal
actions={[
  <Button className="" flat modal="close" node="button" waves="green">Close</Button>
]}
bottomSheet={false}
fixedFooter={false}
header="  Information clause for clients and contractors.  "
id="Modal-vsv0"
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

trigger={<Button className="przycisk_nawigacja_rodo " node="button">RODO</Button>}
>
<p>
<br/>
<br/> In accordance with the provisions of the Regulation of the European Parliament and of the Council (EU)
<br/> 2016/679 of 27 April 2016 on the protection of natural persons in connection with
<br/> the processing of personal data and on the free movement of such data
<br/> data and repealing Directive 95/46 / EC (general protection regulation
<br/> data) ("GDPR"), we provide the following information regarding your data
<br/> personal.
<br/> Personal data administrator
<br/> The administrator of your personal data is HouseQ sp. z. o. o.
<br/> Purpose and basis of processing
<br/> We process your personal data:
<br/> • for the purpose consistent with the consent granted, provided that consent has been given, pursuant to Art.
<br/> 6 sec. 1 lit. a GDPR;
<br/> • in order to respond to your interest in our offer
<br/> commercial, in accordance with Art. 6 sec. 1 lit. b GDPR;
<br/> • in order to conclude and perform a contract, pursuant to Art. 6 sec. 1 lit. b GDPR;
<br/> • in order to comply with legal obligations, such as those resulting from regulations
<br/> tax, pursuant to Art. 6 sec. 1 lit. c GDPR;
<br/> • in order to pursue our legitimate interests as
<br/> The administrator referred to in art. 6 sec. 1 lit. f GDPR, such as marketing
<br/> direct, investigation or defense against claims.
<br/> Recipients of personal data
<br/> The recipients of your data will be the following entities:
<br/> • entities entrusted with the processing of personal data in our
<br/> on behalf of: IT companies, law firms, audit units, agencies
<br/> protection;
<br/> • entities or bodies authorized by law.
<br/> The period of data storage
<br/> your personal data will be stored:
<br/> • in the case of data processing on the basis of consent - until the consent is withdrawn;
<br/> • in the case of data processing on the basis of the purpose of presenting an offer -
<br/> for the period of contract negotiation and until the end of the calendar year
<br/> following the year in which you last contacted about the matter
<br/> its conclusion;
<br/> • in the case of data processing on the basis of the performance of a contract - up to
<br/> the moment the contract expires;
<br/> • in the case of processing in order to fulfill legal obligations - for the period of
<br/> what current legal regulations require their storage;
<br/> • in the case of data processing based on a legitimate interest
<br/> Administrator - until the end of this interest (e.g. limitation of claims)
<br/> or until an effective objection is raised, against another
<br/> processing by the data subject.
<br/> Rights of data subjects
<br/> According to the GDPR, you are entitled to:
<br/> • the right to access your data and receive a copy of it;
<br/> • the right to rectify (correct) your data;
<br/> • the right to delete data;
<br/> • the right to limit data processing;
<br/> • right to object;
<br/> • the right to lodge a complaint with the President of the Personal Data Protection Office.
<br/> Information on the right to withdraw consent
<br/> In relation to data processed on the basis of consent, we inform that
<br/> consent is each time entirely voluntary, and in the case of it
<br/> expression, you have the right to withdraw it at any time.
<br/> Withdrawal of consent will not affect the lawfulness of the processing
<br/> has been done so far.
<br/> Obligation to provide personal data
<br/> Providing data is voluntary, but necessary if you want to
<br/> enter into a contract with us or receive offers. Providing data on the basis of consent is
<br/> completely voluntary.
<br/> Information on automated decision making and profiling
<br/> In connection with the processing of your personal data, there is no
<br/> automated decision making, including profiling. </p></Modal>

        
        
      </Navbar>
  );
   
  }
}
export default Nawigacja;


import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import "./App.css"

const Bar = () => {
  return (
    <Navbar bg="light" className="justify-content-center">
      <Link className="navbar-link" to={{pathname: "/"}}>Home</Link>
      <Link className="navbar-link" to={{pathname: "/about"}}>About</Link>
      <Link className="navbar-link" to={{pathname: "/organizers"}}>Organizers</Link>
      <Link className="navbar-link" to={{pathname: "/problems"}}>Problems</Link>
      <Link className="navbar-link" to={{pathname: "/faqs"}}>FAQs</Link>
      <Link className="navbar-link" to={{pathname: "/photos"}}>Photos</Link>
    </Navbar>
  ) 
}

export default Bar
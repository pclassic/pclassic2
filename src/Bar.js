import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import "./App.css"

const Bar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/">
      <Navbar.Brand className="mx-auto"
      style={{fontWeight: "100px"}}
      >Philadelphia Classic</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
            <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/organizers">
          <Nav.Link>Organizers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/problems">
          <Nav.Link>Problems</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/parsing">
          <Nav.Link>Parsing</Nav.Link>
          </LinkContainer>
          <NavDropdown title="History">
            <NavDropdown.Item>
            <Link className="navbar-link" to="/history">History</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link className="navbar-link" to="/past-organizers">Past Organizers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link className="navbar-link" to="/past-contests">Past Contests</Link>
            </NavDropdown.Item>
          </NavDropdown>
      </Nav>
      
      </Navbar.Collapse>

      </Container>
    </Navbar>
  ) 
}

export default Bar
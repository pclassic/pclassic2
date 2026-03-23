import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';
import { Heading } from '@chakra-ui/react';

const Bar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/">
      <Navbar.Brand className="mx-auto"
      
      >
        <Heading mt={1} color={"gray"} fontSize="lg" fontWeight={"400"}>Philadelphia Classic</Heading>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/">
            <Nav.Link>
              Home
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/about">
            <Nav.Link>
            About
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/logistics">
            <Nav.Link>
              Logistics
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/problems">
            <Nav.Link>
            Problems
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/parsing">
            <Nav.Link>
              Resources
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/past-contests">
            <Nav.Link>
              Results
            </Nav.Link>
          </LinkContainer>
        </Heading>

        <Heading mt={1} color={"gray"} fontSize="md" fontWeight={"400"}>
          <LinkContainer to="/contact">
            <Nav.Link>
              Contact
            </Nav.Link>
          </LinkContainer>
        </Heading>
          {/*}
          <NavDropdown title="History">
            <NavDropdown.Item>
            <Link className="navbar-link" to="/past-organizers">Past Organizers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link className="navbar-link" to="/past-contests">Past Contests</Link>
            </NavDropdown.Item>
  </NavDropdown>*/}
      </Nav>
      
      </Navbar.Collapse>

      </Container>
    </Navbar>
  ) 
}

export default Bar
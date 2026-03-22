import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from 'react-router-bootstrap';
import { Text, Heading } from '@chakra-ui/react';

import michael from './images/michael.jpg';
import kurtis from "./images/kurtis.png";
import ntarsis from "./images/ntarsis.jpg";

function Organizers() {
  const organizers = [
    {
      photo: michael,
      name: 'Michael Gao',
      coLead: true,
      description:
        "\"I am a junior studying computer science.  I like (in decreasing order of skill) wasting time, video games, badminton, playing piano, and poker.\"",
    },
    {
      photo: kurtis,
      name: 'Kurtis Zhang',
      coLead: true,
      description:
        "Kurtis is a freshman studying Computer Science at UPenn. Outside of school he enjoys skiing, playing piano and watching football.",
    },
    {
      photo: ntarsis,
      name: 'Nicholas Tarsis',
      coLead: true,
      description:
        "\"I bench 315.\"",
    },
    {
      photo: process.env.PUBLIC_URL + '/p.jpg',
      name: 'Shaan Keole',
      description: '',
    },
    {
      photo: process.env.PUBLIC_URL + '/p.jpg',
      name: 'Eric Zou',
      description: '',
    },
    {
      photo: process.env.PUBLIC_URL + '/p.jpg',
      name: 'Pragya Singh',
      description: '',
    },
  ];

  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Meet the Organizers! 👋 </Heading>
      <LinkContainer to="/past-organizers">
        <Nav.Link>
          <u>Past Organizers</u>
        </Nav.Link>
      </LinkContainer>
      <Row xs={1} md={3} className="g-6" style={{ padding: '10px 90px' }}>
        {organizers.map((organizer) => (
          <Col>
            <Card border="light" style={{ padding: '20px', borderRadius: '15px' }}>
              <Card.Img
                style={{ width: '100%', height: '30vw', objectFit: 'cover' }}
                variant="top"
                src={organizer.photo}
              />
              <Card.Body>
                <Card.Title>
                  <Heading fontSize={"lg"} fontWeight={"700"}>{organizer.name}</Heading>
                  {organizer.coLead && <Heading fontSize={"sm"} fontWeight={"400"} color={"#566573"}>Co-Lead</Heading>}
                </Card.Title>
                  <Text color={"#566573"} textAlign={"left"} fontFamily={`'Lato', sans-serif;`}>
                    {organizer.description}
                  </Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Organizers;
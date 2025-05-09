import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from 'react-router-bootstrap';
import { Text, Heading } from '@chakra-ui/react';

import nick from './images/Nick.JPG';
import aaron from './images/Aaron.JPG';
import michael from './images/michael.jpg';
import kevin from './images/kevin.jpg';
import aaronWu from "./images/aaronWu.jpg";
import kurtis from "./images/kurtis.png";
import jason from "./images/jason.png";
import ntarsis from "./images/ntarsis.jpg";

function Organizers() {
  const organizers = [
    {
      photo: michael,
      name: 'Michael Gao (Co-Lead)',
      description:
        "\"I am a junior studying computer science.  I like (in decreasing order of skill) wasting time, video games, badminton, playing piano, and poker.\"",
    },
    {
      photo: kurtis,
      name: 'Kurtis Zhang (Co-Lead)',
      description:
        "Kurtis is a freshman studying Computer Science at UPenn. Outside of school he enjoys skiing, playing piano and watching football.",
    },
    {
      photo: jason,
      name: 'Jason Liu',
      description:
        "\"I do computer science.\"",
    },
    {
      photo: ntarsis,
      name: 'Nicholas Tarsis',
      description:
        "\"I bench 315.\"",
    },
    {
      photo: aaron,
      name: 'Aaron Mei',
      description:
        'Aaron Mei is a CIS major at Penn who enjoys playing video games and thinking about algorithms.',
    },
    {
      photo: nick,
      name: 'Nick Eiffert',
      description:
        'Nicholas Eiffert is a junior studying mathematics and computer science in CAS. He went to Bordentown Regional High School. He is a TA for a data structures and algorithms course at Penn. He likes doing competitive programming, going to concerts, and eating late-night ramen.',
    },
    {
      photo: kevin,
      name: 'Kevin Liu',
      description:
        "Kevin Liu is a sophomore studying CIS. He enjoys sleeping in on the weekends.",
    },
    {
      photo: aaronWu,
      name: 'Aaron Wu',
      description:
      "\"I watch anime.\"",
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
                <Card.Title><Heading fontSize={"lg"} fontWeight={"700"}>{organizer.name}</Heading></Card.Title>
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
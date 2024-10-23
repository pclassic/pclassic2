import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from 'react-router-bootstrap';

import nick from './images/nick.jpg';
import aaron from './images/meiron.jpg';
import michael from './images/michael.jpg';
import hemosoo from './images/hemosoo.jpg';
import kevin from './images/kevin.jpg';
import michaelli from "./images/michaelli.jpg";
import aaronWu from "./images/aaronWu.jpg";
import kurtis from "./images/kurtis.png";
import { Text, Heading } from '@chakra-ui/react';

function Organizers() {
  const organizers = [
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
      photo: hemosoo,
      name: 'Hemosoo Woo',
      description:
        "Hemosoo is a freshman studying computer science at UPenn. In his free time, he enjoys playing sports such as soccer or basketball, hitting the gym, playing chess, and listening to music of all sorts of genres.",
    },
    {
      photo: michael,
      name: 'Michael Gao',
      description:
        "Michael is a sophomore studying CIS.  In his free time, he enjoys playing piano, poker, video games, and wasting time.",
    },
    {
      photo: michaelli,
      name: 'Michael Li',
      description:
        "Michael is a freshman studying CS with a focus in software development and full stack development. He's a UFC fan and always loves seeing an underdog win!",
    },
    {
      photo: aaronWu,
      name: 'Aaron Wu',
      description:
        "I watch anime",
    },
    {
      photo: kurtis,
      name: 'Kurtis Zhang',
      description:
        "Kurtis is a freshman studying Computer Science at UPenn. Outside of school he enjoys skiing, playing piano and watching football.",
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

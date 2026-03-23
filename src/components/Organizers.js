import React from 'react';
import Bar from './Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from 'react-router-bootstrap';
import { Text, Heading, Link } from '@chakra-ui/react';
import organizers from './organizersData.json';

function Organizers() {
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
      <Text color={"#566573"} fontFamily={`'Lato', sans-serif;`} style={{ padding: '0 90px' }}>
        Interested in joining the team? See our{' '}
        <Link href="https://pennclubs.com/club/philadelphia-classic-pclassic/" color="blue.500" isExternal rel="noreferrer noopener nofollow">
          Penn Clubs page
        </Link>
        {' '}for more information.
      </Text>
      <Row xs={1} md={3} className="g-6" style={{ padding: '10px 90px' }}>
        {organizers.map((organizer) => (
          <Col key={organizer.name}>
            <Card border="light" style={{ padding: '20px', borderRadius: '15px' }}>
              <Card.Img
                style={{ width: '100%', height: '30vw', objectFit: 'cover' }}
                variant="top"
                src={process.env.PUBLIC_URL + '/' + organizer.photo}
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

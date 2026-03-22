import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Heading, Text } from '@chakra-ui/react';
import organizers from './pastOrganizersData.json';

function PastOrganizers() {
  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Past Organizers 🧐</Heading>
      <LinkContainer to="/organizers">
        <Nav.Link>
          <u>Current Organizers</u>
        </Nav.Link>
      </LinkContainer>
      <Text fontSize={"sm"} color={"#566573"} style={{ padding: '0 90px' }}>
        If you were an organizer and aren't listed here, please email us at{' '}
        <a href="mailto:organizers@pclassic.org">organizers@pclassic.org</a>.
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
                <Card.Title>{organizer.name}</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  {organizer.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PastOrganizers;

import React from 'react';
import Bar from './Bar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Info from '../pdfs/info.pdf';
import './About.css';
import Floor1 from './images/EngineeringMapF1.png';
import Floor2 from './images/EngineeringMapF2.png';
import Floor3 from './images/EngineeringMapF3.png';
import Carousel from 'react-bootstrap/Carousel';
import { Heading, Text } from '@chakra-ui/react';

function Logistics() {
  return (
    <div>
      <Bar />
      <br />

      <Card className="fade-in" style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Spring 2026 Details</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Contest Date: Saturday, April 25, 2026
          </Text>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Location: University of Pennsylvania Engineering Quad
          </Text>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Each member of your team must fill out the waiver form before the contest. You can find the waiver form below.
          </Text>
        </Card.Text>
      </Card>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Rules and Guidelines (Out of Date)</Heading>
        </Card.Header>
        <Row>
          <Col>
            <iframe style={{ width: '100%', height: '600px' }} title="Info" src={Info}>
              {' '}
            </iframe>
          </Col>
        </Row>
      </Card>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Waiver</Heading>
        </Card.Header>
        <Row>
          <Col>
            <iframe style={{ width: '100%', height: '600px' }} title="Waiver" src={"waiver.pdf"}>
              {' '}
            </iframe>
          </Col>
        </Row>
      </Card>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Maps (Out of Date)</Heading>
        </Card.Header>
        <Carousel width="600px" slide={false} variant="dark">
          <Carousel.Item>
            <img src={Floor1} alt="Floor 1" />
            <Carousel.Caption><h3>Floor 1</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Floor2} alt="Floor 2" />
            <Carousel.Caption><h3>Floor 2</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Floor3} alt="Floor 3" />
            <Carousel.Caption><h3>Floor 3</h3></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card>
    </div>
  );
}

export default Logistics;

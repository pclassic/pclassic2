import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Info from '../pdfs/info.pdf';
import Waiver from '../pdfs/waiver.pdf';
import './About.css';
import FadeInSection from './FadeInSection';
import Floor1 from './images/EngineeringMapF1.png';
import Floor2 from './images/EngineeringMapF2.png';
import Floor3 from './images/EngineeringMapF3.png';
import Carousel from 'react-bootstrap/Carousel';
import { Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <div>
      <Bar />
      <br />

      <Card className="fade-in" style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>👋 Who are we?</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
          The Philadelphia Classic (PClassic) is a semesterly programming competition for high
          school students hosted by PClassic (the club!) at the University of Pennsylvania. Prizes
          and awards are given out to the top scoring teams, and registration for the competition
          is free for all high schools. We will be allowing middle school students to participate
          in the competition as well!

          EMAIL: organizers@pclassic.org
          </Text>
        </Card.Text>
      </Card>

      <Card className="fade-in2" style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>🗓️ PClassic Spring 2024 Details</Heading>
        </Card.Header>
        <Card.Text>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Contest Date: Saturday, April 6, 2024
          </Text>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Location: University of Pennsylvania Engineering Quad
          </Text>
        </Card.Text>
        {/*<Card.Text>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsKTKwYLb-ekhedupwwi8hPE_TpUtvAD55KtdP_FwlzGHCKQ/viewform?usp=sharing">Sign Up</a>
  </Card.Text>*/}
      </Card>

      <FadeInSection key={0}>
        <Card style={{ margin: '50px 120px' }}>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>📐 Rules and Guidelines</Heading>
          <Row>
            {/* off set will middle the col */}
            <Col>
              <iframe style={{ width: '100%', height: '600px' }} src={Info}>
                {' '}
              </iframe>
            </Col>
            {/* <p> Will be released soon! </p> */}
          </Row>
        </Card>
      </FadeInSection>

      <FadeInSection key={1}>
        <Card style={{ margin: '50px 120px' }}>
          <Card.Header className="header">
            <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>👋 Waiver</Heading>
          </Card.Header>

          <Row>
            {/* off set will middle the col */}
            <Col>
              <iframe style={{ width: '100%', height: '600px' }} src={Waiver}>
                {' '}
              </iframe>
            </Col>
            {/* <p> Will be released soon!</p> */}
          </Row>
        </Card>
      </FadeInSection>

      <FadeInSection key={3}>
        <Card style={{margin: '50px 120px'}}>
          <Card.Header className="header"> 🗺 Maps</Card.Header>
          <Carousel width="600px" slide={false} variant="dark">
          <Carousel.Item>
        <img
          src={Floor1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Floor 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Floor2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Floor 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Floor3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Floor 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Card>
      </FadeInSection>
    </div>
  );
}

export default About;

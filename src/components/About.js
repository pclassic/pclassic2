import React, { useState } from 'react';
import Bar from '../Bar';
import person from '../images/person.jpg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats, Text } from '@react-three/drei';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Info from '../pdfs/info.pdf';
import Waiver from '../pdfs/waiver.pdf';
import './About.css';
import FadeInSection from './FadeInSection';
import FAQs from './FAQs';

function About() {
  return (
    <div>
      <Bar />
      <br />

      <Card className="fade-in" style={{ margin: '50px 120px' }}>
        <Card.Header className="header">👋 Who are we?</Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          The Philadelphia Classic (PClassic) is a semesterly programming competition for high
          school students hosted by PClassic (the club!) at the University of Pennsylvania. Prizes
          and awards are given out to the top scoring teams, and registration for the competition
          is free for all high schools. We will be allowing middle school students to participate
          in the competition as well!
        </Card.Text>
      </Card>

      <Card className="fade-in2" style={{ margin: '50px 120px' }}>
        <Card.Header className="header">🗓️ PClassic Spring 2023 Details</Card.Header>
        <Card.Text>Contest Date: Saturday, April 22 2023</Card.Text>
        <Card.Text>Location: University of Pennsylvania Engineering Quad</Card.Text>
        <Card.Text>
          <a href="https://forms.gle/5gLkWEbTeAeTFAnE8">Sign Up</a>
        </Card.Text>
      </Card>
      <FadeInSection key={0}>
        <Card style={{ margin: '50px 120px' }}>
          <Card.Header className="header">📐 Rules and Guidelines</Card.Header>

          <Row>
            {/* off set will middle the col */}
            <Col>
              <iframe style={{ width: '100%', height: '600px' }} src={Info}>
                {' '}
              </iframe>
            </Col>
          </Row>
        </Card>
      </FadeInSection>

      <FadeInSection key={1}>
        <Card style={{ margin: '50px 120px' }}>
          <Card.Header className="header">👋 Waiver</Card.Header>

          <Row>
            {/* off set will middle the col */}
            <Col>
              <iframe style={{ width: '100%', height: '600px' }} src={Waiver}>
                {' '}
              </iframe>
            </Col>
          </Row>
        </Card>
      </FadeInSection>

      <FadeInSection key={2}>
        <FAQs />
      </FadeInSection>
    </div>
  );
}

export default About;

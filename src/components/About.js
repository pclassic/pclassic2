import React, {useState} from 'react'
import Bar from "../Bar"
import person from "../images/person.jpg"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Text } from "@react-three/drei";
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap'
import Info from "../pdfs/info.pdf"
import "./About.css"
import FadeInSection from "./FadeInSection";
import FAQs from "./FAQs"

function About() {

  return (
    <div>
        <Bar/>
        <br/>
        
        <Card className="fade-in" style={{margin: "50px"}}>
            <Card.Header className="header">
            👋 Who are we?
                </Card.Header>
        <Card.Text style={{padding: "20px"}}>The Philadelphia Classic (PClassic) is a semesterly programming competition for high school students hosted by us (the Dining Philosophers)
             at the University of Pennsylvania. Prizes and awards are given out to the top scoring teams, and registration for the competition is free 
             for all high schools. We will be allowing middle school students to participate in the competition as well!</Card.Text>
        </Card>  
    
        
        <Card className="fade-in2" style={{margin: "50px"}}>
        <Card.Header className="header">🗓️ PClassic Spring 2022 Summary</Card.Header>
            <Card.Text>
            Contest Date: Saturday, April 9 2022
            
            </Card.Text>
            <Card.Text>
            Location: Virtual on CodeChef
            </Card.Text>
            <Card.Text>
        PClassic had their second virtual competition, hosted on CodeChef [Novice, Standard]! The competition took place on Saturday April 9th, 2022.

        The contest theme this year was countries!
        </Card.Text>
        <Card.Text>
        1st place a trophy, a free PClassic shirt, and a prize item.
        2nd place received a trophy and a free shirt.
        3rd place received a trophy.
        Prize item is a choice between: Amazon Echo Dot, Mechanical Keyboard, Steam Gift Card.
        most people chose the steam gift card!
            </Card.Text>

        </Card>
        <FadeInSection key={0}>
            <Card style={{margin: "50px"}}>
        <Card.Header className="header">📐 Rules and Guidelines</Card.Header>
        
        <Row>
            {/* off set will middle the col */}
            <Col >
              
              <iframe
                style={{ width: "80%", height: "800px"}}
                src={Info}
              >
                {" "}
              </iframe>
            </Col>
          </Row>
          </Card>
        </FadeInSection>

        <FadeInSection key={1}>
          <FAQs/>
        </FadeInSection>
    </div>
  )
}

export default About
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Heading } from '@chakra-ui/react';

function FAQs() {
  return (
    <Card style={{margin: '50px 120px'}}>
      <Card.Header className="header">
        <Heading fontWeight={"400"} fontSize={"3xl"} mt={1}>
      🤔 Frequently Asked Questions
      </Heading>
                </Card.Header>
        <Accordion flush style={{margin: "40px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where is the competition held?</Accordion.Header>
        <Accordion.Body>
        The PClassic Competition takes place at 107 Towne Bldg, Philadelphia, PA 19104. To enter, come 
        to Levine Hall.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Does an adult need to come?</Accordion.Header>
        <Accordion.Body>
        We ask that each school has an adult chaperone. That person doesn't need to 
        be a teacher - it can be a parent or other involved person - but we need 
        someone to be responsible for getting everyone here and then back home. 
        Please email us if this would be an issue; we've made exceptions for 
        special cases in the past.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How many people should I bring?</Accordion.Header>
        <Accordion.Body>
        At least two; teams should be at least two people, but are generally four. Most schools bring 2-3 teams, but many also bring 5 or 6. If you're 
        thinking about bringing more than 6 teams, please email us so we can discuss it.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Will there be food?</Accordion.Header>
        <Accordion.Body>
          Yes! We will provide free lunch and other snacks for our attendees to enjoy. 
          We usually order ~100 boxes of pizza for each of our events!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  )
}

export default FAQs
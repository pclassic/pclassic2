import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function FAQs() {
  return (
    <Card style={{margin: "50px"}}>
      <Card.Header className="header">🤔 Frequently Asked Questions
                </Card.Header>
        <Accordion defaultActiveKey="0" flush style={{margin: "40px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where is the competition held?</Accordion.Header>
        <Accordion.Body>
        The Towne Building of Penn Engineering, located at 220 S. 33rd St, Philadelphia, PA.
        Note: check-in/registration is in the adjacent (and connected) Levine Hall, located at 3330 Walnut St.
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
    </Accordion>
    </Card>
  )
}

export default FAQs
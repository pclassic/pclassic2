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
        The PClassic Competition takes place at 107 Towne Bldg, Philadelphia, PA 19104 in 
        Towne Building at the University of Pennsylvania. The Towne Building is the building in the 
        Engineering Quad closest to the Schuykill River. To get to the Engineering Quad and Towne Building, 
        you can take Exit 346A to South Street from  I-76.
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
          Yes! We will provide free lunch and offer concessions!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  )
}

export default FAQs
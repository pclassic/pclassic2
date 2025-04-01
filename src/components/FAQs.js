import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Heading } from '@chakra-ui/react';

import entrancemap from "./images/entrancemap.png";

function FAQs() {
  return (
    <Card style={{margin: '50px 120px'}}>
      <Card.Header className="header">
        <Heading fontWeight={"400"} fontSize={"3xl"} mt={1}>
          🤔 Frequently Asked Questions
        </Heading>
      </Card.Header>
      <p>For more details, check the <a href="https://www.pclassic.org/about">"About"</a> page.</p>
      <Accordion flush style={{margin: "40px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where is the competition held?</Accordion.Header>
        <Accordion.Body>
        *NOTE:* For the spring 2025 contest, the contest will be online via codeforces; NOT at UPenn campus.

        The PClassic Competition takes place at 107 Towne Bldg, Philadelphia, PA 19104. To enter, come 
        to Levine Hall.  Look for big glass doors; these will be the only ones unlocked.
        <center><img
          src={entrancemap}
          alt="Contest Entrance Map"
        /></center>
        There is street parking in the vicinity, along Walnut, 33rd, and 34th Streets.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Does an adult need to come?</Accordion.Header>
        <Accordion.Body>
        We ask that each school has an adult chaperone. That person doesn't need to 
        be a teacher—it can be a parent or other involved person—but we need 
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
          Yes! We will provide free lunch, water, and other snacks for our attendees to enjoy. 
          We usually order ~100 boxes of pizza for each of our events!
          Each team gets at least one.  There are also several boxes for coaches/chaperones.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Will there be prizes?</Accordion.Header>
        <Accordion.Body>
          Each member of the top 3 advanced teams get a trophy and a prize.
          Each member of the top 1 classic team gets a trophy
          (We may give out trophies for the top 3 classic teams soon!).
          Unfortunately, we do not give out prizes for the classic teams.
          In the past, this has encouraged more overqualified advanced teams to do the classic division to obtain the prizes—
          this is not in the spirit of the contest!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  )
}

export default FAQs
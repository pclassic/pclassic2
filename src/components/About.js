import Bar from './Bar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import './About.css';
import { Heading, Text } from '@chakra-ui/react';
import organizersData from './organizersData.json';

function About() {
  return (
    <div>
      <Bar />
      <br />

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Who are we?</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            The Philadelphia Classic (PClassic) is a programming competition for high
            school students hosted by the PClassic club at the University of Pennsylvania. Prizes
            and awards are given out to the top scoring teams, and registration for the competition
            is free for all high schools. We will be allowing middle school students to participate
            in the competition as well!
          </Text>
        </Card.Text>
      </Card>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>History</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
            Founded in 1998, PClassic emerged as a competitive programming competition tailored
            for high schoolers organized by UPenn students. Later on, PClassic introduced the
            Classic division for newer competitors. Recently, attendance rate has risen to 300+
            participants and organizers each event, making PClassic one of Pennsylvania's largest
            competitive programming competitions.
          </Text>
        </Card.Text>
      </Card>

        <Card style={{ margin: '50px 120px' }}>
          <Card.Header>
            <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Meet the Organizers</Heading>
          </Card.Header>
          <Card.Body>
            <LinkContainer to="/past-organizers">
              <Nav.Link><u>Past Organizers</u></Nav.Link>
            </LinkContainer>
            <Row xs={1} md={3} className="g-6" style={{ padding: '10px 30px' }}>
              {organizersData.map((organizer) => (
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
          </Card.Body>
        </Card>

    </div>
  );
}

export default About;

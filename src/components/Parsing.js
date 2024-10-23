import React from 'react';
import Bar from '../Bar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Text, Heading } from '@chakra-ui/react';

function Parsing() {
  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Parsing 🤖</Heading>
      <br />
      <Text fontSize={"2xl"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
        Parsing is easy! Check out our Parsing tutorial and sample files below:
      </Text>
       
      <br />
      <Container>
      <Row>
      <Col>
      <i>Please check again later for a video guide.</i>
      <iframe src="https://drive.google.com/file/d/1Dt1WtVxcyoVuRo1iFmHiw4Q1liCko0TF/preview" width="900" height="480" allow="autoplay"></iframe>
      </Col>
      <Col>
      <Card>
      <Card.Header color="grey">Sample Parsing Files 🔗</Card.Header>
      <ListGroup>
      <ListGroup.Item action href="q0parsing.class">Class File</ListGroup.Item>
      <ListGroup.Item action href="q0parsing.cpp">C++ File</ListGroup.Item>
      <ListGroup.Item action href="q0parsing.java">Java File</ListGroup.Item>
      <ListGroup.Item action href="q0parsing.py">Python File</ListGroup.Item>
    </ListGroup>
    </Card>
      </Col>
      </Row>
      </Container>
      <br />
    </div>
  );
}

export default Parsing;

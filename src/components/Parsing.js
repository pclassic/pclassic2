import React from 'react';
import Bar from './Bar';
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
      <Container>
      <Row>
        <Text fontSize={"2xl"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>
          Parsing data from standard input and printing to standard output are common tasks in competitive programming, and being comfortable with it can save you a lot of time during contests.
        If you're new to this, check out some examples for how to do it in different languages!
        </Text>
      </Row>
      <Row>
        <Card>
          <Card.Header color="grey">Sample Parsing Files 🔗</Card.Header>
          <ListGroup>
            <ListGroup.Item action href="q0parsing.class">Class File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.cpp">C++ File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.java">Java File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.py">Python File</ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
      </Container>
      <br />
    </div>
  );
}

export default Parsing;

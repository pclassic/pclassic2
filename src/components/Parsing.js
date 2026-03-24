import React from 'react';
import Bar from './Bar';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Text, Heading } from '@chakra-ui/react';

function Parsing() {
  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Resources</Heading>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Parsing</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`} mb={4}>
            Parsing data from standard input and printing to standard output are common tasks in
            competitive programming, and being comfortable with it can save you a lot of time
            during contests. If you're new to this, check out some examples for how to do it in
            different languages!
          </Text>
          <ListGroup>
            <ListGroup.Item action href="q0parsing.class">Class File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.cpp">C++ File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.java">Java File</ListGroup.Item>
            <ListGroup.Item action href="q0parsing.py">Python File</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card>

      <Card style={{ margin: '50px 120px' }}>
        <Card.Header>
          <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Other Resources</Heading>
        </Card.Header>
        <Card.Text style={{ padding: '20px' }}>
          <ListGroup>
            <ListGroup.Item action href="https://codingcompetitions.withgoogle.com/codejam" target="_blank" rel="noreferrer noopener">Google Code Jam</ListGroup.Item>
            <ListGroup.Item action href="https://usaco.guide/" target="_blank" rel="noreferrer noopener">USACO</ListGroup.Item>
            <ListGroup.Item action href="https://codeforces.com/" target="_blank" rel="noreferrer noopener">Codeforces</ListGroup.Item>
            <ListGroup.Item action href="https://hpecodewars.org/" target="_blank" rel="noreferrer noopener">HP CodeWars</ListGroup.Item>
            <ListGroup.Item action href="https://projecteuler.net/archives" target="_blank" rel="noreferrer noopener">Project Euler</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card>
    </div>
  );
}

export default Parsing;

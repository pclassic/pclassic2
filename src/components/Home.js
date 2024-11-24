import React, { useState } from 'react';
import Bar from '../Bar';
import Alert from 'react-bootstrap/Alert';
import { Box, Text, Container, Heading, Divider } from '@chakra-ui/react';
import Photos from './Photos';
import FAQs from './FAQs';

function Home() {
  const [show, setShow] = useState(true);
  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Heading fontSize={"xl"}>🚨REMINDER🚨</Heading>
          {/* <p>PClassic's 2024 Fall competition is on Nov. 23, 2024.  Registration is now open: <u><a href="https://forms.gle/kqK7C8gsYfMu4yMQ6">HERE</a></u></p> */}
          <p>Thanks for coming to PClassic's 2024 Fall contest.</p>
          <p><u><a href="https://forms.gle/H7PuzQKDHjZUoQt69">Feedback</a></u></p>
          <p>
            <u><a href="https://rebrand.ly/pcl24FAclassic">Classic Competition</a></u> -
            <u><a href="https://rebrand.ly/pcl24FAadvanced">Advanced Competition</a></u>
          </p>
          {/*}
      */} 
        </Alert>
      );
    }
    return <></>;
  }

  return (
    <div>
      <Bar />
      <AlertDismissibleExample />

      <Container maxW={"4xl"}>
        <Heading my={6} fontSize={"5xl"} color={"#252627"}>The Philadelphia Classic</Heading>
        <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>The Philadelphia Classic (PClassic) is Philadelphia's Premier 
          Competitive Programming Competition held at the 
          University of Pennsylvania. We host events semesterly for high school students. 
          Prizes and awards are given out to the top scoring teams, and registration for the competition is free for all high schools. 
          We will be allowing middle school students to participate in the competition as well!</Text>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>EMAIL: organizers@pclassic.org</Text>

        <Photos/>
      </Container>
        <Divider/>
        <Container maxW={"4xl"}>
        <Box my={10}>
          <Heading fontSize={"3xl"} fontWeight={"bold"}>History</Heading>
            <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>Founded in 1998, PClassic emerged as an annual competitive programming competition tailored for high school students, organized by the Penn's PClassic Organizer Team.
              After many years, PClassic introduced a beginner-focused novice division, alongside the decision to host PClassic biannually (Fall and Spring). 
              Recently, attendance rate has risen to 300+ participants and organizers each event, making PClassic one of Pennsylvania's largest competitive programming competitions. 
            </Text>  
        </Box>
        </Container>
        <Divider/>
        <FAQs/>
      
    </div>
  );
}

export default Home;

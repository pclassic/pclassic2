import React, { useEffect, useState } from 'react';
import Bar from '../Bar';
import HomeScreen from './HomeScreen';
import Alert from 'react-bootstrap/Alert';
import { Text, Container } from '@chakra-ui/react';

function Home() {
  const [show, setShow] = useState(true);
  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>🚨REMINDER🚨</Alert.Heading>
          <p>PClassic's Upcoming Competition is on April 20th, 2024. Registration will open soon!</p>
          {/*}
          <p><a href="https://tinyurl.com/pcl23FAq0">Practice Problem</a></p>
          <p><a href="https://tinyurl.com/pcl23FAclarifications">Clarifications Doc</a></p>
          <p><a href="https://tinyurl.com/pcl23FAclassic"> Classic Competition</a></p>
          <p><a href="https://tinyurl.com/pcl23FAadvanced"> Advanced Competition</a> </p>
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
      {/*}
      <HomeScreen show={show} />*/}

      <Container maxW={"3xl"}>
        <Text fontSize={"6xl"} fontWeight={"bold"}>PClassic</Text>
        <Text>The Philadelphia Classic (PClassic) is Philadelphia's Premier Programming Competition held at the 
          University of Pennsylvania. We host events semesterly for high school students. 
          Prizes and awards are given out to the top scoring teams, and registration for the competition is free for all high schools. 
          We will be allowing middle school students to participate in the competition as well! EMAIL: organizers@pclassic.org</Text>


        <Text fontSize={"3xl"} fontWeight={"bold"}>History</Text>
          <Text>Founded in 1998, PClassic emerged as an annual programming competition tailored for high school students, organized by the Penn's PClassic Organizer Team.
            After many years, PClassic introduced a beginner-focused novice division, alongside the decision to host PClassic biannually (Fall and Spring). 
            Recently, attendance rate has risen to 300+ participants and organizers each event, making PClassic one of Pennslvania's largest competitive programming competitions. 
          </Text>  
        </Container>
      
    </div>
  );
}

export default Home;

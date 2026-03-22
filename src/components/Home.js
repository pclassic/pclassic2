import { useState } from 'react';
import Bar from '../Bar';
import Alert from 'react-bootstrap/Alert';
import { Box, Text, Container, Heading, Divider } from '@chakra-ui/react';
import Photos from './Photos';
import FAQs from './FAQs';

const SP26_SIGN_UP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfOndxUKV_YUCvWFD7BctuM76Sjdf_5Gi9fqOvmK2xX1U9lRw/viewform?usp=publish-editor"

function Home() {
  const [show, setShow] = useState(true);

  return (
    <main>
      <Bar />
      {show && <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Heading fontSize={"xl"}>🚨SPRING 2026 IS ON!🚨</Heading>
          <p>
            We're hosting the Spring 2026 PClassic competition! Please sign up&nbsp;
            <a 
              id="signUpLink"
              title="Sign Up Link"
              href={SP26_SIGN_UP_LINK}
              rel="noreferrer noopener nofollow"
              class='underline'
            >
              here
            </a>
            !
          </p>
        </Alert>}

      <Container maxW={"4xl"}>
        <Heading my={6} fontSize={"5xl"} color={"#252627"}>The Philadelphia Classic</Heading>
        <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>The Philadelphia Classic (PClassic) is Philadelphia's Premier
          Competitive Programming Competition held at the
          University of Pennsylvania. We host events semesterly for high school students.
          Prizes and awards are given out to the top scoring teams, and registration for the competition is free for all high schools.
          We will be allowing middle school students to participate in the competition as well!</Text>
        <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>EMAIL: organizers@pclassic.org</Text>
        <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>MAILING LIST:&nbsp;<a href="http://eepurl.com/bau2Db" class='underline' target="_blank" rel="noreferrer noopener nofollow">Join</a></Text>

        <Photos />
      </Container>
      <Divider />
      <Container maxW={"4xl"}>
        <Box my={10}>
          <Heading fontSize={"3xl"} fontWeight={"bold"}>History</Heading>
          <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>Founded in 1998, PClassic emerged as an annual competitive programming competition tailored for high school students, organized by the Penn's PClassic Organizer Team.
            After many years, PClassic introduced a beginner-focused novice division, alongside the decision to host PClassic biannually (Fall and Spring).
            Recently, attendance rate has risen to 300+ participants and organizers each event, making PClassic one of Pennsylvania's largest competitive programming competitions.
          </Text>
        </Box>
      </Container>
      <Divider />
      <FAQs />
    </main>
  );
}

export default Home;

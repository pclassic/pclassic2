import { useState } from 'react';
import Bar from './Bar';
import Alert from 'react-bootstrap/Alert';
import { Text, Container, Heading, Link } from '@chakra-ui/react';
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
        <Text fontSize={"lg"} color={"#566573"} fontFamily={`'Lato', sans-serif;`}>The Philadelphia Classic (PClassic) is Philadelphia's premier
          competitive programming competition held at the
          University of Pennsylvania. We host events semesterly for high school students.
          Prizes and awards are given out to the top scoring teams, and registration for the competition is free for all high schools.
          We will be allowing middle school students to participate in the competition as well!</Text>
        <Text fontSize="lg" color="#566573" fontFamily="'Lato', sans-serif">
          Stay up to date on contest announcements and other news by joining our{' '}
          <Link
            href="http://eepurl.com/bau2Db"
            color="blue.500"
            isExternal
            rel="noreferrer noopener nofollow"
            title="Mailing List Sign Up Link"
          >mailing list.
          </Link>
        </Text>
        <Photos />
      </Container>
      <FAQs />
    </main>
  );
}

export default Home;

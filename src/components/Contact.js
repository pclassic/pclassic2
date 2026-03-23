import Bar from './Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

function Contact() {
  return (
    <div>
      <Bar />
      <Box maxW="4xl" mx="auto" px={6} py={12}>
        <Heading fontSize="3xl" fontWeight="400" mb={8}>Contact Us</Heading>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card border="light" style={{ padding: '24px', borderRadius: '15px', height: '100%' }}>
              <Card.Body>
                <Card.Title>
                  <Heading fontSize="xl" fontWeight="600" mb={2}>Email</Heading>
                </Card.Title>
                <Text color="#566573" fontFamily="'Lato', sans-serif">
                  Have a question or concern? Reach us at{' '}
                  <Link href="mailto:organizers@pclassic.org" color="blue.500">
                    organizers@pclassic.org
                  </Link>
                  .
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ padding: '24px', borderRadius: '15px', height: '100%' }}>
              <Card.Body>
                <Card.Title>
                  <Heading fontSize="xl" fontWeight="600" mb={2}>Mailing List</Heading>
                </Card.Title>
                <Text color="#566573" fontFamily="'Lato', sans-serif">
                  Stay up to date on contest announcements and other news by joining our mailing list.
                </Text>
                <Link
                  href="http://eepurl.com/bau2Db"
                  color="blue.500"
                  isExternal
                  rel="noreferrer noopener nofollow"
                >
                  Sign up here.
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Box>
    </div>
  );
}

export default Contact;

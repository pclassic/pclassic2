
import Bar from './Bar';
import { Box, Heading, Text, Link, Divider } from '@chakra-ui/react';

function Contact() {
  return (
    <div>
      <Bar />
      <Box maxW="2xl" mx="auto" px={6} py={12}>
        <Heading fontSize="3xl" fontWeight="400" mb={8}>Contact Us</Heading>
          <Box>
            <Heading fontSize="xl" fontWeight="600" mb={2}>Email</Heading>
            <Text color="#566573" fontFamily="'Lato', sans-serif">
              Have a question or concern? Reach us at{' '}
              <Link href="mailto:organizers@pclassic.org" color="blue.500" isExternal>
                organizers@pclassic.org
              </Link>
              .
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading fontSize="xl" fontWeight="600" mb={2}>Mailing List</Heading>
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
          </Box>
      </Box>
    </div>
  );
}

export default Contact;

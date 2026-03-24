import React from 'react';
import { Link } from 'react-router-dom';
import Bar from './Bar';
import { Heading, Text } from '@chakra-ui/react';

function PrivacyPolicy() {
  return (
    <div>
      <Bar />
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px', textAlign: 'left' }}>
        <Heading fontSize="3xl" fontWeight="400" mb={4}>Privacy Policy</Heading>

        <Text color="#566573" mb={4}>
          Last updated: March 23, 2026
        </Text>

        <Text mb={4}>
          Philadelphia Classic (PClassic) respects your privacy. This Privacy Policy explains what
          information may be collected through this website, how it may be used, and how to
          contact us with questions.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>Information We Collect</Heading>
        <Text mb={4}>
          We may collect information that you voluntarily provide through contact or registration
          forms, such as names, email addresses, school affiliations, and team details.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>How We Use Information</Heading>
        <Text mb={4}>
          Information submitted to us is used to organize events, communicate contest updates,
          manage participation, and improve the PClassic experience.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>Sharing of Information</Heading>
        <Text mb={4}>
          We do not sell personal information. We may share information with organizers, volunteers,
          or service providers only as needed to operate PClassic activities.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>Data Retention</Heading>
        <Text mb={4}>
          We retain information only for as long as needed for administrative, operational, and
          historical contest purposes.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>Third-Party Links</Heading>
        <Text mb={4}>
          This site may include links to third-party websites. We are not responsible for the
          privacy practices or content of those external sites.
        </Text>

        <Heading fontSize="xl" fontWeight="400" mb={2}>Contact</Heading>
        <Text mb={4}>
          If you have questions about this policy or would like to request updates or deletion of
          submitted information, please reach out through the contact details on our <Link to="/contact">Contact</Link> page.
        </Text>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

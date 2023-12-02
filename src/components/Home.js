import React, { useEffect, useState } from 'react';
import Bar from '../Bar';
import HomeScreen from './HomeScreen';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Home() {
  const [show, setShow] = useState(true);
  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>🚨REMINDER🚨</Alert.Heading>
          <p>PClassic's Upcoming Competition is on December 2, 2023.</p>
          <a href="https://tinyurl.com/pcl23FAq0">Practice Problem</a>
          <a href="https://tinyurl.com/pcl23FAclarifications">Clarifications Doc</a>
          <a href="https://tinyurl.com/pcl23FAclassic"> Classic Competition</a>
          <a href="https://tinyurl.com/pcl23FAadvanced"> Advanced Competition</a>
          <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsKTKwYLb-ekhedupwwi8hPE_TpUtvAD55KtdP_FwlzGHCKQ/viewform?usp=sharing">Sign Up</a>
          </p>
        </Alert>
      );
    }
    return <></>;
  }

  return (
    <div>
      <Bar />
      <AlertDismissibleExample />

      <HomeScreen show={show} />
    </div>
  );
}

export default Home;

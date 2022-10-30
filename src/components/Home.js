import React, {useEffect, useState} from 'react'
import Bar from "../Bar"
import HomeScreen from "./HomeScreen"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Home() {

  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Announcements</Alert.Heading>
          <p>
            Registrations are open!
            <br/>
            PClassic's Upcoming Competition is on November 19, 2022.
          </p>
        </Alert>
      );
    }
    return <></>
  }
  

  return (
    <div>
        <Bar/>
        <AlertDismissibleExample />

        <HomeScreen/>
        
    </div>
  )
}

export default Home

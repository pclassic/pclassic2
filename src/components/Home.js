import React, {useEffect, useState} from 'react'
import Bar from "../Bar"
import HomeScreen from "./HomeScreen"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Home() {
  const [show, setShow] = useState(true);
  function AlertDismissibleExample() {
    
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>🚨REMINDER🚨</Alert.Heading>
          <p>
            PClassic's Upcoming Competition is on April 22, 2023.
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

        <HomeScreen show= {show}/>
        
    </div>
  )
}

export default Home

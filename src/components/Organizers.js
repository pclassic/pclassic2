import React from 'react'
import Bar from '../Bar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ben from './images/ben.jpeg'
import brian from './images/brian.jpg'
import ethan from './images/echee9.jpg'
import michelle from './images/Michelle.jpg'
import nick from './images/Nick.JPG'
import steven from './images/Steven.png'
import tien from './images/tien.jpg'
import ziwen from './images/ziwen.jpg'

function Organizers() {

  
  const organizers = [
    {photo: ben, name: "Benjamin"},
    {photo: brian, name: "Brian"},
    {photo: ethan, name: "Ethan Chee"},
    {photo: michelle, name: "Michelle Chang"},
    {photo: nick, name: "Nick"},
    {photo: steven, name: "Steven"},
    {photo: tien, name: "Tien"},
    {photo: ziwen, name: "Ziwen"},
  ];

  


  return (
    <div>
        <Bar/>
          <br/>
        <h2>Organizers 📝 </h2>
        <br/>
        <Row xs={1} md={3} className="g-6">
      {organizers.map((organizer) => (
        <Col>
          <Card border="light" style={{padding: "1px", borderRadius: "15px"}}>
            <Card.Img variant="top" src={organizer.photo} />
            <Card.Body>
              <Card.Title>{organizer.name}</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        
    </div>
  )
}

export default Organizers
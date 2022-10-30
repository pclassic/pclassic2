import React from 'react'
import Bar from '../Bar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from "../images/person.jpg"
function Organizers() {
  return (
    <div>
        <Bar/>
        <h1>Organizers</h1>
        <br/>
        <Row xs={1} md={3} className="g-6">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card border="light" style={{padding: "1px", borderRadius: "15px"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Person 1</Card.Title>
              <Card.Text>
                Description of their life
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
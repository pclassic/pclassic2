import React from 'react'
import Bar from '../Bar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ani from './past/ani.jpg'
import brandon from './past/brandon.jpg'
import eric from './past/eric.jpg'
import erik from './past/erik.jpg'
import pedro from './past/pedro.jpg'
import roger from './past/roger.jpg'
import stephanie from './past/stephanie.png'
import vatsin from './past/vatsin.jpg'
import meggie from './past/meggie.jpg'
import james from './past/james.jpg'
import ying from './past/ying.jpg'

import ben from './past/ben.jpg'
import brian from './past/brian.jpg'
import michelle from './past/Michelle.jpg'
import kyle from './past/kyle.jpg'
import steven from './past/Steven.jpg'
import ethan from './past/echee9.jpg';
import ishaan from './past/ishaan.jpg';
import grace from './past/grace.jpg';

function PastOrganizers() {
    const organizers = [
        {photo: ani, name: "Ani Machaidze", description: "Ani Machaidze is a senior studying Computer Science with a minor in Engineering Entrepreneurship. She is from Tbilisi, Georgia. During high-school she competed in several national programming competitions in Georgia. In her free time, she enjoys photography, playing ping-pong, and watching TV shows."},
        {photo: brandon, name: "Brandon Lin", description: "Brandon Lin was a 2020 alumni who studied computer science and data science in SEAS. He likes coding in Python and learning about mathematics and enjoys solving Rubik's Cubes, singing & playing music, and making origami."},
        {photo: eric, name: "Eric Wang", description: "Eric Wang was a 2020 alumni who studied computer science. In his free time, Eric enjoys coding and contributing to open source projects."},
        {photo: erik, name: "Erik Zhao", description: "Erik Zhao was a 2019 alumni who studied computer science and robotics in SEAS. In his free time, he enjoys ice skating, crosswording, and playing strategy games."},
        {photo: pedro, name: "Pedro Sacramento", description: "Pedro Sacramento was a 2021 alumni who studied math and computer science in SEAS. His favorite programming language is C++ (by far), he likes reading, cats and watching tons of YouTube videos."},
        {photo: roger, name: "Roger Zhang", description: "Roger Zhang was a 2018 alumni who studied computer science. He likes to use the computer science knowledge he learns from the classroom to make really useless programs with Java and Python. Outside of programming, he enjoys playing guitar hero and hanging out with friends."},
        {photo: stephanie, name: "Stephanie Shi", description: "Stephanie Shi was a 2020 alumni who studied Computer Science and Statistics in the Jerome Fisher Program in Management and Technology. Stephanie was a TA for CIS 160, one of Penn’s introductory computer science classes, and the Education Chair for Hack4Impact. Stephanie is passionate about design, math, and instant ramen."},
        {photo: vatsin, name: "Vatsin Suchak", description: "Vatsin Suchak is a senior at Penn, currently studying computer science and math. He is a TA for a discrete math course at Penn, CIS 160. He also enjoys watching motorsports, playing the guitar, and loves dogs."},
        {photo: meggie, name: "Meggie Cheng", description: "Meggie Cheng is a senior in Digital Media Design in SEAS. She was born in NYC but was raised in Houston, Texas and went to Cypress Woods High School. Her hobbies include competitive programming (did in high school), digital painting, reading webtoons."},
        {photo: james, name: "James Hu", description: "James Hu was a 2020 alumni who studied Computer Science with minors in Mathematics and Statistics. He was on the Penn rugby team. He also enjoys camping, skateboarding, and playing video games with friends."},
        {photo: ying, name: "Yingxuan Eng", description: "Yingxuan Eng is a senior studying computer science in SEAS. He enjoys mathematics as well as writing code to solve problems from various disciplines. In his free time, he likes to read, binge-watch TV series, and play Smash."},
        {photo: ben, name: "Benjamin Le", description: ""}, // Benjamin Le is a sophomore studying comdputer science in SEAS. He enjoys learning mathematics and solving interesting problems. In his free time, he likes to read and play video games.
        {photo: brian, name: "Brian Chen", description: ""}, // Brian Chen is a master's student studying computer science. He studied computational biology and computer science as an undergraduate. He enjoys playing basketball, solving Rubik's cubes, and learning about languages.
        {photo: michelle, name: "Michelle Chang", description: ""}, // Michelle Chang is a sophomore studying CS. She likes web development, K-Pop dancing, and running
        {photo: kyle, name: "Kyle Xiong", description: ""}, // Kyle is a senior studying computer science at UPenn. Hailing from Connecticut, he enjoys basketball, skiing, io games, and sometimes computer science. He also wishes you luck on your coding endeavors!
        {photo: steven, name: "Steven Chang", description: ""}, // Steven Chang is a freshman studying computer science from Myanmar. In high school, he participated in math olympiads and volunteering activities. Some of his hobbies are watching K-Dramas, playing chess, and solving the Rubik's cube.
        {photo: ishaan, name: "Ishaan Lal", description: ""}, // Ishaan is a senior studying Computer Science. This is his sixth semester in the club and fourth as the co-lead. In his free time, he enjoys teaching, reading, and following chess.
        {photo: ethan, name: "Ethan Chee", description: ""}, // Ethan Chee is a senior studying CS. In his free time he likes to rock climb, run and play video games.
        {photo: grace, name: "Grace Lee", description: ""}, // Grace is a senior in Computer Science. She typically spends her time working on problem sets, drawing, or talking about cartoons.
        // {photo: , name: "", description: ""}, // 
      ];

  return (
    <div>
        <Bar/>
        <br/>
        <h2>Past Organizers 🧐 </h2>
        <Row xs={1} md={3} className="g-6" style={{padding: "10px 90px"}}>
      {organizers.map((organizer) => (
        <Col>
          <Card border="light" style={{padding: "20px", borderRadius: "15px"}}>
            <Card.Img style={{width: "100%", height: "30vw", objectFit: "cover"}} variant="top" src={organizer.photo} />
            <Card.Body>
              <Card.Title>{organizer.name}</Card.Title>
              <Card.Text style={{textAlign: "left"}}>
                {organizer.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default PastOrganizers
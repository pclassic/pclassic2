import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ben from './images/ben.jpeg';
import brian from './images/brian.jpg';
import ethan from './images/echee9.jpg';
import michelle from './images/Michelle.jpg';
import nick from './images/Nick.JPG';
import steven from './images/Steven.jpg';
import tien from './images/tien.jpg';
import ziwen from './images/ziwen.jpg';
import ishaan from './images/ishaan.png';
import kyle from './images/kyle.jpg';
import aaron from './images/Aaron.JPG';
import Aneesh from './images/Aneesh.jpg';
import denise from './images/denise.jpg';
import michael from './images/michael.jpg';
import hemosoo from './images/hemosoo.jpg';

function Organizers() {
  const organizers = [

    // { // He's not doing PClassic this semester, but we can put him on the Past Organizers page for Fall 2022 if we're doing that
    //   photo: ben,
    //   name: 'Benjamin',
    //   description:
    //     'Benjamin Le is a sophomore studying computer science in SEAS. He enjoys learning mathematics and solving interesting problems. In his free time, he likes to read and play video games.',
    // },
    // {
    //   photo: brian,
    //   name: 'Brian',
    //   description:
    //     "Brian Chen is a master's student studying computer science. He studied computational biology and computer science as an undergraduate. He enjoys playing basketball, solving Rubik's cubes, and learning about languages.",
    // },
    {
      photo: ishaan,
      name: 'Ishaan',
      description:
        "[CO-LEAD] Ishaan is a fourth year student Computer Science. This is his fifth semester in the club and third as the co-lead. In his free time, he enjoys teaching, reading, and following chess.",
    },
    {
      photo: ethan,
      name: 'Ethan',
      description:
        '[CO-LEAD] Ethan Chee is a senior studying CS. This is his fifth semester in the club and third as the co-lead. In his free time he likes to rock climb, run and play video games.',
    },
    {
      photo: steven,
      name: 'Grace',
      description:
        "Grace Lee is Grace Lee.",
    },
    // {
    //   photo: michelle,
    //   name: 'Michelle',
    //   description:
    //     'Michelle Chang is a sophomore studying CS. She likes web development, K-Pop dancing, and running.',
    // },
    
    {
      photo: aaron,
      name: 'Aaron',
      description:
        'Aaron Mei is a CIS major at Penn who enjoys playing video games and thinking about algorithms.',
    },
    {
      photo: nick,
      name: 'Nick',
      description:
        'Nicholas Eiffert is a junior studying mathematics and computer science in CAS. He went to Bordentown Regional High School. He is a TA for a data structures and algorithms course at Penn. He likes doing competitive programming, going to concerts, and eating late-night ramen.',
    },
    {
      photo: kyle,
      name: 'Kyle',
      description:
        'Kyle is a senior studying computer science at UPenn. Hailing from Connecticut, he enjoys basketball, skiing, io games, and sometimes computer science. He also wishes you luck on your coding endeavors!',
    },
    {
      photo: steven,
      name: 'Steven',
      description:
        "Steven Chang is a freshman studying computer science from Myanmar. In high school, he participated in math olympiads and volunteering activities. Some of his hobbies are watching K-Dramas, playing chess, and solving the Rubik's cube.",
    },
    {
      photo: steven,
      name: 'Kevin',
      description:
        "Kevin Liu is Kevin Liu.",
    },
    {
      photo: hemosoo,
      name: 'Hemosoo',
      description:
        "Hemosoo is a freshman studying computer science at UPenn. In his free time, he enjoys playing sports such as soccer or basketball, hitting the gym, playing chess, and listening to music of all sorts of genres.",
    },
    {
      photo: michael,
      name: 'Michael',
      description:
        "Michael is a sophomore studying CIS.  In his free time, he enjoys playing piano, poker, video games, and wasting time.",
    },
  ];

  return (
    <div>
      <Bar />
      <br />
      <h2>Organizers 👋 </h2>
      <Row xs={1} md={3} className="g-6" style={{ padding: '10px 90px' }}>
        {organizers.map((organizer) => (
          <Col>
            <Card border="light" style={{ padding: '20px', borderRadius: '15px' }}>
              <Card.Img
                style={{ width: '100%', height: '30vw', objectFit: 'cover' }}
                variant="top"
                src={organizer.photo}
              />
              <Card.Body>
                <Card.Title>{organizer.name}</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>{organizer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Organizers;

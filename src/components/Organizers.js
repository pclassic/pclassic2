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

function Organizers() {
  const organizers = [
    {
      photo: aaron,
      name: 'Aaron',
      description:
        'Aaron Mei is a CIS major at Penn who enjoys playing video games and thinking about algorithms.',
    },
    // { // He's not doing PClassic this semester, but we can put him on the Past Organizers page for Fall 2022 if we're doing that
    //   photo: ben,
    //   name: 'Benjamin',
    //   description:
    //     'Benjamin Le is a sophomore studying computer science in SEAS. He enjoys learning mathematics and solving interesting problems. In his free time, he likes to read and play video games.',
    // },
    {
      photo: brian,
      name: 'Brian',
      description:
        "Brian Chen is a master's student studying computer science. He studied computational biology and computer science as an undergraduate. He enjoys playing basketball, solving Rubik's cubes, and learning about languages.",
    },
    {
      photo: ethan,
      name: 'Ethan',
      description:
        'Ethan Chee is a junior studying CS. In his free time he likes to rock climb, run and play video games.',
    },
    {
      photo: michelle,
      name: 'Michelle',
      description:
        'Michelle Chang is a sophomore studying CS. She likes web development, K-Pop dancing, and running.',
    },
    {
      photo: ishaan,
      name: 'Ishaan',
      description:
        "Ishaan is a third year student at the University of Pennsylvania studying Computer Science and Math. He is the current co-lead of the PClassic club, and this is his fourth semester on the club. In high school, Ishaan was on his school's computer science team who competed in PClassic! After a fun experience at the competition, he decided that he wanted to be a part of the club. Outside of PClassic, Ishaan is super passionate about teaching and dedicates much of his time to Penn's Discrete Math class, CIS1600, where he is a TA. Outside of all that, Ishaan enjoys spending his (little) free time solving puzzles, listening to/playing music, and following chess.",
    },
    {
      photo: nick,
      name: 'Nick',
      description:
        'Nicholas Eiffert is a sophomore studying mathematics and computer science in CAS. He went to Bordentown Regional High School. He is a TA for a data structures and algorithms course at Penn. He likes doing competitive programming, going to concerts, and eating late-night ramen.',
    },
    {
      photo: kyle,
      name: 'Kyle',
      description:
        'Kyle is a junior studying computer science at UPenn. Hailing from Connecticut, he enjoys basketball, skiing, io games, and sometimes computer science. He also wishes you luck on your coding endeavors!',
    },
    {
      photo: steven,
      name: 'Steven',
      description:
        "Steven Chang is a freshman studying computer science from Myanmar. In high school, he participated in math olympiads and volunteering activities. Some of his hobbies are watching K-Dramas, playing chess, and solving the Rubik's cube.",
    },
    {
      photo: tien,
      name: 'Tien',
      description:
        'Tien Pham is a senior enrolled in the Penn Computer and Cognitive Science: Artificial Intelligence program. He moved from Vietnam at the age of five and attended Emmaus High School. Throughout his four years there, he participated in a multitude of programming contests. ',
    },
    {
      photo: denise,
      name: 'Denise',
      description:
        'Denise is a junior studying computer science with a minor in fine arts. She is from Long Island, New York. In her free time, she enjoys painting and doing escape rooms.',
    },
    {
      photo: Aneesh,
      name: 'Aneesh',
      description:
        'Aneesh Boreda is a junior studying Computer Science and Finance. He participated in PClassic when he was in high school, and still enjoys solving interesting programming problems. He is also a member of the Penn Electric Racing team, and likes to play basketball and watch Formula 1 in his free time.',
    },
    {
      photo: ziwen,
      name: 'Ziwen',
      description:
        "Ziwen Hou is an ex-leader of PClassic. He is an ex undergraduate now Master's student studying Computer Science. As stated in previous description iterations, he likes to try new things! After getting destroyed by his friends in Smash Ultimate, he bought the game, learned it, and is now better than most of his friends. He also likes playing other videos games, ranging MOBA to single player action adventure to visual novels to mobile. Also he started learning to play chess (but is still really bad :/) (there are some cracked chess players in this club though, try to guess who).",
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

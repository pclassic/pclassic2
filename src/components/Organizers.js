import React from 'react';
import Bar from '../Bar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ethan from './images/echee9.jpg';
import nick from './images/Nick.JPG';
import ishaan from './images/ishaan.jpg';
import kyle from './images/kyle.jpg';
import aaron from './images/Aaron.JPG';
import michael from './images/michael.jpg';
import hemosoo from './images/hemosoo.jpg';
import grace from './images/grace.jpg';
import kevin from './images/kevin.jpg';
import michaelli from "./images/michaelli.jpg";
import aaronWu from "./images/aaronWu.jpg";
import { Text, Heading } from '@chakra-ui/react';

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
      name: 'Ishaan Lal (Co-Lead)',
      description:
        "Ishaan is a senior studying Computer Science. This is his fifth semester in the club and third as the co-lead. In his free time, he enjoys teaching, reading, and following chess.",
    },
    {
      photo: ethan,
      name: 'Ethan Chee (Co-Lead)',
      description:
        'Ethan Chee is a senior studying CS. In his free time he likes to rock climb, run and play video games.',
    },
    {
      photo: grace,
      name: 'Grace Lee (Co-Lead)',
      description:
        "Grace is a senior in Computer Science. She typically spends her time working on problem sets, drawing, or talking about cartoons.",
    },
    // {
    //   photo: michelle,
    //   name: 'Michelle',
    //   description:
    //     'Michelle Chang is a sophomore studying CS. She likes web development, K-Pop dancing, and running.',
    // },
    
    {
      photo: aaron,
      name: 'Aaron Mei',
      description:
        'Aaron Mei is a CIS major at Penn who enjoys playing video games and thinking about algorithms.',
    },
    {
      photo: nick,
      name: 'Nick Eiffert',
      description:
        'Nicholas Eiffert is a junior studying mathematics and computer science in CAS. He went to Bordentown Regional High School. He is a TA for a data structures and algorithms course at Penn. He likes doing competitive programming, going to concerts, and eating late-night ramen.',
    },
    {
      photo: kyle,
      name: 'Kyle Xiong',
      description:
        'Kyle is a senior studying computer science at UPenn. Hailing from Connecticut, he enjoys basketball, skiing, io games, and sometimes computer science. He also wishes you luck on your coding endeavors!',
    },
    // {
    //   photo: steven,
    //   name: 'Steven',
    //   description:
    //     "Steven Chang is a freshman studying computer science from Myanmar. In high school, he participated in math olympiads and volunteering activities. Some of his hobbies are watching K-Dramas, playing chess, and solving the Rubik's cube.",
    // },
    {
      photo: kevin,
      name: 'Kevin Liu',
      description:
        "Kevin Liu is a sophomore studying CIS. He enjoys sleeping in on the weekends.",
    },
    {
      photo: hemosoo,
      name: 'Hemosoo Woo',
      description:
        "Hemosoo is a freshman studying computer science at UPenn. In his free time, he enjoys playing sports such as soccer or basketball, hitting the gym, playing chess, and listening to music of all sorts of genres.",
    },
    {
      photo: michael,
      name: 'Michael Gao',
      description:
        "Michael is a sophomore studying CIS.  In his free time, he enjoys playing piano, poker, video games, and wasting time.",
    },
    {
      photo: michaelli,
      name: 'Michael Li',
      description:
        "Michael is a freshman studying CS with a focus in software development and full stack development. He's a UFC fan and always loves seeing an underdog win!",
    },
    {
      photo: aaronWu,
      name: 'Aaron Wu',
      description:
        "I watch anime",
    },
  ];

  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Meet the Organizers! 👋 </Heading>
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
                <Card.Title><Heading fontSize={"lg"} fontWeight={"700"}>{organizer.name}</Heading></Card.Title>
                  <Text color={"#566573"} textAlign={"left"} fontFamily={`'Lato', sans-serif;`}>
                    {organizer.description}
                  </Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Organizers;

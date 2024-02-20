import React from 'react';
import Bar from '../Bar';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
//import Past Problems (SPRING)
import S2012 from './problems/s2012';
import S2013 from './problems/s2013';
import S2014 from './problems/s2014';
import S2015 from './problems/s2015';
import S2016 from './problems/s2016';
import S2017 from './problems/s2017';
import S2018 from './problems/s2018';
import S2019 from './problems/s2019';
import S2022 from './problems/s2022';

//import Past Problems (FALL)
import F2013 from './problems/f2013';
import F2014 from './problems/f2014';
import F2015 from './problems/f2015';
import F2016 from './problems/f2016';
import F2017 from './problems/f2017';
import F2018 from './problems/f2018';
import F2019 from './problems/f2019';
import F2021 from './problems/f2021';
import F2022 from './problems/f2022';

import { Heading } from '@chakra-ui/react';

function PastContests() {
  const problems = [
    { name: 'F2022', comp: F2022 },
    { name: 'S2022', comp: S2022 },
    { name: 'F2021', comp: F2021 },
    { name: 'F2019', comp: F2019 },
    { name: 'S2019', comp: S2019 },
    { name: 'F2018', comp: F2018 },
    { name: 'S2018', comp: S2018 },
    { name: 'F2017', comp: F2017 },
    { name: 'S2017', comp: S2017 },
    { name: 'F2016', comp: F2016 },
    { name: 'S2016', comp: S2016 },
    { name: 'F2015', comp: F2015 },
    { name: 'S2015', comp: S2015 },
    { name: 'F2014', comp: F2014 },
    { name: 'S2014', comp: S2014 },
    { name: 'F2013', comp: F2013 },
    { name: 'S2013', comp: S2013 },
    { name: 'S2012', comp: S2012 },
  ];

  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} fontWeight={400}>Past Contests ⌛</Heading>
      <br />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#S2012">
        <Row>
          <Col sm={4} style={{ width: '20%', padding: '0px 50px' }}>
            <ListGroup>
              {problems.map((problem) => (
                <ListGroup.Item action href={`#${problem.name}`}>
                  {problem.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#S2012">
                <S2012 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2013">
                <S2013 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2014">
                <S2014 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2015">
                <S2015 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2016">
                <S2016 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2017">
                <S2017 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2018">
                <S2018 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2019">
                <S2019 />
              </Tab.Pane>
              <Tab.Pane eventKey="#S2022">
                <S2022 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2013">
                <F2013 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2014">
                <F2014 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2015">
                <F2015 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2016">
                <F2016 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2017">
                <F2017 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2018">
                <F2018 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2019">
                <F2019 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2021">
                <F2021 />
              </Tab.Pane>
              <Tab.Pane eventKey="#F2022">
                <F2022 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default PastContests;

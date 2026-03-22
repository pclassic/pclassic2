import React from 'react';
import Bar from '../Bar';
import '../App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Download from './Download';

import { Heading } from '@chakra-ui/react';

function Problems() {
  return (
    <div>
      <Bar />
      <br />
      <Heading fontSize={"3xl"} mt={2} fontWeight={"400"}>Problems 📚</Heading>
      <br />
      <Table style={{ padding: '100px' }}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Fall Problems 🍂</th>
            <th>Fall Solutions 🍂</th>

            <th>Spring Problems 🌷</th>
            <th>Spring Solutions 🌷</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>
              <Download pdf='problems/PClassic2025sProblems.pdf' name="2025S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2025sSolutions.zip' name="2025S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2024</td>
            <td>
              <Download pdf='problems/PClassic2024fProblems.pdf' name="2024F Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2024fSolutions.zip' name="2024F Solutions">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='problems/PClassic2024sProblems.pdf' name="2024S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2024sSolutions.zip' name="2024S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2023</td>
            <td>
              <Download pdf='problems/PClassic2023fProblems.pdf' name="2023F Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2023fSolutions.zip' name="2023F Solutions">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='problems/PClassic2023sProblems.pdf' name="2023S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2023sSolutions.zip' name="2023S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2022</td>
            <td>
              <Download pdf='problems/PClassic2022fProblems.pdf' name="2022F Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2022fSolutions.zip' name="2022F Solutions">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='problems/PClassic2022sProblems.pdf' name="2022S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2022sSolutions.zip' name="2022S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2021</td>
            <td>
              <Download pdf='problems/PClassic2021fProblems.pdf' name="2021F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2021fSolutions.zip' name="2021F Solutions">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>
              <Download pdf='problems/PClassic2019fProblems.pdf' name="2019F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2019fSolutions.zip' name="2019F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2019sProblems.pdf' name="2019S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2019sSolutions.zip' name="2019S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2018</td>
            <td>
              <Download pdf='problems/PClassic2018fProblems.pdf' name="2018F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2018fSolutions.zip' name="2018F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2018sProblems.pdf' name="2018S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2018sSolutions.zip' name="2018S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2017</td>
            <td>
              <Download pdf='problems/PClassic2017fProblems.pdf' name="2017F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2017fSolutions.zip' name="2017F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2017sProblems.pdf' name="2017S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2017sSolutions.zip' name="2017S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2016</td>
            <td>
              <Download pdf='problems/PClassic2016fProblems.pdf' name="2016F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2016fSolutions.zip' name="2016F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2016sProblems.pdf' name="2016S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2016sSolutions.zip' name="2016S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2015</td>
            <td>
              <Download pdf='problems/PClassic2015fProblems.pdf' name="2015F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2015fSolutions.zip' name="2015F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2015sProblems.pdf' name="2015S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2015sSolutions.zip' name="2015S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2014</td>
            <td>
              <Download pdf='problems/PClassic2014fProblems.pdf' name="2014F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2014fSolutions.zip' name="2014F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2014sProblems.pdf' name="2014S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2014sSolutions.zip' name="2014S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2013</td>
            <td>
              <Download pdf='problems/PClassic2013fProblems.pdf' name="2013F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2013fSolutions.zip' name="2013F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='problems/PClassic2013sProblems.pdf' name="2013S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf='solutions/PClassic2013sSolutions.zip' name="2013S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2012</td>
            <td>
              <Download pdf='problems/PClassic2012Problems.pdf' name="2012 Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf='solutions/PClassic2012TestCases.zip' name="2012 Test Cases">
                {' '}
              </Download>
            </td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2011</td>
            <td>
              <Download pdf='problems/PClassic2011Problems.pdf' name="2011 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2010</td>
            <td>
              <Download pdf='problems/PClassic2010Problems.pdf' name="2010 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2009</td>
            <td>
              <Download pdf='problems/PClassic2009Problems.pdf' name="2009 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2008</td>
            <td>
              <Download pdf='problems/PClassic2008Problems.pdf' name="2008 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2007</td>
            <td>
              <Download pdf='problems/PClassic2007Problems.pdf' name="2007 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2001</td>
            <td>
              <Download pdf='problems/PClassic2001Problems.pdf' name="2001 Problems">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
        </tbody>
      </Table>

      <Container style={{ padding: '30px 0px' }}>
        <h2 className="header">Other Resources 📙</h2>
        <a style={{ margin: '10px' }} href="https://codingcompetitions.withgoogle.com/codejam">
          Google Code Jam
        </a>

        <a style={{ margin: '10px' }} href="https://usaco.guide/">
          USACO
        </a>

        <a style={{ margin: '10px' }} href="https://hpecodewars.org/">
          HP CodeWars
        </a>
        <a style={{ margin: '10px' }} href="https://projecteuler.net/archives">
          Project Euler
        </a>
      </Container>
    </div>
  );
}

export default Problems;

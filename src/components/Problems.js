import React from 'react';
import Bar from '../Bar';
import '../App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Download from './Download';
import P2001 from './pdf/PClassic2001Problems.pdf';
import P2007 from './pdf/PClassic2007Problems.pdf';
import P2008 from './pdf/PClassic2008Problems.pdf';
import P2009 from './pdf/PClassic2009Problems.pdf';
import P2010 from './pdf/PClassic2010Problems.pdf';
import P2011 from './pdf/PClassic2011Problems.pdf';
import P2012 from './pdf/PClassic2012Problems.pdf';
import T2012 from './pdf/PClassic2012TestCases.zip';
import P2013f from './pdf/PClassic2013fProblems.pdf';
import S2013f from './pdf/PClassic2013fSolutions.zip';
import P2013s from './pdf/PClassic2013sProblems.pdf';
import S2013s from './pdf/PClassic2013sSolutions.zip';
import P2014f from './pdf/PClassic2014fProblems.pdf';
import S2014f from './pdf/PClassic2014fSolutions.zip';
import P2014s from './pdf/PClassic2014sProblems.pdf';
import S2014s from './pdf/PClassic2014sSolutions.zip';
import P2015f from './pdf/PClassic2015fProblems.pdf';
import S2015f from './pdf/PClassic2015fSolutions.zip';
import P2015s from './pdf/PClassic2015sProblems.pdf';
import S2015s from './pdf/PClassic2015sSolutions.zip';
import P2016f from './pdf/PClassic2016fProblems.pdf';
import S2016f from './pdf/PClassic2016fSolutions.zip';
import P2016s from './pdf/PClassic2016sProblems.pdf';
import S2016s from './pdf/PClassic2016sSolutions.zip';
import P2017f from './pdf/PClassic2017fProblems.pdf';
import S2017f from './pdf/PClassic2017fSolutions.zip';
import P2017s from './pdf/PClassic2017sProblems.pdf';
import S2017s from './pdf/PClassic2017sSolutions.zip';
import P2018f from './pdf/PClassic2018fProblems.pdf';
import S2018f from './pdf/PClassic2018fSolutions.zip';
import P2018s from './pdf/PClassic2018sProblems.pdf';
import S2018s from './pdf/PClassic2018sSolutions.zip';
import P2019f from './pdf/PClassic2019fProblems.pdf';
import S2019f from './pdf/PClassic2019fSolutions.zip';
import P2019s from './pdf/PClassic2019sProblems.pdf';
import S2019s from './pdf/PClassic2019sSolutions.zip';
import P2021f from './pdf/PClassic2021fProblems.pdf';
import S2021f from './pdf/PClassic2021fSolutions.zip';
import P2022s from './pdf/PClassic2022sProblems.pdf';
import S2022s from './pdf/PClassic2022sSolutions.zip';
import P2022f from './pdf/PClassic2022fProblems.pdf';
import S2022f from './pdf/PClassic2022fSolutions.zip';

function Problems() {
  return (
    <div>
      <Bar />
      <br />
      <h2>Problems 📚</h2>
      <br />
      <Table style={{ padding: '10px' }}>
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
            <td>2022</td>
            <td>
              <Download pdf={P2022f} name="2022F Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2022f} name="2022F Solutions">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={P2022s} name="2022S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2022s} name="2022S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2021</td>
            <td>
              <Download pdf={P2021f} name="2021F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2021f} name="2021F Solutions">
                {' '}
              </Download>
            </td>
            <td>N/A</td>
            <td>N/A </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>
              <Download pdf={P2019f} name="2019F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2019f} name="2019F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2019s} name="2019S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2019s} name="2019S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2018</td>
            <td>
              <Download pdf={P2018f} name="2018F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2018f} name="2018F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2018s} name="2018S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2018s} name="2018S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2017</td>
            <td>
              <Download pdf={P2017f} name="2017F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2017f} name="2017F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2017s} name="2017S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2017s} name="2017S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2016</td>
            <td>
              <Download pdf={P2016f} name="2016F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2016f} name="2016F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2016s} name="2016S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2016s} name="2016S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2015</td>
            <td>
              <Download pdf={P2015f} name="2015F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2015f} name="2015F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2015s} name="2015S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2015s} name="2015S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2014</td>
            <td>
              <Download pdf={P2014f} name="2014F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2014f} name="2014F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2014s} name="2014S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2014s} name="2014S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2013</td>
            <td>
              <Download pdf={P2013f} name="2013F Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={S2013f} name="2013F Solutions">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={P2013s} name="2013S Problems">
                {' '}
              </Download>{' '}
            </td>
            <td>
              <Download pdf={S2013s} name="2013S Solutions">
                {' '}
              </Download>{' '}
            </td>
          </tr>
          <tr>
            <td>2012</td>
            <td>
              <Download pdf={P2012} name="2012 Problems">
                {' '}
              </Download>
            </td>
            <td>
              <Download pdf={T2012} name="2012 Test Cases">
                {' '}
              </Download>
            </td>
            <td>N/A </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2011</td>
            <td>
              <Download pdf={P2011} name="2011 Problems">
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
              <Download pdf={P2010} name="2010 Problems">
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
              <Download pdf={P2009} name="2009 Problems">
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
              <Download pdf={P2008} name="2008 Problems">
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
              <Download pdf={P2007} name="2007 Problems">
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
              <Download pdf={P2001} name="2001 Problems">
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

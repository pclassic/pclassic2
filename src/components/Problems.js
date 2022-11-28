import React from 'react'
import Bar from '../Bar'
import "../App.css"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

function Problems() {
  return (
    <div>
        <Bar/>
        <br/>
        <h2>Problems 📚</h2>
        <br/>
        <Table >
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
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2021</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2019</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2016</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2015</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2014</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2013</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2012</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2011</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2010</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2009</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2008</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2007</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2001</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        
      </tbody>
    </Table>

      <Container style={{padding:"30px 0px"}}>
      <h2 className="header">Other Resources 📙</h2>
        <a 
        style={{margin:"10px"}}
        href="https://codingcompetitions.withgoogle.com/codejam">Google Code Jam</a>
        
        <a
        style={{margin:"10px"}} 
        href="https://usaco.guide/">USACO</a>
        
        <a 
        style={{margin:"10px"}}
        href="https://hpecodewars.org/">HP CodeWars</a>
        <a 
        style={{margin:"10px"}}
        href="https://projecteuler.net/archives">Project Euler</a>
      </Container>
    </div>
  )
}

export default Problems
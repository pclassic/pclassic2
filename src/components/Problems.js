import React from 'react';
import Bar from './Bar';
import '../App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Download from './Download';
import { Heading } from '@chakra-ui/react';
import problemsData from './problemsData.json';

function Cell({ entry }) {
  if (!entry) return <td>N/A</td>;
  return (
    <td>
      <Download pdf={entry.pdf} name={entry.name}>{' '}</Download>
    </td>
  );
}

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
            <th>Spring Problems 🌷</th>
            <th>Spring Solutions 🌷</th>
            <th>Fall Problems 🍂</th>
            <th>Fall Solutions 🍂</th>
          </tr>
        </thead>
        <tbody>
          {problemsData.map(({ year, fall, spring }) => (
            <tr key={year}>
              <td>{year}</td>
              <Cell entry={spring?.problems} />
              <Cell entry={spring?.solutions} />
              <Cell entry={fall?.problems} />
              <Cell entry={fall?.solutions} />
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
}

export default Problems;

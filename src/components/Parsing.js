import React from 'react';
import Bar from '../Bar';
import { CodeBlock } from 'react-code-blocks';

function Parsing() {
  return (
    <div>
      <Bar />
      <br />
      <h1>Parsing 📝</h1>
      <br />
      <h6>
        Parsing is actually very easy! Below are files tutorials you can peek at to learn how to
        parse.
      </h6>
      <h6>
        We have a{' '}
        <a href="https://drive.google.com/file/d/1Dt1WtVxcyoVuRo1iFmHiw4Q1liCko0TF/view?fbclid=IwAR3IFZfQ9lxQW3KSK15l5ZX00uwWTdbFsrWDQQ4OAt3dUNc2geVNciafTmU">
          video tutorial
        </a>{' '}
        here if you would like a walkthrough.
      </h6>
      <br />
      <a href="q0parsing.class">Class File</a>
      <br />
      <a href="q0parsing.cpp">C++ File</a>
      <br />
      <a href="q0parsing.java">Java File</a>
      <br />
      <a href="q0parsing.py">Python File</a>
    </div>
  );
}

export default Parsing;

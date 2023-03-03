import React, { useState } from 'react';
import Bar from '../Bar';
// import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Mailing() {
  return (
    <div>
      <Bar />
      <br />
      <h2>Mailing List ✉️ </h2>
      <p>
        Join 🙌 for PClassic updates!
        <br /> Dates and registration links will be sent when available.
        <br />
        For more, also follow us on Twitter 🐦 for updates.
      </p>
    </div>
  );
}

export default Mailing;

import React, {useState} from 'react'
import Bar from "../Bar"
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Mailing() {

  return (
    <div>
        <Bar/>
        <br/>
        <h2>Mailing List ✉️ </h2>
        <p>
         Join 🙌 for PClassic updates! 
        <br/> Dates and registration links will be sent when available.
        <br/>
        For more, also follow us on Twitter 🐦 for updates.
        </p>

        <form action="//pclassic.us3.list-manage.com/subscribe/post?u=e891bad1ae55f5ace36bac79b&amp;id=ef16c55824" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="mc-field-group form-group">
  <label for="mce-EMAIL">Email Address</label>
  <input type="email" value="" name="EMAIL"il id="mce-EMAIL" placeholder="required"> </input>
</div>
<div class="mc-field-group form-group">
  <label for="mce-FNAME">First Name </label>
  <input type="text" value="" name="FNAME"  id="mce-FNAME" placeholder="optional"/>
</div>
<div class="mc-field-group form-group">
  <label for="mce-LNAME">Last Name </label>
  <input type="text" value="" name="LNAME"  id="mce-LNAME" placeholder="optional"/>
</div>
<div class="mc-field-group form-group">
  <label for="mce-SCHOOL">School </label>
  <input type="text" value="" name="SCHOOL"  id="mce-SCHOOL" placeholder="optional"/>
</div>
<div class="mc-field-group form-group">
  <label for="mce-MMERGE4">Relation </label>
  <select name="MMERGE4" class="form-control" id="mce-MMERGE4">
    <option value=""></option>
    <option value="Teacher">Teacher</option>
    <option value="Student">Student</option>
    <option value="Parent">Parent</option>
    <option value="Coach">Coach</option>
    <option value="Other">Other</option>
  </select>
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>     
    <div style="position: absolute; left: -5000px;">
        <input type="text" name="b_e891bad1ae55f5ace36bac79b_ef16c55824" tabindex="-1" value=""/></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary"/></div>
    </div>
</form>
        

    </div>
  )
}

export default Mailing

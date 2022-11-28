import React from 'react'
import Photos from "./Photos"
import Bar from '../Bar'
import Card from "react-bootstrap/Card"

function History() {
  return (
    <div>
        <Bar/>
        <br/>
        <h2>History 📜</h2>
        <Card style={{margin: "10px 50px "}}> 
            <Card.Text style={{padding:"10px"}}>
        PClassic began in 1998 as an annual programming contest for high schoolers, put on each spring by the Dining Philosophers, Penn's computer science student group.
        <br/>
        Numbers started to pick up in 2012 as PClassic registered around 100 participants, and then clocked over 150 in 2013. 
        Someone graduated that year and responsibility for the contest was handed down; the next team made some changes to accommodate the apparent growth. 
        The beginner-oriented novice division was introduced, and PClassic started to be held twice a year. This resulted in 300 participants in 2013 Fall, only to be surpassed by 350 in 2014 Fall.
        <br/>
        PClassic t-shirts made a one-off appearance in 2012, then returned in 2013 Fall and have appeared with a different color each semester since.
        </Card.Text>
        </Card>
        
        <Photos/>
        
    </div>
  )
}

export default History
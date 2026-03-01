import React from 'react'

function Download(props) {
  return (
    <div className = "App">
    <a href = {props.pdf} target = "_blank" rel="noreferrer">{props.name}</a>
  </div>
  )
}

export default Download

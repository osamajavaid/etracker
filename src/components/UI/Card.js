import React from 'react'

function Card(props) {
  const classes = 'shadow-2xl rounded-xl ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card

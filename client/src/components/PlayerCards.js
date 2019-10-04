import React from 'react'

const PlayerCards = props => {
  return(
    <div>
      <p>{props.name} playing for {props.country}</p>
    </div>
  )
}

export default PlayerCards
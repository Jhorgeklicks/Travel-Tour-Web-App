import React from 'react'

const DestinationDetails = (props) => {
  return (
    <>
    <div className="destinationInfo__details ">
        <div className="destinationInfo__details__head animation">{props.title}</div>
        <div className="destinationInfo__details__text animation">{props.text}</div>
    </div>
</>
  )
}

export default DestinationDetails
import React from 'react'
import DestinationDetails from './DestinationDetails'

const DestinationInfo = ({details}) => {
  return (
    <div className="destinationInfo">
        <div className="container">
            <h2 className="heading animation">Overview</h2>
            <div className="row">
                <div className="col-8">
                    <div className="destinationInfo__para animation">
                        {details.details}
                    </div>
                </div>
            </div>
            <h2 className='heading animation'>Good to Know</h2>
            <div className="row">
                <div className="col-8">
                    <DestinationDetails title="Language" text={details.language}/>
                    <DestinationDetails title="Currency" text={details.currency}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationInfo
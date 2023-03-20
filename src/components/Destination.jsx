import React, { useContext, useState } from 'react';
import destinationContext from '../context/DestinationContext';
import DestinationList from './DestinationList';

const Destination = () => {
    const {destinationState:{destinations}} = useContext(destinationContext);

    const [destinationState] = useState({
        header : "Discover the most engaging places in the world with Travel Friends",
        para : "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it"
    })

  return (
    <>
    <div className="destination my-[9rem]">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3 className="p-[1rem] destination__header animation" >{destinationState.header}</h3>
                </div>
                <div className="col-6">
                    <p className="p-[1rem] destination__para animation">{destinationState.para}</p>
                </div>
            </div>
            <div className="destination__block my-[4rem]">
                <div className="row">
                    {
                        destinations.map( destination => (
                                <DestinationList destination={destination} key={destination.id}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Destination
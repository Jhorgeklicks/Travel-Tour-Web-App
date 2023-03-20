import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {GiPositionMarker} from 'react-icons/gi';
import { Link } from "react-router-dom";

const DestinationList = (props) => {
  return (
    <>
        <div className="col-3 p-[1rem] animation">
           <div className="destination__card">
                <div className="destination__card__img">
                    <LazyLoadImage src={props.destination.image} alt={props.destination.name + ' image'} />
                </div>
                <div className="destination__card__layer">
                  <div className="destination__card__content">
                      <GiPositionMarker size={19}/>
                      <div className="destination__card__content__country ml-[.2rem]">
                        {props.destination.name}
                      </div>
                  </div>
                </div>
                <div className="destination__card__info">
                  <div className="destination__card__info__text">
                      <Link to={'details/'+props.destination.id}>Explore</Link>
                  </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default DestinationList
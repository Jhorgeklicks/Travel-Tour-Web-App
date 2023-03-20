import React from 'react'
import {BsCheck, BsX} from 'react-icons/bs';

const CityFacility = ({name, value}) => {
  return (
    <div className="cities__body__content__facility">
        <div className="cities__body__content__facility__name">{name}</div>
        <div className="cities__body__content__facility__value"> {(value) ? <BsCheck size={20} color="#15979d"/> : <BsX size={20} color="#ff4d58"/>} </div>
    </div>
  )
}

export default CityFacility
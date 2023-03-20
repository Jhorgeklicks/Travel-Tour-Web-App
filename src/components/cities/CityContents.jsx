import React from 'react'
import { BsStopwatch } from 'react-icons/bs'
import CityFacility from './CityFacility'

const CityContents = ({name,dur,price, food, room}) => {

    const format = (price)=>{
        return `${price}.00`;
    }

  return (
    <div className="cities__body__content">
        <div className="cities__body__content__top">
            <div className="cities__body__content__top__name">{name}</div>
            <div className="cities__body__content__top__duration">

                <BsStopwatch className='icon_watch' size={17}/>
                <div className="cities__body__content__top__duration_time">{dur}</div>
            </div>
        </div>
        <div className="cities__body__content__price">
            <span className="cities__body__content__price_dollar">$</span>
            {format(price)}
        </div>
        <CityFacility name="Room" value={room}/>
        <CityFacility name="Food" value={food}/>
        <div className="cities__body__content__button">
            <button className='btn-dark-sm'>Buy Now</button>
        </div>
    </div>
  )
}

export default CityContents
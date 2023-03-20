import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CityImage = ({img,name,status}) => {
  return (
    <>
        <LazyLoadImage src={img} alt={name+ ' Image'}/>
        <div className={status+ ' cities__body__image__status'}>{status}</div>
    </>
  )
}

export default CityImage
import React from 'react'

const ServicesLeft = ({heading, subHead}) => {
  return (
    <div className="services__left">
        <h1 className="services__left__heading animation">{heading}</h1>
        <p className="services__left__para animation">{subHead}</p>
    </div>
  )
}

export default ServicesLeft
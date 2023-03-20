import React from 'react'
import CityImage from './CityImage';
import CityContents from './CityContents';

const Cities = ({cities, name}) => {
    
  return (  
    <div className="cities">
        <div className="container">
            <div className="city_container">
                <h2 className='heading'>Cities In {name}</h2>
                <div className="row">
                    {
                        (cities.length > 0) ? cities.map( city =>(
                           <div className="col-3 p-[15px]" key={city.id}>
                                <div className="cities__body animation">
                                    <div className="cities__body__image relative">
                                        <CityImage name={city.name} img={city.image} status={city.status}/>
                                    </div>
                                    <CityContents name={city.name} dur={city.duration} price={city.price} room={city.room} food={city.food}/>
                                </div>
                           </div>
                        )
                        ) : "No Cities in {name}"
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cities
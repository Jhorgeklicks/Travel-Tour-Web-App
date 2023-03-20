import React from 'react'
import { DETAILS,CITIES } from '../types/DestinationType'

const DesitinationReducer = (state, action) => {
  const {type, payload} = action;
  if(type === DETAILS){
        const destination = state.destinations.find( (item => item.id === parseInt(payload) ) )
    return {
       ...state,details:destination
    }
  }else if(type === CITIES){
      const filterCity = state.cities.filter( (city) => parseInt(city.destinationId) === parseInt(payload) )

      return {
        ...state, 
        filteredCity : filterCity
      }
      
  }else{
    return state
  }
}

export default DesitinationReducer
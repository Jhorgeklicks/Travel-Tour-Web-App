import React, { useReducer } from 'react';
import serviceContext from '../ServiceContext';
import services from '../../data/services';
import serviceReducer from '../reducers/ServicesReducer';


const ServiceProvider = (props) => {
    const [state, dispatch] = useReducer(serviceReducer, {servicesData : services});
  return (
    <serviceContext.Provider value={{state, dispatch}}>{props.children}</serviceContext.Provider>
  )
}

export default ServiceProvider
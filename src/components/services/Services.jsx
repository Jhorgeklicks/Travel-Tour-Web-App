import React, { useContext, useState } from 'react'
import ServicesLeft from './ServicesLeft';
import serviceContext from '../../context/ServiceContext';
import ServicesList from './ServicesList';

const Services = () => {
    const [serviceState] = useState({
        heading : "Why customer choose Us ? we stand out with our best and affordable services.",
        subHead : "Our aim is to be the most reliable and trusted travel tour organization to take you around the world as you explore Natour and Scenes."
    });
    const {state : {servicesData}, dispatch} = useContext(serviceContext);
  return (
    <div className="services">
        <div className="services__content">
            <div className="container">
                <div className="row items-center">
                    <div className="col-6 p-[15px]">
                        <ServicesLeft heading={serviceState.heading} subHead={serviceState.subHead}/>
                    </div>

                    <div className="col-6 p-[15px]">
                        <ServicesList services={servicesData}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
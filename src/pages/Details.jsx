import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import destinationContext from '../context/DestinationContext';
import { DETAILS, CITIES } from '../context/types/DestinationType';
import Header from "../components/Header";
import {Helmet} from "react-helmet-async";
import DestinationInfo from '../components/DestinationInfo';
import Cities from '../components/cities/Cities';
import Footer from '../components/footer/Footer';

const Details = () => {
    const {id}= useParams();
    const {destinationState, dispatch} = useContext(destinationContext);
    
    const {details, filteredCity} = destinationState;
  const scrollUp = () => {
    window.scrollTo(0,0);
  }

  setTimeout( () => {
    scrollUp();
  }, 10 )

useEffect( ()=>{
    dispatch({type : DETAILS, payload : id })
    dispatch({type : CITIES, payload : id })
  },[id])
    // console.log(destinationState.filteredCity)
  return (
    <>
        <Helmet>
            <title>{details.name}</title>
            <meta name="description" content="Travel and have fun" />
            <meta name="keywords" content="Travel, Tour, Holidays " />
        </Helmet>
        <Header headText={details.name} image={details.bigImage} name={details.name}></Header>
        <DestinationInfo details={details}/>
        <Cities cities={filteredCity} name={details.name}/>
        <Footer/>
    </>
  )
}

export default Details
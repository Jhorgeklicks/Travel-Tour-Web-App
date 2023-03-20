import React, { useState,useContext,useEffect} from 'react'
import {Helmet} from 'react-helmet-async';
import ModalContext from '../context/ModalContext'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { OPEN_MODAL } from '../context/types/ModalTypes'
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destination from '../components/Destination';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';

const Home = () => {

  const {state, dispatch} = useContext(ModalContext);
  const [registerModel] = useState('registerModel');
  const [loginModel] = useState('loginModel');

  const [page] = useState({
    headText : 'Best partners for your Tour',
    para : 'The best, affordable and peaceful journey you can ever long for, be our Guest'
  })

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])

  return (
    <>
    <Helmet>
      <title>Travel | Home Page</title>
      <meta name="description" content="Travel and have fun" />
      <meta name="keywords" content="Travel, Tour, Holidays " />
    </Helmet>
      <Header headText={page.headText} para={page.para}><button className="btn-default" onClick={() => dispatch({type : OPEN_MODAL, payload : registerModel })}>Get Booked Now</button></Header>
      <Modal current={registerModel}><Register current={loginModel}/></Modal>
      <Modal current={loginModel}><Login current={registerModel}/></Modal>
      <Destination/>
      <Services/>
      <Reviews/>
      <Gallery/>
      <Footer/>
    </>
  )

}

export default Home
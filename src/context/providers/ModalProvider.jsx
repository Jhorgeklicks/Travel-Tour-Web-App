import React from 'react'
import { useReducer } from 'react';
import ModalContext from '../ModalContext';
import modalReducer from '../reducers/ModalReducer';

const ModalProvider = (props) => {

const [state, dispatch] = useReducer(modalReducer,{showModal : false, current : '' })

  return (
    <ModalContext.Provider value={{state,dispatch}}>{props.children}</ModalContext.Provider>
  )
}

export default ModalProvider
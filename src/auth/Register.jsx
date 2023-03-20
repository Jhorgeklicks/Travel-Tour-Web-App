import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import { OPEN_MODAL } from '../context/types/ModalTypes'

const Register = (props) => {
    const {dispatch} = useContext(ModalContext);

    const [userRegState, setUserRegState] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleRegForm = (evt) => {
        evt.preventDefault();
        console.log(userRegState);
    }


  return (
    <>
        <form className='' onSubmit={handleRegForm}>
            <div className="modal__heading">
                <h3>Create an account</h3>
            </div>
            <div className="group">
                <input type="text" name='' placeholder='Jhon Burna' className='group__control' onChange={ (e) => setUserRegState({...userRegState, name : e.target.value }) } value={userRegState.name} />
            </div>
            <div className="group">
                <input type="email" name='' placeholder='example@gmail.com' className='group__control' onChange={ (e) => setUserRegState({...userRegState, email : e.target.value }) } value={userRegState.email}/>
            </div>
            <div className="group">
                <input type="password" name='' placeholder='enter password' className='group__control' onChange={ (e) => setUserRegState({...userRegState, password : e.target.value }) } value={userRegState.password}/>
            </div>
            <div className="modal__action flex justify-between items-center">
                <input type="submit" name='' className='btn-dark' value='Register'/>
                <span className='account-login hover:cursor-pointer hover:text-[#278813;]' onClick={ () => dispatch({type : OPEN_MODAL, payload: props.current}) }>Already Have an Account ?</span>
            </div>
        </form>
    </>
  )
}

export default Register
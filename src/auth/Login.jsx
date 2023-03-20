import React from 'react';
import { useContext, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { OPEN_MODAL } from '../context/types/ModalTypes';

const Login = (props) => {
    const {dispatch} = useContext(ModalContext);

    const [userLogState, setUserLogState] = useState({
        email : '',
        password : ''
    })

    const handleLogForm = (evt) => {
        evt.preventDefault();
        console.log(userLogState);
    }

  return (
    <>
        <form className='' onSubmit={handleLogForm}>
            <div className="modal__heading">
                <h3>User LogIn </h3>
            </div>
            {/* <div className="group">
                <input type="text" name='' placeholder='Enter username' className='group__control'/>
            </div> */}
            <div className="group">
                <input type="email" name='' placeholder='Enter Your E-mail' className='group__control' onChange={ (e) => setUserLogState({...userLogState, email : e.target.value }) } value={userLogState.email}/>
            </div>
            <div className="group">
                <input type="password" name='' placeholder='Enter Password' className='group__control' onChange={ (e) => setUserLogState({...userLogState, password : e.target.value }) } value={userLogState.password}/>
            </div>
            <div className="modal__action flex justify-between items-center">
                <input type="submit" name='' className='btn-dark' value='Login'/>
                <span className='account-register hover:cursor-pointer hover:text-[#b71313;]' onClick={() => dispatch({ type : OPEN_MODAL, payload : props.current})}>Don't Have an Account ?</span>
            </div>
        </form>
    </>
  )
}

export default Login
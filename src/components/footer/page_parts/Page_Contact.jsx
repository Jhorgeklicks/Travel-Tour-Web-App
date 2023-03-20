import React, { useState } from 'react'

const Page_Contact = () => {
    const [contactLogState, setContactLogState] = useState({
        name : '' ,
        email : '' ,
        message : '' 
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        console.log(contactLogState);
    }
  return (
    <>
        <form onSubmit={ handleFormSubmit }>
            <h1 className='page__form__heading'>Let Us Hear From You</h1>
            <div className="group">
                <input type="text" name='' placeholder='Enter Your Name' className='group__control' onChange={ (e) => setContactLogState({...contactLogState, name : e.target.value }) } value={contactLogState.name}/>
            </div>
            <div className="group">
                <input type="email" name='' placeholder='Enter Your E-mail' className='group__control' onChange={ (e) => setContactLogState({...contactLogState, email : e.target.value }) } value={contactLogState.email}/>
            </div>
            <div className="group">
                <textarea cols="12" rows="8" placeholder='Enter Your Message' className='group__control group__textarea' onChange={ (e) => setContactLogState({...contactLogState, message : e.target.value }) } value={contactLogState.message}></textarea>
            </div>

            <div className="group">
                <button type='submit' className='btn-dark'>Send Message &rarr;</button>
            </div>
        </form>
    </>
  )
}

export default Page_Contact
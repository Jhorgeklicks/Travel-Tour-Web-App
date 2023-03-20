import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {LazyLoadImage} from "react-lazy-load-image-component"

const Header = (props) => {
    const [header] = useState({
                    vid : '/assets/videos/header.mp4', 
                    poster : '/assets/images/screen.png',
                    logo : '/assets/images/logo.png'
                });

    return (
        <>
            <div className='header bg-white'>
                <div className="header__video">
                    {
                        (props.image) ?  <LazyLoadImage src={props.image} alt={props.name + ' Image'} /> : <video src={header.vid} autoPlay loop muted poster={header.poster} className="sm:w-auto lg:w-full"></video>
                    }
                    
                </div>
                <div className='header__contents'>
                    <div className="container relative">
                        
                        <div className="header__logo absolute top-[2rem] left-[2rem] z-10 w-[120px] h-[120px]">
                            <Link to='/'><img src={header.logo} alt="logo"/></Link>
                        </div>

                        <div className='header__contents__text'>
                            <div className='header__contents__text__child'>
                                <h1 className='header__contents__text__child--h1'>{props.headText}</h1>
                                <div className='header__contents__text__child--p'>{props.para}</div>
                                <div className='header__contents__text__child--link'>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
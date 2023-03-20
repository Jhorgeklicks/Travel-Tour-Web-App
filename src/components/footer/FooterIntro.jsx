import React, { useState } from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component'

const FooterIntro = () => {
    const [state] = useState({
        logo : '/assets/images/footer-logo.png',
        intro : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus itaque ullam similique ad culpa modi necessitatibus asperiores, harum eligendi? Nobis ipsam nam vel similique distinctio, blanditiis soluta fuga! Excepturi nulla beatae voluptatem perspiciatis.'
    })
  return (
    <>
        <div className="footer__intro">
            <div className="footer__intro__img animation">
                <LazyLoadImage src={state.logo} alt='Footer Image'/>
            </div>
            <div className="footer__intro__info animation">{state.intro}</div>
        </div>
    </>
  )
}

export default FooterIntro
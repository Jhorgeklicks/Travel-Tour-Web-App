import React, { useState } from 'react'
import FooterIntro from './FooterIntro'
import FooterLinks from './FooterLinks'

const Footer = () => {
    const footerImgStyle = {
        background: 'url(/assets/images/footer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    }

  return (
    <div className="footer" style={footerImgStyle}>
        <div className="footer__container">
            <div className="container p-[15px]">
                <div className="footer__container__block">
                    <div className="row">
                        <div className="col-6 p-[15px]">
                            <FooterIntro/>
                        </div>
                        <div className="col-6 p-[15px]">
                            <FooterLinks/>
                        </div>
                    </div>
                </div>
            <div className="footer__copyRight">
                <p className='animation'> &copy; {new Date().getFullYear()} | Travel with Love</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
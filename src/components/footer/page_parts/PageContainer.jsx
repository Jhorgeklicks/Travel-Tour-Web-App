import React from 'react'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const PageContainer = ({data,children}) => {

  return (
    <>
        <Header headText={data.heading}/>
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {children}
                    </div>
                    <div className="col-6">
                        <div className="page__info">
                            <h2 className="main_head">{data.heading}</h2>
                            <h1 className='page__info__heading'>{data.subHead}</h1>
                            <p className="page__info__msg">{data.para}</p>
                            <div className="page__info__link">
                                <Link to='/' className='btn-dark'>Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )

}

export default PageContainer
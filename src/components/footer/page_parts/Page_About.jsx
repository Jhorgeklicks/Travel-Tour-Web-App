import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Page_About = () => {
  const [pageImg] = useState('/assets/images/about.jpg')

  return (
    <div className="page__img">
        <LazyLoadImage src={pageImg} alt='about Image'/>
    </div>
  )
}

export default Page_About
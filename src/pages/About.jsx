import React, { useState,useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/footer/page_parts/PageContainer';
import Page_About from '../components/footer/page_parts/Page_About';

const About = () => {
  const [aboutState] = useState({
    heading : 'About Us',
    subHead : ' The best travel agency since 2009',
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quaerat nesciunt hic earum in soluta deleniti delectus, similique neque repudiandae pariatur consequuntur numquam quibusdam odit asperiores minima expedita debitis iste nisi voluptates. Repellendus nostrum eius cum ducimus optio sapiente quis necessitatibus quas, sint cumque ad distinctio nesciunt vero quisquam consectetur aliquid id nobis cupiditate porro inventore earum ipsa voluptatibus. Incidunt, est dolorum? Delectus sed quidem repudiandae nisi, pariatur non veniam rerum blanditiis incidunt! Dolore, omnis vel, eligendi laudantium ipsa aliquid natus sint cumque alias quia voluptatem amet tenetur nesciunt cum quidem eius, accusamus sapiente! In impedit itaque ratione.'
  })

  useEffect( () => {
    window.scrollTo(0,0)
},[])

  return (
  <>
    <Helmet>
      <title>Travel | About Us</title>
      <meta name="description" content="Travel and have fun" />
      <meta name="keywords" content="Travel, Tour, Holidays " />
    </Helmet>
    <PageContainer data={aboutState}><Page_About/></PageContainer>
  </>
  )
}

export default About
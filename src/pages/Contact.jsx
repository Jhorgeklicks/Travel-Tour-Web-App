import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/footer/page_parts/PageContainer';
import Page_Contact from '../components/footer/page_parts/Page_Contact';

const Contact = () => {
    const [contactState] = useState({
        heading : 'Contact Us',
        subHead : ' Write To Us',
        para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quaerat nesciunt hic earum in soluta deleniti delectus, similique neque repudiandae pariatur consequuntur numquam quibusdam odit asperiores minima expedita debitis iste nisi voluptates. Repellendus nostrum eius cum ducimus optio sapiente quis necessitatibus quas, sint cumque ad distinctio nesciunt vero quisquam consectetur aliquid id nobis cupiditate porro inventore earum ipsa voluptatibus. Incidunt, est dolorum? Delectus sed quidem repudiandae nisi, pariatur non veniam rerum blanditiis incidunt! Dolore, omnis vel, eligendi laudantium ipsa aliquid natus sint cumque alias quia voluptatem amet tenetur nesciunt cum quidem eius, accusamus sapiente! In impedit itaque ratione.'
    })
    
    useEffect( () => {
        window.scrollTo(0,0)
    },[])

  return (
    <>
        <Helmet>
            <title>Travel | Contact Us</title>
            <meta name="description" content="Travel and have fun" />
            <meta name="keywords" content="Travel, Tour, Holidays " />
        </Helmet>
        {/* <PageContainer><PageContainer/> */}
        <PageContainer data={contactState}><Page_Contact/></PageContainer>
    </>
  )
}

export default Contact
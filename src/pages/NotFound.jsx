import { useState } from "react"
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [notFoundState] = useState({
    heading : 'Page Not Found',
    subText : 'Sorry, it seems you missed your way out.',
    img : '/assets/images/404.jpg'
  });

  return (
    <>
      <Header headText={notFoundState.heading} para={notFoundState.subText} image={notFoundState.img}><Link to={'/'} className="btn-dark">Go Home</Link></Header>
      
    </>
  )
}

export default NotFound
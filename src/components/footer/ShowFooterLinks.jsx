import React from 'react'
import {Link} from 'react-router-dom';
import {BsChevronRight} from 'react-icons/bs'

const ShowFooterLinks = ({links, external}) => {
  return (
    <>
        {
            links.map( (link, index) => (
                <ul className="footer__ul" key={index}>
                    <li className="footer__li">
                        <BsChevronRight size={12}/>
                        {
                            external ? 
                            <a href={link.route} target="_blank">{link.name}</a>
                            :
                            <Link to={ link.hasOwnProperty('route') ? link.route : `details/${link.id}` }>{link.name}</Link>
                        }
                    </li>
                </ul>  
            ) )
        }
    </>
  )
}

export default ShowFooterLinks
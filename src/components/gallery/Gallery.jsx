import React, { useContext, useState } from 'react';
import galleryContext from '../../context/GalleryContext';
import LightBox from './LightBox';
import GalleryImage from './GalleryImage';

const Gallery = () => {
    const { galleryStore : {galleryData,lightBoxStatus}} = useContext(galleryContext);
    const [gallery] = useState({head :'Gallery of Captured City Images'})
  return (
    <>
        { lightBoxStatus ? (<LightBox/>) : "" }
        <div className="gallery">
            <div className="container p-[15px]">
                <h2 className="main_head animation">{gallery.head}</h2>
                <div className="row">
                    {
                        galleryData.length > 0 ? 
                        galleryData.map( (gallery,index) => (
                            <GalleryImage gallery={gallery} key={index}/>
                        ) )
                        : ''
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery
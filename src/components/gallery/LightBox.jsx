import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HIDE_GALLERY_LIGHTBOX } from '../../context/types/GalleryType';
import galleryContext from '../../context/GalleryContext';

const LightBox = () => {
  const {galleryStore : {currentLightBox}, dispatch} = useContext(galleryContext);
  const closeLightBox = (e) => {
     if(e.target.className === 'gallery__lightBox'){
        return dispatch({type : HIDE_GALLERY_LIGHTBOX})
     }
  }

  return (
    <div className="gallery__lightBox" onClick={ closeLightBox }>
        <h4>{currentLightBox.name}</h4>
        <div className="gallery__lightBox__card">
            <div className="gallery__lightBox__card__image">
                <LazyLoadImage src={currentLightBox.image} alt={currentLightBox.name + ' Image'}/>
            </div>
        </div>
    </div>
  )
}

export default LightBox
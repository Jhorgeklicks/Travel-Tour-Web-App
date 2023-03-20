import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import galleryContext from '../../context/GalleryContext'
import { SHOW_GALLERY_LIGHTBOX } from '../../context/types/GalleryType';

const GalleryImage = (props) => {
    const {dispatch} = useContext(galleryContext);

    const openLightBox = imgObj => {
       return dispatch({type : SHOW_GALLERY_LIGHTBOX, payload : imgObj});
    }

  return (
    <>
        <div className="col-3">
            <div className="gallery__image animation">
                <LazyLoadImage src={props.gallery.image} alt={props.gallery.name + ' Image'} onClick={ () => openLightBox(props.gallery)}/>
            </div>
        </div>
    </>
  )
}

export default GalleryImage
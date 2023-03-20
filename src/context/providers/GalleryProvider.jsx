import React, { useReducer } from 'react';
import galleryContext from '../GalleryContext';
import gallery from '../../data/gallery';
import GalleryReducer from '../reducers/GalleryReducer';

const GalleryProvider = (props) => {
  const [galleryStore, dispatch] = useReducer(GalleryReducer,
    {
      galleryData : gallery, 
      lightBoxStatus : false,
      currentLightBox : {}
    })

  return (
      <galleryContext.Provider value={{ galleryStore, dispatch }}>{props.children}</galleryContext.Provider>
  )
}

export default GalleryProvider
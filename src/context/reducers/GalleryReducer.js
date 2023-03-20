import { SHOW_GALLERY_LIGHTBOX ,HIDE_GALLERY_LIGHTBOX} from "../types/GalleryType";

const GalleryReducer = (state, action) => {

    if(action.type === SHOW_GALLERY_LIGHTBOX){
        return {
            ...state,
            lightBoxStatus : true,
            currentLightBox : action.payload
        }
    }else if(action.type === HIDE_GALLERY_LIGHTBOX){
        return {
            ...state,
            lightBoxStatus : false,
            currentLightBox : {}
        }
    }else{
        return state;
    }
}

export default GalleryReducer;
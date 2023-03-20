import { OPEN_MODAL, CLOSE_MODAL } from "../types/ModalTypes";

const modalReducer = (state,action) => {
    if(action.type === OPEN_MODAL){
        return {
            showModal : true,
            current : action.payload
        };
    }else if (action.type === CLOSE_MODAL){
        return {
            showModal : false,
            current : ''
        };

    }else{
        return state;
    }
}

export default modalReducer;
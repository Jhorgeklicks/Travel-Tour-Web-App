import React, { useReducer } from 'react';
import ReviewReducer from '../reducers/ReviewReducer';
import reviewContext from '../ReviewContext';
import reviews from '../../data/reviews';


const ReviewProvider = (props) => {
    const [state, dispatch] = useReducer(ReviewReducer, {reviewData : reviews})
  return (
    <reviewContext.Provider value={{state, dispatch}}>{props.children}</reviewContext.Provider>
  )
}

export default ReviewProvider
import React, { useContext, useState } from 'react'
import reviewContext from '../../context/ReviewContext'
import ReviewBody from './ReviewBody';

const Reviews = () => {
    const [revState] = useState({head : "What Our clients are saying"});
    const {state : {reviewData}, dispatch} = useContext(reviewContext);
 
  return (
    <div className="reviews">
        <div className="container">
            <h2 className="main_head p-[15px] animation" >{revState.head}</h2>
                <div className="row">
                    {
                        reviewData.length > 0 ? reviewData.map( (review, index) => (
                            <ReviewBody review={review} key={index} />
                        ) ) : ''
                    }
                </div>
            
        </div>
    </div>
  )
}

export default Reviews
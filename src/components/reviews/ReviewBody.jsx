import React from 'react';
import {BsStar,BsFillStarFill} from 'react-icons/bs';
import {LazyLoadImage} from 'react-lazy-load-image-component'

const ReviewBody = ({review}) => {

  const loopStar = (num) => {
    let star = [];

    for(let i=0; i < parseInt(num) ; i++){
          if(i < num){
              star.push(<BsFillStarFill className='reviews__body__content__info__rating__icon' key={i}/>);
            }else{
              star.push(<BsStar className='reviews__body__content__info__rating__icon'/>);
          }
    }

    return star;
  }

  return (
    <div className="col-4 p-[15px]">
        <div className="reviews__body animation">
            <div className="reviews__body__content">
                <div className="reviews__body__content__img">
                    <LazyLoadImage src={review.image} alt={review.name + '\'s Image'} />
                </div>
                <div className="reviews__body__content__info">
                    <div className="reviews__body__content__info__name">{review.name}</div>
                    <div className="reviews__body__content__info__rating">{ loopStar(review.stars) }</div>
                    <div className="reviews__body__content__info__comment">{review.comment}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewBody
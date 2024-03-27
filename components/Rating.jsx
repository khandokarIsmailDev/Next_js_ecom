import React from 'react';

const Rating = ({rating}) => {
    const roundRating = Math.round(rating)
    let filted = Array(roundRating).fill('/svg/star.svg')
    return (
        <div className="mt-3 flex items-center justify-start gap-1">
                {
                    filted.map((star,index)=>(
                        <img key={index} src={star} width="20px" alt="rating" />
                    ))
                }
                
              </div>
    );
};

export default Rating;
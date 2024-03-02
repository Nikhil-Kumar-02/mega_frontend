import React from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = ({setRating}) => {
    

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index);
  
    return (
      <div className='App'>
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
          size={25}
          allowFraction
          transition
          style={{backgroundColor : '#161D29'}}
        />
      </div>
    )
};

export default StarRating;

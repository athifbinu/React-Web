import React from 'react'

function Card(props) {
  return (
    <div className='Card'>
      <img src={props.imgSrc} alt="" />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.comment}</p>
      <button >Add to Cart</button>


    </div>
  )
}

export default Card

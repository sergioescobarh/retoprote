import './card.scss';
import React from 'react'

export default function Cards({image,title,price}) {
  return (
    <div className='card'>
        <img className='img' src={image} alt="" />
        <h4>{title}</h4>
        <div>{price}$</div>
    </div>
  )
}

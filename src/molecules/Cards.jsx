import './card.scss';
import React, { useEffect } from 'react'

export default function Cards({image,title,price,id, items,allItems, setItems, setAllItems}) {
  

  
    const deleteOne = ()=>{
      let products = allItems;
      console.log(id);
      products.splice(id,1);
      console.log(products);
        setAllItems(products);
        setItems(products);
        return {allItems, items}
    }

  


  return (
    <div className='card'>
        <img className='img' src={image} alt="" />
        <h4>{title}</h4>
        <div>{price}$</div>
        <button type='button' onClick={deleteOne}>Eliminar</button>
    </div>
  )
}

import React from 'react'
import './cardContainer.scss';
import { useEffect, useState } from 'react'
import Card from '../molecules/Cards'
const API = 'https://fakestoreapi.com/products';
// const API = 'https://rickandmortyapi.com/api/character';

export default function CardContainer() {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch(API)
        .then(response => response.json())
        .then(data => setProducts(data))
    } , []);

  return (
    <div className='container'>
        {products.map( (e) => <Card image={e.image} title={e.title} price={e.price}/>  )}
    </div>
  )
}

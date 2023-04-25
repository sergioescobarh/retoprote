import './home.scss'
import Header from '../organisms/Header';
import React from 'react'
// import { useEffect, useState } from 'react';
import useAPIfetch from '../hooks/useAPIfetch';
import CardContainer from '../organisms/CardContainer';
const API = "https://fakestoreapi.com/products";


export default function Home() {
    const [items , setItems , allItems , setAllItems] = useAPIfetch(API)

console.log('este',items);
    return (
    <div className='home'>
        <Header/>  
        <main>
            <CardContainer items={items}  setItems={setItems}  allItems={allItems}  setAllItems={setAllItems} />
        </main>
    </div>
    )
}


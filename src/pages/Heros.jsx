import { useEffect, useState } from 'react';

import Header from '../organisms/Header';
// import CardContainer from '../organisms/CardContainer';
// import useApiHeros from '../hooks/useApiHeros';

export default function Heros() {
  
  const [items , setItems] =useState([]);
  const [allItems , setAllItems] =useState([]);

  // const listHeros = ()=> {
    
  //     const heros = [1,2,3,4,5,6,7,8,9,10]; 
  //     let list =heros.map((e)=>{
  //       let hero=null;
  //       fetch('https://www.superheroapi.com/api.php/9787633674583710/'+e)
  //       .then(response=>response.json())
  //     .then(data => hero=data)
  //     return hero
  //     })
  //     setItems(list)
  //     console.log(items)
  //     return {items,allItems}
    
  // };
  
  const array =[]
  const list = ()=>{
    for (let i=1;i<20;i++){
      const url = 'https://www.superheroapi.com/api.php/9787633674583710/'+ i;
      array.push(url);
      // setItems(array)
      console.log(array);
    };
    
    Promise.all(array.map(item =>
      fetch(item)
        .then(response => response.json())
    )).then(data => {
      setItems(data)
      setAllItems(data)
      console.log('data',data);
    }).catch(error => {
      console.log(error);
    })
    
     
  }
  console.log('items',items);
    
  

  return (
    <div className='heros'>
      <Header  />
      <button onClick={list}>heros</button>
      {items.map((i)=> <img src={i.image.url} alt="" key={i.id}/> )}
      
          
    </div >
  )
}

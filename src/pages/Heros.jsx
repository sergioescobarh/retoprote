import { useState } from 'react';
import './heros.scss';
import Header from '../organisms/Header';
import HerosContainer from '../organisms/HerosContainer';
// import CardContainer from '../organisms/CardContainer';
// import useApiHeros from '../hooks/useApiHeros';

export default function Heros() {
  
  const [items , setItems] =useState([]);
  const [allItems , setAllItems] =useState([]);

  
  const array =[]
  const list = ()=>{
    for (let i=1;i<21;i++){
      const url = 'https://www.superheroapi.com/api.php/9787633674583710/'+ i;
      array.push(url);
      // setItems(array)
      console.log(array);
      setPoster(false)
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
    

  const [poster,setPoster] = useState(true);
  

  return (
    <div className='heros'>
      <Header  />
      {poster===true && 
      <section className='poster'>
        <button onClick={list}>Lista tus heroes favoritos aqui</button>
        <img src="https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg" alt="" />
      </section>}
      
      {poster===false && 
        <section className='cardsContainer'>
          {items.map((i)=> <HerosContainer image={i.image.url} powerstats={i.powerstats} key={i.id} />   )}
        </section>}
      
      
          
    </div >
  )
}

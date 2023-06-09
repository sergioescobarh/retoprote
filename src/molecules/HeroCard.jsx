import React, { useState } from 'react'
import './heroCard.scss';
export default function HeroCard({image,powerstats,name}) {

    const [card,setCard] =useState(true);
    const turnCard= ()=>{
        setCard(!card);
    };

  return (
    <div className='imageContainer' onClick={turnCard}>
        {card===true && (<div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        </div>)}
        
        {card===false && (<section>
        <h3>{name}</h3>
        <div>  intelligence   {powerstats.intelligence}</div>
        <div>  strength  {powerstats.strength}</div>
        <div>  speed  {powerstats.speed}</div>
        <div>  durability  {powerstats.durability}</div>
        <div>  power  {powerstats.power}</div>
        <div>  combat  {powerstats.combat}</div>
        </section>)}
        
    </div>
  )
}

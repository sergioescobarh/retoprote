import React from 'react'
import HeroCard from '../molecules/HeroCard'
import './herosContainer.scss';

export default function HerosContainer({image,powerstats,name}) {
  return (
    <div className='list'>
        <HeroCard name={name} image={image} powerstats={powerstats}/>
    </div>
  )
}

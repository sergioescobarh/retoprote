import React from 'react'
import HeroCard from '../molecules/HeroCard'
import './herosContainer.scss';

export default function HerosContainer({image,powerstats}) {
  return (
    <div className='list'>
        <HeroCard image={image} powerstats={powerstats}/>
    </div>
  )
}

import './home.scss'
import Header from '../organisms/Header';
import React from 'react'
import CardContainer from '../organisms/CardContainer';


export default function Home() {
    return (
    <div className='home'>
        <header>  <Header/>  </header>
        <main>
            <CardContainer/>
        </main>
    </div>
    )
}


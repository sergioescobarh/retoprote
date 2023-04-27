import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
          <Link className='link' to='/'>Products</Link>
          <Link className='link' to='/heros'>Heros</Link>
    </header>
  )
}

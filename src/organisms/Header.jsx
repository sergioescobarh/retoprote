import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
          <Link to='/'>home</Link>
          <Link to='/heros'>heros</Link>
    </header>
  )
}

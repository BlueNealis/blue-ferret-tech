import React from 'react'
import './NavBar.css'

const NavBar = ({resetForm}) => {
  return (<header className='nav-bar'>
    <div className='nav-element'>
      <h1 onClick={resetForm} className='logo-text'>Ferret Customs & Tech</h1>
    </div>
    <div className='nav-element'>
      <h1>Menu</h1>
      <img></img>
    </div>
    </header>
  )
}

export default NavBar

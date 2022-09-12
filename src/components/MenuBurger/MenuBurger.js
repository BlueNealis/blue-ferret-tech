import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuBurger.css'

function MenuBurger() {
  return(
    <div className='menu-box'>
    <Link to='/builds'>
      <div className='menu-section'>
        <h1>Shop My Builds</h1>
      </div>
    </Link>
    <Link to='/AboutMe'>
      <div className='menu-section'>
        <h1>About Me</h1>
      </div>
    </Link>
    <Link to='/MyCart'>
      <div className='menu-section'>
        <h1>View Cart</h1>
      </div>
    </Link>
    </div>)
}

export default MenuBurger

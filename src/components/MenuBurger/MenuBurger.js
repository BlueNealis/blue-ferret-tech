import React, {useState} from 'react'
import './MenuBurger.css'

function MenuBurger() {
  const [isVisible, setIsVisible] = useState(false)
  return(
    <div className='menu-box'>
      <div className='menu-section'>
        <h1>Shop My Builds</h1>
      </div>
      <div className='menu-section'>
        <h1>About Me</h1>
      </div>
      <div className='menu-section'>
        <h1>View Cart</h1>
      </div>
    </div>
  )
}

export default MenuBurger

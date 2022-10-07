import React, {useState} from 'react'
import MenuBurger from '../MenuBurger/MenuBurger'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({resetForm}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (<header className='nav-bar'>
    <div className='nav-element'>
      <Link to='/'>
        <h1 onClick={resetForm} className='logo-text'>Ferret Customs & Tech</h1>
      </Link>
    </div>
    <div className='nav-element'>
      <h1 className='menu' onClick={(e) => setIsMenuVisible(!isMenuVisible)}>Menu</h1>
    {isMenuVisible && <MenuBurger />}
    </div>
    </header>
  )
}

export default NavBar

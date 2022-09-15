import React, {useState} from 'react'
import MenuBurger from '../MenuBurger/MenuBurger'
import './NavBar.css'
import mainLogo from './ferret.png'

const NavBar = ({resetForm}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (<header className='nav-bar'>
  <img src={mainLogo} className='ferretLogo' alt='ferret logo'/>
    <div className='nav-element'>
      <h1 onClick={resetForm} className='logo-text'>Ferret Customs & Tech</h1>
    </div>
    <div className='nav-element'>
      <h1 className='menu' onClick={(e) => setIsMenuVisible(!isMenuVisible)}>Menu</h1>
    {isMenuVisible && <MenuBurger />}
    </div>
    </header>
  )
}

export default NavBar

import './Dashboard.css';
import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar.js'
import AptWindow from '../AppointmentWindow/AptWindow.js'
import Form from '../Form/Form'
import BuildsPage from '../BuildsPage/BuildsPage'

function Dashboard() {
  const [formType, setFormType] = useState('')

  const handleClick = (e) => {
      setFormType(e.target.id);
  }

  const resetForm = (e) => {
    setFormType('')
  }

  return(
    <div className='app'>
      <NavBar resetForm={resetForm}/>
      {!formType && <AptWindow handleClick={handleClick}/>}
      {formType && <Form type={formType} />}
      <footer>
        <h1 style={{fontSize:'.5rem'}}>Background Photo by
        <a href="https://unsplash.com/es/@fellowshipbattlecreek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ron Kenney</a> on
        <a href="https://unsplash.com/s/photos/south-carolina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </h1>
      </footer>
    </div>
  )
}

export default Dashboard

import React, { useState } from 'react'
import './AptWindow.css'
import Appt from '../Appointment/Appt'
import Form from '../Form/Form'

const AptWindow = () => {

  const [view, setView] = useState('main-appts')
  const handleView = (event) => {
    // {id} = event.target

  }

  return(
  <div className='appt-block'>
  <div className='wrapper'>
    <div className='main-appts'>
      <Appt id='hardware' title='Hardware Repair/ Cleaning Services' description='Computer overheating or needs a good cleaning?'/>
      <Appt id='software' title='Software Service' description='Need help installing a program? Device acting slow and could have malaware?'/>
      <Appt id='building' title='Computer Building' description='Got some parts you want to put together? Have an idea for a computer but don’t know where to start? This is for you!'/>
    </div>
    <Appt id='general' title='Not Sure? You can request a consult here.' />
  </div>
  <div className='formWrapper'>
    <Form bleh/>
  </div>
  </div>
)
}

export default AptWindow

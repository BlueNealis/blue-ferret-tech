import React, { useState } from 'react'
import './ApptWindow.css'
import Appt from '../Appointment/Appt'

const AptWindow = ({handleClick}) => {
  const [view, setView] = useState('main-appts')

  return(
  <div className='appt-block'>
    <div className='main-appts'>
      <Appt handleClick={handleClick} id='hardware' title='Hardware Repair/ Cleaning Services' description='Computer overheating or needs a good cleaning?'/>
      <Appt handleClick={handleClick} id='software' title='Software Service' description='Need help installing a program? Device acting slow and could have malaware?'/>
      <Appt handleClick={handleClick} id='building' title='Computer Building' description='Got some parts you want to put together? Have an idea for a computer but don’t know where to start? This is for you!'/>
    </div>
    <Appt handleClick={handleClick} id='general' title='Not Sure? You can request a consult here.' />
  </div>
)
}

export default AptWindow

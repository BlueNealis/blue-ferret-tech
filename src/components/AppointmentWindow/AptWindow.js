import React, { useState } from 'react'
import './App.css';
import Appt from '../Appointment/Appt'
import Form from '../Form/Form'
import {Link, Route} from 'react-router-dom'

const AptWindow = ({handleClick}) => {

  const [view, setView] = useState('main-appts')

  return(
  <div className='block'>
    <div className='main-appts'>
      <Appt onClick={handleClick} id='hardware' title='Hardware Repair/ Cleaning Services' description='Computer overheating or needs a good cleaning?'/>
      <Appt onClick={handleClick} id='software' title='Software Service' description='Need help installing a program? Device acting slow and could have malaware?'/>
      <Appt onClick={handleClick} id='building' title='Computer Building' description='Got some parts you want to put together? Have an idea for a computer but don’t know where to start? This is for you!'/>
    </div>
    <Appt onClick={handleClick} id='general' title='Not Sure? You can request a consult here.' />
  </div>
)
}

export default AptWindow

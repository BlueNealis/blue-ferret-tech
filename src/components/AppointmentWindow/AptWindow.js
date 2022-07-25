import React from 'react'
import './AptWindow.css'
import Appt from '../Appointment/Appt'
const AptWindow = () => {

  return(<div className='apt-block'>
  <Appt title='Hardware Repair/ Cleaning Services' description='Computer overheating or needs a good cleaning?'/>
  <Appt title='Software Service' description='Need help installing a program? Device acting slow and could have malaware?'/>
  <Appt title='Computer Building' description='Got some parts you want to put together? Have an idea for a computer but don’t know where to start? This is for you!'/>
  </div> )

}

export default AptWindow

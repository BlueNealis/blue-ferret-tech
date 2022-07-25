import React from 'react'
import './Appt.css'

const Appt = ({title, description}) => {
  return (<div className='appt-card'>
    <h1 className='appt-title'>{title}</h1>
    <p className='appt-description'>{description}</p>
      </div>)
}
export default Appt

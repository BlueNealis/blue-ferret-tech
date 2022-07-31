import React from 'react'
import './Appt.css'

const Appt = ({title, description}) => {
  let className = ''
  {description ? className = 'appt-card' : className = 'general-card'}

  return (<div className={`${className}`}>
    <h1 className='appt-title'>{title}</h1>
    {description && <p className='appt-description'>{description}</p>}
      </div>)
}
export default Appt

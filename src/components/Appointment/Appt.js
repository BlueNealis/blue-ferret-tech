import React from 'react'
import './Appt.css'

const Appt = ({title, description, id, handleClick}) => {
  let className = ''
  {description ? className = 'appt-card' : className = 'general-card'}

  return (<div id={id} onClick={handleClick} className={`${className}`}>
    <h1 className='appt-title'>{title}</h1>
    {description && <p className='appt-description'>{description}</p>}
      </div>)
}
export default Appt

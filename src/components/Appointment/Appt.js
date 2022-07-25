import React from 'react'
import './Appt.scss'

const Appt = ({title, description}) => {
  return (<div className='appt-card'>
    <h1>{title}</h1>
    <p>{description}</p>
      </div>)
}
export default Appt

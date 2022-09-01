import React from 'react'

const Checkbox = ({label, value, onChange}) => {
  return(
    <label>
      <input className='checkbox' type="checkbox" checked={value} onChange={onChange} />
    {label}
  </label>
  )
}

export default Checkbox

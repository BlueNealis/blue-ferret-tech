import React from 'react'
import Checkbox from './Checkbox'
const CustomForm = ({type, checked, handleChange}) => {
let label = {}

if(type === 'Hardware') {
  label['first'] = 'Repair'
  label['second'] = 'Cleaning'
} else if (type === 'Software') {
  label['first'] = 'Installation/Software Setup'
  label['second'] = 'Virus Removal/Diagnosis'
} else {
  label['first'] = 'Part Installation'
  label['second'] = 'Custom Build (Requires Consult)'
}

  return(<>
    <Checkbox label={label.first} checked={checked} onChange={handleChange}/>
    <Checkbox label={label.second} checked={checked} onChange={handleChange}/>
    </>
  )
}

export default CustomForm

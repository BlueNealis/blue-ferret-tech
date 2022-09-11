import React from 'react'
const CustomForm = ({type, checked, handleChange}) => {
let label = {}

if(type === 'hardware') {
  label['first'] = 'Repair'
  label['second'] = 'Cleaning'
} else if (type === 'software') {
  label['first'] = 'Installation/Software Setup'
  label['second'] = 'Virus Removal/Diagnosis'
} else {
  label['first'] = 'Part Installation'
  label['second'] = 'Custom Build (Requires Consult)'
}

  return(<>
  <label>
    <input type='checkbox' checked={checked} onChange={handleChange}/>
    {label.first}
  </label>
  <label>
    <input type='checkbox' checked={checked} onChange={handleChange}/>
    {label.second}
  </label>
    </>
  )
}

export default CustomForm

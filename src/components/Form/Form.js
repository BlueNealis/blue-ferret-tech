import '../AppointmentWindow/ApptWindow.css'
import React, {useState} from 'react'
import CustomForm from './CustomForm'
import Checkbox from './Checkbox'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Form = ({type}) => {
const [checked, setChecked] = React.useState(false)
const [phoneNumber, setPhoneNumber] = React.useState()

const handleChange = () => {
  setChecked(!checked)
}

  return (
    <div className='appt-block'>
      <div className='form-block'>
      <form>
        <input type='text' placeholder='Name: First Last'></input>
          <br/>
        <input type='text' placeholder='email@example.com'></input>
          <br/>
          <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}/>
          <br/>
        <Checkbox label='Mobile' checked={checked} onChange={handleChange}/>
        <Checkbox label='Home' checked={checked} onChange={handleChange}/>
          <br/>
          {type !== 'general' && <CustomForm type={type}/>}
          <br/>
        <Checkbox label='Desktop' checked={checked} onChange={handleChange}/>
        <Checkbox label='Laptop' checked={checked} onChange={handleChange}/>
          <br/>
        <input type='text' Placeholder='Other enter'></input>
          <br/>
        <input type='text' placeholder='Any additional details I should know?'></input>
        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Form

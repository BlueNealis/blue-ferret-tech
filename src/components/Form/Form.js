import '../AppointmentWindow/ApptWindow.css'
import React, {useState} from 'react'
import CustomForm from './CustomForm'
import Checkbox from './Checkbox'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Form = ({type}) => {
const [checked, setChecked] = React.useState(false)
const [phoneNumber, setPhoneNumber] = React.useState()
const [otherDevice, setOtherDevice] = React.useState('')
const [clientDetails, setClientDetails] = React.useState('')
const [clientName, setClientName] = React.useState('')
const [clientEmail, setClientEmail] = React.useState('')

const handleChange = () => {
  setChecked(!checked)
}

  return (
    <div className='appt-block'>
      <div className='form-block'>
      <form>
        <input value={clientName} onChange={setClientName} type='text' placeholder='Name: First Last'></input>
          <br/>

        <input
          value={clientEmail}
          onChange={setClientEmail}
          type='text'
          placeholder='email@example.com'></input>

          <br/>
          <PhoneInput
            country= "US"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            />
          <br/>

        <Checkbox
          label='Mobile'
          checked={checked}
          onChange={handleChange}/>

        <Checkbox
          label='Home'
          checked={checked}
          onChange={handleChange}/>

          <br/>
          {type !== 'general' && <CustomForm type={type}/>}
          <br/>

        <Checkbox
          label='Desktop'
          checked={checked}
          onChange={handleChange}/>

        <Checkbox
          label='Laptop'
          checked={checked}
          onChange={handleChange}/>

          <br/>

        <Checkbox label='Other '
        checked={checked}
        onChange={handleChange}/>

        <input
        value={otherDevice}
        onChange={setOtherDevice}
        type='text'
        Placeholder='Describe'></input>

          <br/>
          
        <input
        value={clientDetails}
        onChange={setClientDetails}
        type='text'
        placeholder='Any additional details I should know?'></input>

        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Form

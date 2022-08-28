import '../AppointmentWindow/ApptWindow.css'
import React, {useState} from 'react'
import CustomForm from './CustomForm'
import Checkbox from './Checkbox'

const Form = ({type}) => {
const [phoneType, setPhoneTypeChecked] = useState([false, false])
const [deviceType, setDeviceType] = useState([false, false, false])
const [checked, setChecked] = useState(false)
const [inputValues, setInputValues] = useState({phoneNumber: null,
  otherDevice:'',
  clientDetails: '',
  clientName:'',
  clientEmail:''
})
const {clientName, clientEmail, clientDetails, phoneNumber, otherDevice} = inputValues
const handleChange = (e) => {
  const {name, value} = e.target
  setInputValues({...inputValues, [name]: value})

  setChecked(!checked)
}


  return (
    <div className='appt-block'>
      <form className='form-block'>
        <input value={inputValues.clientName}
        name='clientName'
        onChange={handleChange}
        type='text'
        placeholder='Name: First Last'></input>
          <br/>

        <input
          name='clientEmail'
          value={clientEmail}
          onChange={handleChange}
          type='text'
          placeholder='email@example.com'></input>

          <br/>
          <input
            name='phoneNumber'
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handleChange}
            />
          <br/>

        <Checkbox
          type='phone'
          label='Mobile'
          checked={checked}
          onChange={handleChange}/>

        <Checkbox
          type='phone'
          label='Home'
          checked={checked}
          onChange={handleChange}/>

          <br/>
          {type !== 'general' && <CustomForm type={type}/>}
          <br/>

        <Checkbox
          type='device'
          label='Desktop'
          checked={deviceType[0]}
          onChange={(e) => setDeviceType([!deviceType[0], false, false])}/>

        <Checkbox
          type='device'
          label='Laptop'
          checked={deviceType[1]}
          onChange={(e) => setDeviceType([false, !deviceType[1], false])}/>

        <Checkbox
          type='device'
          label='Other '
          checked={deviceType[2]}
          onChange={(e) => setDeviceType([false, false, !deviceType[2]])}/>

        <input
        name='otherDevice'
        value={otherDevice}
        onChange={handleChange}
        type='text'
        placeholder='Describe'></input>

          <br/>

        <input
        name='clientDetails'
        value={clientDetails}
        onChange={handleChange}
        type='text'
        placeholder='Any additional details I should know?'></input>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form

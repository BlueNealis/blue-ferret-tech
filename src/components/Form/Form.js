import '../AppointmentWindow/ApptWindow.css'
import React, {useState} from 'react'
import CustomForm from './CustomForm'
import Checkbox from './Checkbox'
import './Form.css'

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
        <label>Name: First Last</label>
        <br/>
        <input className='text-input'
        value={inputValues.clientName}
        name='clientName'
        onChange={handleChange}
        type='text'
        placeholder='Name'></input>
          <br/>
        <label>Email:</label>
        <br/>
        <input
          name='clientEmail'
          className='text-input'
          value={clientEmail}
          onChange={handleChange}
          type='text'
          placeholder='email@example.com'></input>

          <br/>
          <label>Phone Number: </label>
          <br/>
          <input
            name='phoneNumber'
            className='text-input phone'
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handleChange}/>
        <div className='checkbox-wrapper'>
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
          </div>

          <br/>
          <div className='checkbox-wrapper'>
            {type !== 'general' && <CustomForm type={type}/>}
          </div>
          <br/>
        <div className='checkbox-wrapper'>
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
          </div>

          <br/>

        <input
        name='clientDetails'
        className='text-input description'
        value={clientDetails}
        onChange={handleChange}
        type='text'
        placeholder='Any additional details I should know?'></input>
          <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form

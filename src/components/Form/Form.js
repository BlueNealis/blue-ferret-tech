import './App.css';
import React, {useState} from 'react'
import CustomForm from './CustomForm'
import Checkbox from './Checkbox'

const Form = ({type}) => {
const [checked, setChecked] = React.useState(false)

const handleChange = () => {
  setChecked(!checked)
}

  return (
    <div>
    <form>
      <input type='text' placeholder='Name: First Last'></input>
        <br/>
      <input type='text' placeholder='email@example.com'></input>
        <br/>
      <input type='number' placeholder='803-000-0000'></input>
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
  )
}

export default Form

import React from 'react'
import CustomForm from './CustomForm'
const Form = () => {

  return (
    <form>
      <input type='text' placeholder='Name: First Last'></input>
      <input type='text' placeholder='email@example.com'></input>
      <input type='number' placeholder='803-000-0000'></input>
      <checkbox></checkbox>
      <checkbox></checkbox>
      <CustomForm />
      <checkbox></checkbox>
      <input type='text' placeholder='Any additional details I should know?'></input>
    </form>
  )
}

export default Form

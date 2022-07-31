
import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import AptWindow from './components/AppointmentWindow/AptWindow.js'
import Form from './components/Form/Form'
import {Link, Route} from 'react-router-dom'

const App = () => {
  const [formType, setFormType] = useState('')

  const handleClick = (event) => {
      console.log(event.target.id)
      setFormType(event.target.id);
  }

  return (
    <div className="App">
      <NavBar />
      {!formType && <AptWindow handleClick={handleClick}/>}
      {formType && <Form type={formType} />}
    </div>
  );
}

export default App;

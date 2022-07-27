
import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import AptWindow from './components/AppointmentWindow/AptWindow.js'
import FormWindow from './components/FormWindow/FormWindow'
import {Link, Route} from 'react-router-dom'

const App = () => {
  const [formType, setFormType] = useState('')
  const handleClick = (event) => {
      const [ id ] = event.target
      setFormType(id);
  }
  
  return (
    <div className="App">
      <NavBar />
      {!formType && <AptWindow handClick={handleClick}/>}
      {formType && <Form type={formType} />}
    </div>
  );
}

export default App;

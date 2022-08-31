
import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import AptWindow from './components/AppointmentWindow/AptWindow.js'
import Form from './components/Form/Form'
import {Link, Route} from 'react-router-dom'

const App = () => {
  const [formType, setFormType] = useState('')

  const handleClick = (e) => {
      setFormType(e.target.id);
  }

  const resetForm = (e) => {
    setFormType('')
  }

  return (
    <div className="App">
      <NavBar resetForm={resetForm}/>
      {!formType && <AptWindow handleClick={handleClick}/>}
      {formType && <Form type={formType} />}
      <footer>
        <h1 style={{fontSize:'.5rem'}}>Background Photo by
        <a href="https://unsplash.com/es/@fellowshipbattlecreek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ron Kenney</a> on
        <a href="https://unsplash.com/s/photos/south-carolina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </h1>
      </footer>
    </div>
  );
}

export default App;

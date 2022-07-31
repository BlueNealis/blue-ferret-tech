
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import AptWindow from './components/AppointmentWindow/AptWindow.js'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AptWindow />
    </div>
  );
}

export default App;

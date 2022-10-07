import './App.css'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import BuildsPage from './components/BuildsPage/BuildsPage'



function App(){
  return(
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route exact path='/builds'>
        <BuildsPage/>
      </Route>
    </Switch>
  )
}

export default App

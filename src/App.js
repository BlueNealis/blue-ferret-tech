import './App.css'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import BuildsPage from './components/BuildsPage/BuildsPage'
import ProductDetail from './components/ProductDetail/ProductDetail'



function App(){
  const [productId, setProductId] = React.useState('')
  const handleProductSelect = (e) => {

  }

  return(
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route exact path='/builds'>
        <BuildsPage handleSelect={handleProductSelect}/>
      </Route>
      <Route path={`/builds/productID/${1}`}>
        <ProductDetail id={productId}/>
      </Route>
    </Switch>
  )
}

export default App

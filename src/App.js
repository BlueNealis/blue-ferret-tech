import './App.css'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import BuildsPage from './components/BuildsPage/BuildsPage'
import ProductDetail from './components/ProductDetail/ProductDetail'
import React, { useState } from 'react'


function App(){
  const [productId, setProductId] = useState('')
  const handleProductSelect = (e) => {
    setProductId(e.target.name)
  }

  return(
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route exact path='/builds'>
        <BuildsPage handleSelect={handleProductSelect}/>
      </Route>
      <Route path={`/builds/product/${productId}`}>
        <ProductDetail id={productId}/>
      </Route>
    </Switch>
  )
}

export default App

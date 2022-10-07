import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import products from '../productsData.js'
import ProductCard from '../ProductCard/ProductCard'
import './BuildsPage.css'

function BuildsPage({handleSelect}){
  const cards = products.map((product) => {
    return <ProductCard handleSelect={handleSelect}
    title={product.name}
    imgUrl={product.images[0]}
    price={product.price}
    key={product.id}
    id={product.id}/>
  })
  return(
    <div className='background'>
      <NavBar />
      <div className='wrapper'>
        <div className='builds-container'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default BuildsPage

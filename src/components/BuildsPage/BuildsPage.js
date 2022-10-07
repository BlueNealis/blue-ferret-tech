import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import products from '../productsData.js'
import ProductCard from '../ProductCard/ProductCard'
import './BuildsPage.css'

function BuildsPage(){
  const cards = products.map((product) => {
    return <ProductCard title={product.name}
    imgUrl={product.images[0]}
    price={product.price}
    key={product.id}
    id={product.id}/>
  })
  return(
    <>
      <NavBar />
      <div className='builds-container'>
        {cards}
      </div>
    </>
  )
}

export default BuildsPage

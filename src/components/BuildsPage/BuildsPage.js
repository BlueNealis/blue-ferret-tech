import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import products from '../productsData.js'
import ProductCard from '../ProductCard/ProductCard'

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
      <div classname='builds-container'>
        {cards}
      </div>
    </>
  )
}

export default BuildsPage

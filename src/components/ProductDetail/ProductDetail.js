import React from 'react'
import NavBar from '../NavBar/NavBar'
import products from '../productsData.js'
import './ProductDetail.css'

function ProductDetail({id}) {
  const data = products.find((product) => {
    return product.id === parseInt(id)
  })
  const details = data.specs.map((detail) => {
    return <p className='bullet-point'> - {detail}</p>
  })

  return(
    <>
      <NavBar />
      <div className='product-page-wrapper'>
        <div className='detail-container'>
          <img src={data.images[0]}/>
          <div className='details'>
          <h1 className='detail-title'>{data.name}</h1>
          {details}
          <h1 className='detail-price'>{data.price}</h1>
          </div>
        <button className='add-cart-button'> Add To Cart </button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

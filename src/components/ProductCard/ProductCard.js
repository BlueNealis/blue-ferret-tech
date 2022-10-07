import React from 'react'
import './ProductCard.css'
import products from '../productsData'
import { Link } from 'react-router-dom'

function ProductCard({title, price, imgUrl}) {
  let key = 5654;
  return(
  <Link to={`/${title}/${key}`}>
    <div className='product-card'>
      <h1>{title}</h1>
      <img src={imgUrl}/>
      <p>{price}</p>
    </div>
  </Link>
  )
}

export default ProductCard

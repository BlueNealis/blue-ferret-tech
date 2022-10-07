import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({title, price, imgUrl, key}) {
  return(
    <div className='product-card'>
      <Link to={`/${title}/${key}`}>
        <h1>{title}</h1>
        <img src={imgUrl}/>
        <p>{price}</p>
      </Link>
    </div>
  )
}

export default ProductCard

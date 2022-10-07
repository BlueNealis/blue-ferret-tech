import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({title, price, imgUrl, key}) {
  return(
    <>
      <div className='product-card'>
        <Link to={`/${title}/${key}`}>
          <h1 className='entry-title'>{title}</h1>
          <img src={imgUrl}/>
          <div className='call-to-action'>
          <h2>View Details</h2>
          <p className='price'>$ {price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard

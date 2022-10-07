import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({handleSelect, title, price, imgUrl, key}) {
  return(
    <>
      <div className='product-card'>
        <Link onClick={handleSelect} to={`/builds/productID/${key}`}>
          <h1 value={key} className='entry-title'>{title}</h1>
          <img value={key} src={imgUrl}/>
          <div value={key} className='call-to-action'>
          <h2 value={key} >View Details</h2>
          <p value={key} className='price'>$ {price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard

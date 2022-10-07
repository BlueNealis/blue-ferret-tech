import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({handleSelect, title, price, imgUrl, id}) {
  return(
    <>
      <div className='product-card'>
        <Link onClick={handleSelect} to={`/builds/product/${id}`}>
          <h1 name={id} className='entry-title'>{title}</h1>
          <img name={id} src={imgUrl}/>
          <div name={id} className='call-to-action'>
          <h2 name={id} >View Details</h2>
          <p name={id} className='price'>$ {price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard

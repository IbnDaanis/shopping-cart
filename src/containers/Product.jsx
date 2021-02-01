import React from 'react'
import { products } from '../data/products'
import '../styles/Product.scss'

const Product = ({ match }) => {
  const id = match.params.id
  console.log(products[id])
  return (
    <div className='product-container'>
      <h1 className='title'>{products[id].name}</h1>
      <div className='product-details'>
        <div className='product-details-image'>
          <img src={products[id].path} alt={products[id].name} />
        </div>
      </div>
    </div>
  )
}

export default Product

import React from 'react'
import { products } from '../data/products'
import '../styles/Product.scss'

const Product = ({ match }) => {
  const id = match.params.id
  console.log(products[id])
  return (
    <div className='product-container'>
      <h1 className='title'>{products[id].name}</h1>
    </div>
  )
}

export default Product

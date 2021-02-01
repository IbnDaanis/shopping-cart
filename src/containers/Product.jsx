import React from 'react'

const Product = ({ match }) => {
  console.log(match.params.id)
  console.log('hi')
  return <div>Product</div>
}

export default Product

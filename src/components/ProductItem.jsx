import React, { useState } from 'react'

const ProductItem = ({ shoppingCart, setShoppingCart, product }) => {
  const [qty, setQty] = useState(1)
  const handleClick = product => {
    setQty(qty => qty + 1)
    setShoppingCart(shoppingCart => ({
      ...shoppingCart,
      [product.name]: { product: product.name, qty },
    }))
  }
  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={() => handleClick(product)}>Add to Cart</button>
    </>
  )
}

export default ProductItem

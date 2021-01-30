import React, { useState } from 'react'

const ProductItem = ({ shoppingCart, setShoppingCart, product }) => {
  const [qty, setQty] = useState(1)
  const handleClick = product => {
    setQty(qty => qty + 1)
    const existItem = shoppingCart.cartItems.find(
      x => x.product === product.name
    )

    if (existItem) {
      setShoppingCart({
        cartItems: shoppingCart.cartItems.map(x =>
          x.product === existItem.product ? { ...x, qty } : x
        ),
      })
    } else {
      setShoppingCart({
        cartItems: [...shoppingCart.cartItems, { product: product.name, qty }],
      })
    }
  }
  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={() => handleClick(product)}>Add to Cart</button>
    </>
  )
}

export default ProductItem

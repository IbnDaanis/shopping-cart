import React, { useState, useEffect } from 'react'

export const CartItemsContext = React.createContext('')

const CartContext = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    cartItems: [],
  })

  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    console.log({ shoppingCart, totalItems })
    setTotalItems(
      shoppingCart.cartItems.reduce((acc, item) => acc + item.qty, 0)
    )
  }, [shoppingCart, totalItems])

  return (
    <CartItemsContext.Provider
      value={{ shoppingCart, setShoppingCart, totalItems }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}

export default CartContext

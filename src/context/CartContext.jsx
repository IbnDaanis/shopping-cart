import React, { useState, useEffect } from 'react'

export const CartItemsContext = React.createContext('')

const CartContext = ({ children }) => {
  const initialShoppingCart = JSON.parse(
    localStorage.getItem('shoppingCart')
  ) || { cartItems: [] }

  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const itemCount = shoppingCart.cartItems.reduce(
      (acc, item) => acc + item.qty,
      0
    )
    setTotalItems(itemCount)
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
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

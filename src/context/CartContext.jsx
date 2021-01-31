import React from 'react'

export const CartItemsContext = React.createContext('')
const CartContext = ({ children }) => {
  return (
    <CartItemsContext.Provider value={{ cartItems: [] }}>
      {children}
    </CartItemsContext.Provider>
  )
}

export default CartContext

import React from 'react'

const Cart = ({ shoppingCart }) => {
  console.log(shoppingCart.cartItems)
  return (
    <div>
      {shoppingCart.cartItems.map(item => (
        <div className='item' key={item.product}>
          <h2>{item.product}</h2>
          <p>{item.qty}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart

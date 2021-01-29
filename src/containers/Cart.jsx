import React from 'react'

const Cart = ({ shoppingCart }) => {
  console.log(Object.entries(shoppingCart))
  return (
    <div>
      {Object.entries(shoppingCart).map(item => (
        <div key={item[1].product}>
          <h3>{item[1].product}</h3>
          <p>{item[1].qty}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart

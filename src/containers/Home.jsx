import React from 'react'
import { products } from '../data/products'

const Home = ({ setShoppingCart }) => {
  const handleClick = product => {
    setShoppingCart(shoppingCart => [...shoppingCart, product])
  }
  return (
    <div>
      <h1>Home</h1>
      {products.map((product, index) => (
        <>
          <h2 key={index}>{product.name}</h2>
          <button onClick={() => handleClick(product)}>Add to Cart</button>
        </>
      ))}
    </div>
  )
}

export default Home

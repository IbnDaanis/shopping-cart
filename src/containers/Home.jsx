import React from 'react'
import ProductItem from '../components/ProductItem'
import { products } from '../data/products'

const Home = ({ setShoppingCart, shoppingCart }) => {
  return (
    <div>
      <h1>Home</h1>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          product={product}
        />
      ))}
    </div>
  )
}

export default Home

import React from 'react'
import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'

const Home = ({ setShoppingCart, shoppingCart }) => {
  return (
    <section className='home'>
      <h1 className='title noselect'>Home</h1>
      <div className='products'>
        {products.map((product, index) => (
          <ProductItem
            key={index}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default Home

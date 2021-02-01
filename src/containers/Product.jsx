import { useState, useContext } from 'react'
import { products } from '../data/products'
import { CartItemsContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../styles/Product.scss'
import { motion } from 'framer-motion'

const Product = ({ match, history }) => {
  const item = products[match.params.id]

  const {
    shoppingCart: { cartItems },
    setShoppingCart,
  } = useContext(CartItemsContext)

  const cartItem = cartItems.find(cartItem => cartItem.product === item.name)

  const [qty, setQty] = useState(cartItem ? cartItem.qty : 1)

  const handleClick = product => {
    console.log({ qty })
    const existItem = cartItems.find(item => item.product === product.name)

    if (existItem) {
      setShoppingCart({
        cartItems: cartItems.map(item =>
          item.product === existItem.product ? { ...item, qty } : item
        ),
      })
    } else {
      setShoppingCart({
        cartItems: [
          ...cartItems,
          {
            id: product.id,
            product: product.name,
            price: product.price,
            qty,
            path: product.path,
          },
        ],
      })
    }

    history.push('/cart')
  }

  const transition = { ease: 'easeInOut' }

  return (
    <div className='product-screen'>
      <motion.div
        className='product-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ...transition, duration: 1.5 }}
      >
        <Link to='/'>
          <button className='back-button'>Go Back</button>
        </Link>
        <div className='product-details'>
          <motion.div
            className='product-details-image'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ ...transition, duration: 1 }}
          >
            <img src={item.path} alt={item.name} />
          </motion.div>
          <motion.div
            className='product-details-description'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '130%' }}
            transition={{ ...transition, duration: 1, delay: 0.1 }}
          >
            <h1 className='title'>{item.name}</h1>
            <p className='details'>{item.details}</p>
            <div className='quantity'>
              <label htmlFor='quantity'>Quantity: </label>
              <select
                value={qty}
                onChange={({ target }) => setQty(+target.value)}
                id='quantity'
              >
                {[1, 2, 3, 4, 5, 6, 8, 9, 10].map(number => (
                  <option key={number} defaultValue={qty}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div className='add-to-cart'>
              <button
                className='add-to-cart-button'
                onClick={() => handleClick(item)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Product

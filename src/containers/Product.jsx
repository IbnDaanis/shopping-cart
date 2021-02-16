import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { products } from '../data/products'
import { CartItemsContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../styles/Product.scss'
import { motion } from 'framer-motion'

const Product = ({ match }) => {
  const item = products[match.params.id]

  const {
    shoppingCart: { cartItems },
    setShoppingCart,
  } = useContext(CartItemsContext)

  const cartItem = cartItems.find(cartItem => cartItem.product === item.name)

  const [qty, setQty] = useState(cartItem ? cartItem.qty : 1)

  const handleClick = product => {
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
  }

  const transition = { ease: 'easeInOut' }
  const button = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'backInOut',
        type: 'tween',
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'backInOut',
        type: 'tween',
        stiffness: 100,
      },
    },
  }

  return (
    <div className='screen'>
      <motion.div className='product-container'>
        <Link to='/'>
          <motion.button
            className='back-button'
            variants={button}
            initial='hidden'
            animate='show'
            exit='hidden'
            whileHover={{ scale: 1.05 }}
          >
            Go Back
          </motion.button>
        </Link>
        <div className='product-details'>
          <motion.div
            className='product-details-image'
            initial={{ x: '-75vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-75vw' }}
            transition={{ ...transition, duration: 1 }}
          >
            <motion.img
              src={item.path}
              alt={item.name}
              whileHover={{
                scale: 1.1,
                transition: { ease: 'easeIn', duration: 0.25 },
              }}
            />
          </motion.div>
          <motion.div
            className='product-details-description'
            initial={{ x: '75vw' }}
            animate={{ x: 0 }}
            exit={{ x: '75vw' }}
            transition={{ ...transition, duration: 1 }}
          >
            <h1 className='title'>{item.name}</h1>
            <p className='details'>{item.details}</p>
            <div className='bottom-details'>
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
              <div className='price noselect'>
                <motion.h2
                  whileHover={{
                    scale: 1.2,
                    color: 'rgb(0,206,245)',
                  }}
                >
                  £{item.price.toFixed(2)}
                </motion.h2>
              </div>
            </div>
            <div className='add-to-cart'>
              <button
                className='add-to-cart-button'
                onClick={() => handleClick(item)}
                disabled={cartItem?.qty === 10 && qty === 10}
              >
                {cartItem?.qty > 0
                  ? cartItem?.qty === 10 && qty === 10
                    ? 'Maximum Quantity in Cart'
                    : 'Update Quantity'
                  : 'Add to Cart'}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

Product.propTypes = {
  match: PropTypes.object,
}

export default Product

import { useContext } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import PropTypes from 'prop-types'
import { ProductItemInCart } from '../components/ProductItem'
import { CartItemsContext } from '../context/CartContext'
import '../styles/Cart.scss'

const Cart = ({ history }) => {
  const {
    shoppingCart: { cartItems },
    setShoppingCart,
  } = useContext(CartItemsContext)

  const updateQuantity = (target, index) => {
    setShoppingCart({
      cartItems: cartItems.map((x, i) => (i === index ? { ...x, qty: +target.value } : x)),
    })
  }

  const removeProductFromCart = product => {
    setShoppingCart({
      cartItems: cartItems.filter(item => item.product !== product.product),
    })
  }

  const checkout = () => {
    setShoppingCart({ cartItems: [] })
    history.push('/')
  }

  const totalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)

  const transition = { ease: [0.43, 0.13, 0.23, 0.96] }

  return (
    <AnimateSharedLayout>
      <motion.div layout className='screen'>
        <motion.section
          className='cart-section'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ...transition, duration: 0.75 }}
        >
          <h1 className='title'>Cart</h1>
          <div className='products'>
            {!cartItems.length ? (
              <h1>There are no items in your cart</h1>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <motion.div key={index}>
                    <ProductItemInCart
                      item={item}
                      index={index}
                      updateQuantity={updateQuantity}
                      removeProductFromCart={removeProductFromCart}
                    />
                  </motion.div>
                ))}
              </>
            )}
          </div>
          {cartItems.length > 0 && (
            <motion.div className='checkout' layout transition={{ ease: 'easeInOut', delay: 0 }}>
              <h2 className='total'>Total: £{totalPrice()}</h2>
              <button className='place-order' onClick={checkout}>
                Place Order
              </button>
            </motion.div>
          )}
        </motion.section>
      </motion.div>
    </AnimateSharedLayout>
  )
}

Cart.propTypes = {
  history: PropTypes.object,
}

export default Cart

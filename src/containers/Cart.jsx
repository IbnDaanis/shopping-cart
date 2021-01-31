import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ProductItemInCart } from '../components/ProductItem'
import { CartItemsContext } from '../context/CartContext'
import '../styles/Cart.scss'

const Cart = ({ history }) => {
  const { shoppingCart, setShoppingCart } = useContext(CartItemsContext)

  const updateQuantity = (target, index) => {
    setShoppingCart({
      cartItems: shoppingCart.cartItems.map((x, i) =>
        i === index ? { ...x, qty: +target.value } : x
      ),
    })
  }

  const removeProductFromCart = product => {
    setShoppingCart({
      cartItems: shoppingCart.cartItems.filter(
        item => item.product !== product.product
      ),
    })
  }

  return (
    <section className='cart-section'>
      <h1 className='title'>Cart</h1>
      <div className='products'>
        {!shoppingCart.cartItems.length ? (
          <h1>There are no items in your cart</h1>
        ) : (
          <>
            {shoppingCart.cartItems.map((item, index) => (
              <ProductItemInCart
                key={index}
                item={item}
                index={index}
                updateQuantity={updateQuantity}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </>
        )}
      </div>
      {shoppingCart.cartItems.length > 0 && (
        <div className='checkout'>
          <h2 className='total'>
            Total: £
            {shoppingCart.cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </h2>
          <button
            className='place-order'
            onClick={() => {
              setShoppingCart({ cartItems: [] })
              history.push('/')
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </section>
  )
}

Cart.propTypes = {
  history: PropTypes.object,
}

export default Cart

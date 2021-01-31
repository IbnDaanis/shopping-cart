import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { CartItemsContext } from '../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import '../styles/ProductItem.scss'

const ProductItem = ({ product }) => {
  const {
    shoppingCart: { cartItems },
    setShoppingCart,
  } = useContext(CartItemsContext)
  const [qty, setQty] = useState(1)

  const handleClick = product => {
    if (qty > 10) return
    setQty(qty => qty + 1)

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
            product: product.name,
            path: product.path,
            price: product.price,
            qty,
          },
        ],
      })
    }
  }

  return (
    <div className='product'>
      <div className='product-image'>
        <img src={product.path} alt={product.name} draggable='false' />
      </div>
      <div className='product-details'>
        <h2 className='product-details-title'>{product.name}</h2>
        <h3 className='product-details-price'>£{product.price.toFixed(2)}</h3>
      </div>
      <div className='add-to-cart'>
        <button
          className='add-to-cart-button'
          onClick={() => handleClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  shoppingCart: PropTypes.object,
  setShoppingCart: PropTypes.func,
  product: PropTypes.object,
}

export default ProductItem

export const ProductItemInCart = ({
  item,
  index,
  updateQuantity,
  removeProductFromCart,
}) => {
  return (
    <div className='item' key={item.product}>
      <div className='product-img'>
        <img src={item.path} alt={item.product} />
      </div>
      <h2 className='product-name'>{item.product}</h2>
      <div className='product-qty'>
        <span>Quantity: </span>
        <select
          value={item.qty}
          onChange={({ target }) => updateQuantity(target, index)}
        >
          {[1, 2, 3, 4, 5, 6, 8, 9, 10].map(number => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <p className='product-total-price'>
        Total: <span>£{(item.price * item.qty).toFixed(2)}</span>
      </p>
      <button
        className='delete-btn'
        onClick={() => removeProductFromCart(item)}
      >
        <BsFillTrashFill />
      </button>
    </div>
  )
}

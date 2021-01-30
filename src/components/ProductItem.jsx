import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/ProductItem.scss'

const ProductItem = ({ shoppingCart, setShoppingCart, product }) => {
  const [qty, setQty] = useState(1)
  const handleClick = product => {
    if (qty > 10) return
    setQty(qty => qty + 1)
    const existItem = shoppingCart.cartItems.find(
      item => item.product === product.name
    )
    if (existItem) {
      setShoppingCart({
        cartItems: shoppingCart.cartItems.map(item =>
          item.product === existItem.product ? { ...item, qty } : item
        ),
      })
    } else {
      setShoppingCart({
        cartItems: [
          ...shoppingCart.cartItems,
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

import { useState, useContext } from 'react'
import { products } from '../data/products'
import { CartItemsContext } from '../context/CartContext'
import '../styles/Product.scss'

const Product = ({ match }) => {
  const item = products[match.params.id]

  const {
    shoppingCart: { cartItems },
    setShoppingCart,
  } = useContext(CartItemsContext)

  const cartItem = cartItems.find(cartItem => cartItem.product === item.name)

  console.log({ cartItem })
  const [qty, setQty] = useState(cartItem ? cartItem.qty : 1)

  const handleClick = product => {
    if (qty > 10) return
    setQty(qty => qty + 1)
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
          },
        ],
      })
    }
  }
  return (
    <div className='product-container'>
      <div className='product-details'>
        <div className='product-details-image'>
          <img src={item.path} alt={item.name} />
        </div>
        <div className='product-details-description'>
          <h1 className='title'>{item.name}</h1>
          <p className='details'>{item.details}</p>
          <div className='add-to-cart'>
            <button
              className='add-to-cart-button'
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

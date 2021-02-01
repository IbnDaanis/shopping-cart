import { useState, useContext } from 'react'
import { products } from '../data/products'
import { CartItemsContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../styles/Product.scss'

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

  return (
    <div className='product-container'>
      <button className='back-button'>
        <Link to='/'>Go Back</Link>
      </button>
      <div className='product-details'>
        <div className='product-details-image'>
          <img src={item.path} alt={item.name} />
        </div>
        <div className='product-details-description'>
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
        </div>
      </div>
    </div>
  )
}

export default Product

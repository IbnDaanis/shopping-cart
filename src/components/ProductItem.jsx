import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { BsFillTrashFill } from 'react-icons/bs'
import '../styles/ProductItem.scss'

const ProductItem = ({ product, id }) => {
  return (
    <div className='product' exit={{ opacity: 0, x: 100 }}>
      <div className='product-image'>
        <Link to={`/products/${id}`}>
          <img src={product.path} alt={product.name} draggable='false' />
        </Link>
      </div>
      <div className='product-details'>
        <h2 className='product-details-title'>{product.name}</h2>
        <h3 className='product-details-price'>£{product.price.toFixed(2)}</h3>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
}

export default ProductItem

export const ProductItemInCart = ({
  item,
  index,
  updateQuantity,
  removeProductFromCart,
}) => {
  return (
    <motion.div
      className='item'
      key={item.product}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      }}
    >
      <div className='product-img'>
        <Link to={`/products/${item.id}`}>
          <img src={item.path} alt={item.product} />
        </Link>
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
    </motion.div>
  )
}

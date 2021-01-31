import { useContext } from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'
import { CartItemsContext } from '../context/CartContext'

const Home = ({ shoppingCart, setShoppingCart }) => {
  const Cart = useContext(CartItemsContext)
  console.log('Context: ', Cart)
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

Home.propTypes = {
  shoppingCart: PropTypes.object,
  setShoppingCart: PropTypes.func,
}

export default Home

import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='home'>
        <h1 className='title noselect'>Home</h1>
        <div className='products'>
          {products.map((product, index) => (
            <ProductItem key={index} product={product} id={index} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Home

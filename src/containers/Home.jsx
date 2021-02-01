import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ ...transition, duration: 0.5 }}
      className='home-container'
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

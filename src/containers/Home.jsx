import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      ...transition,
      staggerChildren: 0.13,
      staggerDirection: 1,
      delayChildren: 0.5,
    },
  },
}

const item = {
  hidden: { y: 0 },
  show: {
    y: '100%',
    transition: {
      ...transition,
    },
  },
}

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
        <motion.div
          className='products'
          variants={container}
          initial='hidden'
          animate='show'
        >
          {products.map((product, index) => (
            <motion.div key={index} className='product-item-container'>
              <ProductItem product={product} id={index} />
              <motion.div
                className='product-cover'
                variants={item}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Home

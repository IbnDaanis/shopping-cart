import ProductItem from '../components/ProductItem'
import { products } from '../data/products'
import '../styles/Home.scss'

const Home = () => {
  return (
    <section className='home'>
      <h1 className='title noselect'>Home</h1>
      <div className='products'>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Home

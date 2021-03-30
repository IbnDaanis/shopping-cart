import { useState, useContext, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartItemsContext } from '../context/CartContext'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import '../styles/Navbar.scss'

const Navbar = () => {
  const { totalItems } = useContext(CartItemsContext)

  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    setUpdated(true)
    setTimeout(() => {
      setUpdated(false)
    }, 500)
  }, [totalItems])
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <Link to='/' title='Home'>
              <img src={logo} alt='Logo' />
              <h1>Friedrik</h1>
            </Link>
          </div>
          <ul className='links'>
            <motion.li className='home-link' whileHover={{ scale: 1.05 }}>
              <NavLink exact to='/' activeClassName='active' title='Home'>
                Home
              </NavLink>
            </motion.li>
            <motion.li
              className='cart-link'
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 1 }}
              animate={{
                scale: updated ? 1.15 : 1,
                color: updated ? '#02bbe0' : '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'tween',
                  stiffness: 100,
                },
              }}
            >
              <NavLink to='/cart' activeClassName='active' title='Cart'>
                <AiOutlineShoppingCart />
                <span className='cart'>{totalItems}</span>
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

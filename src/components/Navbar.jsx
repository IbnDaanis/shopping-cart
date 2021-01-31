import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartItemsContext } from '../context/CartContext'
import '../styles/Navbar.scss'

const Navbar = () => {
  const { totalItems } = useContext(CartItemsContext)
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <Link to='/' title='Home'>
              <img src='./assets/favicon.png' alt='Logo' />
              <h1>Friedrik</h1>
            </Link>
          </div>
          <ul className='links'>
            <li className='home-link'>
              <NavLink exact to='/' activeClassName='active' title='Home'>
                Home
              </NavLink>
            </li>
            <li className='cart-link'>
              <NavLink to='/cart' activeClassName='active' title='Cart'>
                <AiOutlineShoppingCart />
                <span className='cart'>{totalItems}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

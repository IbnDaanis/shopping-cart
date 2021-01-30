import { NavLink, Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = ({ totalItems }) => {
  console.log(totalItems)
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

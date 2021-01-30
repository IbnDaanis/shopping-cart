import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import Home from './containers/Home'
import Cart from './containers/Cart'

const Routes = () => {
  const [shoppingCart, setShoppingCart] = useState({ cartItems: [] })
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    setTotalItems(shoppingCart.cartItems.reduce((a, b) => a + b.qty, 0))
    console.log(shoppingCart)
  }, [shoppingCart])
  return (
    <Router>
      <header>
        <NavLink to='/'>Home</NavLink>
        <br />
        <NavLink to='/cart'>Cart {totalItems}</NavLink>
      </header>

      <Switch>
        <Route exact path='/'>
          <Home setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
        </Route>
        <Route exact path='/cart'>
          <Cart shoppingCart={shoppingCart} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

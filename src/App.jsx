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
  const [shoppingCart, setShoppingCart] = useState({})

  useEffect(() => {
    console.log(shoppingCart)
  }, [shoppingCart])
  return (
    <Router>
      <header>
        <NavLink to='/'>Home</NavLink>
        <br />
        <NavLink to='/cart'>Cart</NavLink>
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

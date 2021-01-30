import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Cart from './containers/Cart'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [shoppingCart, setShoppingCart] = useState({ cartItems: [] })
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    setTotalItems(shoppingCart.cartItems.reduce((a, b) => a + b.qty, 0))
  }, [shoppingCart])
  return (
    <Router>
      <Navbar totalItems={totalItems} />
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <Home
              {...props}
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
            />
          )}
        ></Route>
        <Route
          exact
          path='/cart'
          render={props => (
            <Cart
              {...props}
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
            />
          )}
        ></Route>
      </Switch>
    </Router>
  )
}

export default App

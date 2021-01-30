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
    setTotalItems(
      shoppingCart.cartItems.reduce((acc, item) => acc + item.qty, 0)
    )
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
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          )}
        ></Route>
        <Route
          path='/cart'
          render={props => (
            <Cart
              {...props}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          )}
        ></Route>
      </Switch>
    </Router>
  )
}

export default App

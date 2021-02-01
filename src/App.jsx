import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Cart from './containers/Cart'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import CartContext from './context/CartContext'
import Product from './containers/Product'

import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <CartContext>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={props => <Home {...props} />}
                ></Route>
                <Route
                  exact
                  path='/cart'
                  render={props => <Cart {...props} />}
                ></Route>
                <Route
                  exact
                  path='/products/:id'
                  render={props => <Product {...props} />}
                ></Route>
              </Switch>
            </AnimatePresence>
          )}
        ></Route>
      </Router>
    </CartContext>
  )
}

export default App

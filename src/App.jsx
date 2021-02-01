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
        <AnimatePresence exitBeforeEnter={true}>
          <Switch>
            <Route exact path='/' render={props => <Home {...props} />}></Route>
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
      </Router>
    </CartContext>
  )
}

export default App

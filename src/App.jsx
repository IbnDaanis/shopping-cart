import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Cart from './containers/Cart'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import CartContext from './context/CartContext'

const App = () => {
  return (
    <CartContext>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />}></Route>
          <Route path='/cart' render={props => <Cart {...props} />}></Route>
        </Switch>
      </Router>
    </CartContext>
  )
}

export default App

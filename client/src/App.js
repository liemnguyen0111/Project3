import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HowItWorks from './pages/HowItWorks'
import ItemView from './pages/ItemView'
import Home from './pages/Home'
import Buying from './pages/Buying'
import Selling from './pages/Selling'

function App() {
  return (
    <Router>

      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/buying" component={Buying} />
        <Route path="/selling" component={Selling} />
        
      </Switch>
      <Footer />

    </Router>
  )
}

export default App;

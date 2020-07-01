import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Category from './components/Category'
import ItemsGrid from './components/ItemsGrid'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import HowItWorks from './pages/HowItWorks'
import Home from './pages/Home'

function App() {
  return (
    <Router>

      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/howitworks" component={HowItWorks} />

      </Switch>
      <Footer />

    </Router>
  )
}

export default App;

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
import './App.css'

function App() {
  return (
    <Router>

      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/watching" component={ItemView} />
      </Switch>
      <Footer />

    </Router>
  )
}

export default App;

import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./pages/HowItWorks";
import ItemView from "./pages/ItemView";
import Home from "./pages/Home";
import LoginContext from "./utils/LoginContext";
import ItemContext from "./utils/ItemContext";
import UserAPI from "./utils/UserAPI";
import ItemAPI from "./utils/ItemAPI";
import './App.css'
import Buying from './pages/Buying'
import Selling from './pages/Selling'

const { authorizeUser } = UserAPI;
const { getAllItems } = ItemAPI;

function App() {
  const [loginState, setLoginState] = useState(false);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    authorizeUser()
      .then((data) => {
        setLoginState(true);
      })
      .catch((err) => {
        console.error(err);
      });

      getAllItems(category)
      .then(({data}) => {
        setItems(data)
      })
      .catch(err => console.error(err))

  }, [category]);

  const handleCategory = (event) =>
  {
    event.preventDefault()
   setCategory(event.target.value)
  }

  const handleSearch = (event) =>
  {
    event.preventDefault()
    console.log(event.target.value)
  }
  
  return (
  
    <LoginContext.Provider value={{loginState, setLoginState}}>
      <ItemContext.Provider value={{items, setItems, category, handleCategory}}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home />
            )}
          />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/buying" component={Buying} />
          <Route path="/ItemView/:search?" name='search' component={ItemView} />
          <Route path="/selling" component={Selling} />
        </Switch>
        <Footer />
      </Router>
      </ItemContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

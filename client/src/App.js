import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./pages/HowItWorks";
import ItemView from "./pages/ItemView";
import Home from "./pages/Home";
import LoginContext from "./utils/LoginContext";
import UserAPI from "./utils/UserAPI";
import './App.css'
import Buying from './pages/Buying'
import Selling from './pages/Selling'

const { authorizeUser } = UserAPI;

function App() {
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    authorizeUser()
      .then((data) => {
        setLoginState(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <LoginContext.Provider value={{loginState, setLoginState}}>
      <Router>
        <Navbar setLoginState={setLoginState} loginState={loginState} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home setLoginState={setLoginState} loginState={loginState} />
            )}
          />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/buying" component={Buying} />
          <Route path="/watching" component={ItemView} />
          <Route path="/selling" component={Selling} />
        </Switch>
        <Footer />
      </Router>
    </LoginContext.Provider>
  );
}

export default App;

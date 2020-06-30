import React from 'react';
import Navbar from './components/Navbar'
import Cat from './components/Category'
import ItemsGrid from './components/ItemsGrid'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'

function App() {
  return (
   <div>
     <Navbar />
     <Jumbotron />
     <Cat />
      <ItemsGrid />
      <Footer />
   </div>
  )
}

export default App;

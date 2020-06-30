import React from 'react';
import Navbar from './components/Navbar'
import Cat from './components/Category'
import ItemsGrid from './components/ItemsGrid'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import SearchButton from './components/SearchButton'

function App() {
  return (
   <div>
     <Navbar/>
     <Jumbotron />
     <Cat />
      <ItemsGrid />
      <Footer />
      <SearchButton />
   </div>
  )
}

export default App;

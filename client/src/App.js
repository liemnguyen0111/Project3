import React from 'react';
import Navbar from './components/Navbar'
import Cat from './components/Category'
import ItemsGrid from './components/ItemsGrid'
import Jumbotron from './components/Jumbotron'


function App() {
  return (
   <div>
     <Navbar/>
     <Jumbotron />
     <Cat />
      <ItemsGrid />
   </div>
  )
}

export default App;

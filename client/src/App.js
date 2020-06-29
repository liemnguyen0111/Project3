import React from 'react';
import Cat from './components/Category'
import ItemsGrid from './components/ItemsGrid'
import Jumbotron from './components/Jumbotron'

function App() {
  return (
   <div>
     <Jumbotron />
     <Cat />
    <ItemsGrid />
   </div>

  );
}

export default App;

import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Category />
      <ItemsGrid />
    </>
  )
}

export default Home

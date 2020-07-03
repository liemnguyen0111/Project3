import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'

const Home = ({loginState, setLoginState}) => {
  return (
    <>
      <Jumbotron loginState={loginState} setLoginState={setLoginState}/>
      <Category />
      <ItemsGrid />
    </>
  )
}

export default Home

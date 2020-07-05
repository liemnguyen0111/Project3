import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import Grid from "@material-ui/core/Grid";
import ItemsGrid from '../../components/ItemsGrid'
import ItemAPI from '../../utils/ItemAPI'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom : '70px'
  }
}));

const { getAllItems } = ItemAPI

const Home = ({loginState, setLoginState}) => {
  const classes = useStyles();

  const [items , setItems ] = useState([])
  const [ category , setCategory ] = useState([])

  const handleCategory = () =>
  {
    setItems([])
  }

  useEffect(()=>
  {
    getAllItems()
    .then(({data}) => setItems(data))
    .catch(err => console.error(err))
     
  },[])

  return (
    <div className={classes.root}>
      <Jumbotron loginState={loginState} setLoginState={setLoginState}/>
      <Category />
    </div>
  )
}

export default Home

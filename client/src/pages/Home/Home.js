import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import Grid from "@material-ui/core/Grid";
// import ItemsGrid from '../../components/ItemsGrid'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom : '70px'
  }
}));

const Home = ({loginState, setLoginState}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Jumbotron loginState={loginState} setLoginState={setLoginState}/>
      <Category />
    </div>
  )
}

export default Home

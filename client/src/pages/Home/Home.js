import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom : '70px'
  }

}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Jumbotron />
      <Category />
      <ItemsGrid />
    </div>
  )
}

export default Home

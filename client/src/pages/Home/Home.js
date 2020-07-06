import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'
import PaginationRange from '../../components/PaginationRange'
import ItemAPI from '../../utils/ItemAPI'
import ItemContext from '../../utils/ItemContext'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display : 'flex',
    flexFlow : 'column',
    height : '100%',
    width: '100%',
    paddingBottom : '70px'
  }
}));

const { getAllItems } = ItemAPI


const Home = ({loginState, setLoginState}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Jumbotron loginState={loginState} setLoginState={setLoginState}/>
     
      <ItemContext.Consumer>
        {
          ({ items , handleCategory, category, pages, setNewPage, newPage}) =>
          ( 
            <>

            <Category setCategory={handleCategory} category={category}/>
        
            <ItemsGrid items={items} />
            {/* <PaginationRange pages={pages} setNewPage={setNewPage} newPage={newPage}/> */}
      

            </>
          )
        }
      </ItemContext.Consumer>
     
    </div>
  )
}

export default Home

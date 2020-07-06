import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'
import PaginationRange from '../../components/PaginationRange'
import ItemAPI from '../../utils/ItemAPI'
import ItemContext from '../../utils/ItemContext'
import './Home.css'

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
      <div className={'fade-in one'}>
      <Jumbotron loginState={loginState} setLoginState={setLoginState} />
      </div>
     
      <ItemContext.Consumer>
        {
          ({ items , handleCategory, category, pages, setNewPage, newPage}) =>
          ( 
            <>

            <div className={'fade-in two'}>
              <Category setCategory={handleCategory} category={category}/>
            </div>
        
            <div className={'fade-in three'}>
              <ItemsGrid items={items} />
              {/* <PaginationRange pages={pages} setNewPage={setNewPage} newPage={newPage}/> */}
            </div>

            </>
          )
        }
      </ItemContext.Consumer>
     
    </div>
  )
}

export default Home

import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Jumbotron from '../../components/Jumbotron'
import Category from '../../components/Category'
import ItemsGrid from '../../components/ItemsGrid'
import ItemAPI from '../../utils/ItemAPI'
import ItemContext from '../../utils/ItemContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom : '70px'
  }
}));

const { getAllItems } = ItemAPI


const Home = ({loginState, setLoginState}) => {
  const classes = useStyles();

  // const [items , setItems ] = useState([])

  // const [ category , setCategory ] = useState('All')



  // useEffect(()=>
  // {
  //   getAllItems(category)
  //   .then(({data}) => setItems(data))
  //   .catch(err => console.error(err))
     
  // },[category])

  return (
    <div className={classes.root}>
       <Jumbotron loginState={loginState} setLoginState={setLoginState}/>
     
      <ItemContext.Consumer>
        {
          ({ items , handleCategory, category}) =>
          ( 
            <>
           
            <Category setCategory={handleCategory} category={category}/>
            <ItemsGrid items={items}/>
            </>
          )
        }
      </ItemContext.Consumer>
    </div>
  )
}

export default Home

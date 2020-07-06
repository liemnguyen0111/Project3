import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserAPI from '../../utils/UserAPI'
import SellingSection from '../../components/SellingComponents/SellingSection'
import SoldSection from '../../components/SellingComponents/SoldSection'
import ShippedSection from '../../components/SellingComponents/ShippedSection'
import './Selling.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0px 15px 0px 15px',
    paddingBottom : '75px'
  }
}));

const { getUser } = UserAPI

const Selling = () => {
  const classes = useStyles();

  const [ items, setItems ] = useState({
    sellItems : [],
    soldItems : [],
    shipItems : []
  })

  const [ onShip , setOnShip ] = useState(false)

  useEffect(() =>
  {
      getUser()
      .then(({data}) => {
        console.log(data)
        setItems(data)
      })
      .catch(err => console.error(err))
  },[onShip])

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4}>
            <div className={'fade-in one'}>
              <SellingSection sellItems={items.sellItems}/>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} >
            <div className={'fade-in two'}>
              <SoldSection soldItems={items.soldItems} setOnShip={setOnShip} onShip={onShip}/>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} >
            <div className={'fade-in three'}>
              <ShippedSection shipItems={items.shipItems}/>
            </div>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Selling

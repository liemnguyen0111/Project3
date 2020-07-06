import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserAPI from '../../utils/UserAPI'
import SellingSection from '../../components/SellingComponents/SellingSection'
import SoldSection from '../../components/SellingComponents/SoldSection'
import ShippedSection from '../../components/SellingComponents/ShippedSection'

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
        setItems(data)
      })
      .catch(err => console.error(err))
  },[onShip])

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4}>
            <SellingSection sellItems={items.sellItems}/>
          </Grid>
          <Grid item xs={12} sm={4} >
            <SoldSection soldItems={items.soldItems} setOnShip={setOnShip} onShip={onShip}/>
          </Grid>
          <Grid item xs={12} sm={4} >
            <ShippedSection shipItems={items.shipItems}/>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Selling

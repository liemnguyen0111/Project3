import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SellingSection from '../../components/SellingComponents/SellingSection'
import SoldSection from '../../components/SellingComponents/SoldSection'
import ShippedSection from '../../components/SellingComponents/ShippedSection'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0px 15px 0px 15px',
  }
}));

const Selling = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4}>
            <SellingSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoldSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ShippedSection />
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Selling

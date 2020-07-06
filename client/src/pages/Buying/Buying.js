import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WatchingSection from '../../components/BuyingComponents/WatchingSection'
import BidsSection from '../../components/BuyingComponents/BidsSection'
import WonSection from '../../components/BuyingComponents/WonSection'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0px 15px 0px 15px',
    paddingBottom: '75px'
  }
}));

const Buying = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4}>
            <WatchingSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BidsSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <WonSection />
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Buying

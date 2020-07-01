import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemLeftWindow from '../../components/ItemLeftWindow'
import ItemRightWindow from '../../components/ItemRightWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const ItemView = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
         <ItemLeftWindow />
        </Grid>
        <Grid item xs={6}>
         <ItemRightWindow />
        </Grid>
       
      </Grid>
    </div>
    </>
  )
}

export default ItemView

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemLeftWindow from '../../components/ItemLeftWindow'
import ItemRightWindow from '../../components/ItemRightWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin : '0px 15px 0px 15px',
  }
}));

const ItemView = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={6}>
         <ItemLeftWindow />
        </Grid>
        <Grid item xs={12} sm={6}>
         <ItemRightWindow />
        </Grid>
       
      </Grid>
    </div>
    </>
  )
}

export default ItemView

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemLeftWindow from '../../components/ItemLeftWindow'
import ItemRightWindow from '../../components/ItemRightWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin : '0px 15px 0px 15px',
    paddingBottom : '70px'
  },
  item: {
    marginTop : '15px',
  }
}));

const ItemView = () => {
  const classes = useStyles();

  return (
    <>
    <Divider/>
      <div className={classes.root}>
      <Grid container >
        
        <Grid item xs={12} sm={6} className={classes.item}>
         <ItemLeftWindow />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.item}>
         <ItemRightWindow />
        </Grid>
       
      </Grid>
    </div>
    </>
  )
}

export default ItemView

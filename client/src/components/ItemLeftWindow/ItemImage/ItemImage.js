import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
({
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "90%",
    overflow: "scroll",
    minHeight : '50vh',
    maxHeight : '50vh',
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  thumbnail: {
    marginTop: '50px',
    height: '50%',
    width: '95%',
    objectFit: 'contain',
  },
}))

const ItemImage = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid item xs={12}>
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
      </Grid>
    </div>
  )
}

export default ItemImage



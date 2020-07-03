import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
({
  root: {
    display: 'block',
    flexGrow : '1',
    overflow: "auto",
    // minHeight : '100%',
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  thumbnail: {
    minHeight: '85vh',
    width: '95%',
    objectFit: 'contain',
  },
}))

const ItemImage = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid item xs={12}>

        <img className={classes.thumbnail} src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" alt="" />
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
        <img className={classes.thumbnail} src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" alt="" />
      

      </Grid>
    </div>
  )
}

export default ItemImage



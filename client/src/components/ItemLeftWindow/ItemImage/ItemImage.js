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
      flexGrow: '1',
      overflow: "auto",
      // minHeight : '100%',
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "85%",
      maxWidth: "80%",
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    thumbnail: {
      // height : '100%',
      minHeight: '90vh',
      width: '80%',
      objectFit: 'contain',
    },
  }))

const ItemImage = ({ photos }) => {
  const classes = useStyles()
  // console.log(props)
  return (
    <div className={classes.root}>
      <Grid item xs={12}>

        {(photos.length > 0) ?
          photos.map(photo =>
            <>

              <img className={classes.thumbnail} src={photo} alt='IMAGE'
                onError={(e) => {
                  if (e.target.src !== `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`) { e.target.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`; }
                }} />
            </>
          ) :

          <img className={classes.thumbnail} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`}

            alt='IMG' />
        }

      </Grid>
    </div>
  )
}

export default ItemImage



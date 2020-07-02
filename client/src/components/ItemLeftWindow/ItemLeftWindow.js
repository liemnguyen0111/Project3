import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import DetailsDialog from './DetailsDialog'

const defaultProps = {
  bgcolor: 'background.paper',
  // m: 1,
  border: 1,
 
  style: { width: '100%', height: '600px'},
};

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    marginTop: '50px',
    height: '50%',
    width: '95%',
    objectFit: 'contain',
  },
  title: {
    display: 'block',
    position: 'sticky',
    marginTop: '50px',
    color: 'black',
  },
}));

const ItemLeftWindow = () => {
  const classes = useStyles();

  return (
    <div>
      <Box textAlign="center" borderColor="text.primary" {...defaultProps}>
        <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt=""/>
        <Typography className={classes.title}>
          
          <strong>Air Jordan 5 Retro 'Top 3'</strong>
        </Typography>
        <Button>
          <DetailsDialog />
        </Button>
      </Box>
    </div>
  )
}

export default ItemLeftWindow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import DetailsDialog from '../DetailsDialog'

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  style: { width: '600px', height: '600px' },
};

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    marginTop: '50px',
    height: '400px',
    width: '400px',
    objectFit: 'contain',
  },
  title: {
    marginTop: '50px',
    color: 'black',
  },
}));

const ImageDisplay = () => {
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

export default ImageDisplay
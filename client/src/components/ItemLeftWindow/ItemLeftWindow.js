import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DetailsDialog from './DetailsDialog'
import ItemImage from './ItemImage'


const defaultProps = {
  bgcolor: 'background.paper',
  // m: 1,
  border: 1,
  style: { width: '100%', height: '100%'},
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '10px',
    color: '#616161',
  },
}));

const ItemLeftWindow = () => {
  const classes = useStyles();

  return (
    <div>
      <Box textAlign="center" borderColor="text.primary" {...defaultProps}>
        <ItemImage />
        <Grid item xs={12} style={{ position: 'sticky', bottom: '0'}}>
          <Typography className={classes.title}>
            <strong>Air Jordan 5 Retro 'Top 3'</strong>
          </Typography>
          <Button>
            <DetailsDialog />
          </Button>
        </Grid>
      </Box>
    </div>
  )
}

export default ItemLeftWindow
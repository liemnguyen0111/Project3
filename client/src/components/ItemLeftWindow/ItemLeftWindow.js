import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DetailsDialog from './DetailsDialog'
import ItemImage from './ItemImage'
import Timer from './Timer'


const defaultProps = {
  bgcolor: 'background.paper',
  style: { width: '100%', height: '100%'},
};

const useStyles = makeStyles((theme) => ({
  root:
  {
    display : 'flex',
    flexFlow : 'column',
    backgroundColor: theme.palette.background.paper,
    border : '1px solid',
    height : '90vh',
  },
  body: {
    display : 'flex',
    flexFlow : 'column',
    position: 'relative',
    height : '90vh',
    backgroundColor: theme.palette.background.paper, 
  },
  title: {
    marginTop: '10px',
    color: '#616161',
  }
}));

const ItemLeftWindow = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box textAlign="center" className={classes.body} borderColor="text.primary" {...defaultProps}>
       <Timer/>
        <ItemImage />
        <Grid item xs={12} style={{bottom: '0', left :'0',right:'0', position :'absolute'}}>
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
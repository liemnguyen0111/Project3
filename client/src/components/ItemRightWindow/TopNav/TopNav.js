import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ReceiptIcon from '@material-ui/icons/Receipt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      whiteSpace: 'nowrap',
      width : '100%',
      marginLeft : '0',
      marginRight : '0'
  },
  button: {
    width: '28%',
    // whiteSpace: "nowrap",
    margin: theme.spacing(1),
    backgroundColor :'#757575',
    '&:hover':
    {
      backgroundColor :'#424242'
    }
  },
}));

export default function TopNav() {
  const classes = useStyles();

  return (
  
    <div className={classes.root}>
  <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<VisibilityIcon />}
      >
        Watch
      </Button>

     <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<ReceiptIcon />}
      >
        Place Bid
      </Button>
  
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<LocalAtmIcon />}
      >
        Buy Out
      </Button>
      </Grid>
    </div>
    
  );
}
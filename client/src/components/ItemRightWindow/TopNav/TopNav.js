import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ReceiptIcon from '@material-ui/icons/Receipt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '5vh',
    
  },
  button: {
    width: '30%',
    whiteSpace: "nowrap",
    margin: theme.spacing(1),
  },
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    
    </div>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ReceiptIcon from '@material-ui/icons/Receipt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import BidDialog from '../BidDialog'
import ItemAPI from '../../../utils/ItemAPI'

const useStyles = makeStyles((theme) => ({
  root: {
      whiteSpace: 'nowrap',
      width : '100%',
      marginLeft : '0',
      marginRight : '0',
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

const { userWatch } = ItemAPI

export default function TopNav(props) {
  const classes = useStyles();

   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log('open')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClickWatch = () =>
  {
    userWatch({ postId : props.id })
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  return (
  
    <div className={classes.root}>
  <BidDialog  handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} id={props.id}/>
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
        onClick={handleOnClickWatch}
      >
        Watch
      </Button>

     <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<ReceiptIcon />}
        onClick={handleClickOpen}
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
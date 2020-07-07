import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ReceiptIcon from '@material-ui/icons/Receipt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import io from 'socket.io-client'
import BidDialog from '../BidDialog'
import ItemAPI from '../../../utils/ItemAPI'

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap',
    width: '100%',
    marginLeft: '0',
    marginRight: '0',
  },
  button: {
    width: '28%',
    // whiteSpace: "nowrap",
    margin: theme.spacing(1),
    backgroundColor: '#757575',
    '&:hover':
    {
      backgroundColor: '#424242'
    }
  },
  buttonGreen: {
    width: '28%',
    // whiteSpace: "nowrap",
    margin: theme.spacing(1),
    backgroundColor: '#43a047',
    '&:hover':
    {
      backgroundColor: '#4caf50'
    }
  },
}));

const { userWatch, itemSold } = ItemAPI

export default function TopNav(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [isWatch, setIsWatch ] = React.useState(props.info.isWatch)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const handleOnClickWatch = () => {
       userWatch({ postId: props.id , isWatch : !isWatch})
      .then(() =>{})
      .catch(err => console.error(err))
      setIsWatch(!isWatch)
  }

  const handleOnBuyOut = () => {
    console.log(props.info.price)
    itemSold({ price: props.info.price, postId: props.id })
      .then(data => props.update())
      .catch(err => console.error(err))
  }

  useEffect(() =>{
    setIsWatch(props.info.isWatch)
  }, [props])
  
  return (

    <div className={classes.root}>
      <BidDialog update={props.update} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} id={props.id} />
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
          className={!isWatch? classes.button : classes.buttonGreen}
          startIcon={<VisibilityIcon />}
          onClick={handleOnClickWatch}
        >
          {isWatch? 'Watched' : 'Watch'}
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
          onClick={handleOnBuyOut}
        >
          Buy Out
      </Button>
      </Grid>
    </div>

  );
}
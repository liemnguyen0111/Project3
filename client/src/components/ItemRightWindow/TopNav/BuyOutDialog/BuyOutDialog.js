import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ItemAPI from '../../../../utils/ItemAPI'

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginTop: '10px',
    float: 'right',
  }
}));

const { itemSold } = ItemAPI

export default function BuyOutDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpenBuyOut(false);
  };

  const handleBuyOut = () =>
  { 
    console.log(props.props)
      itemSold({ price: props.props.info.price, description: 'Bought out', postId: props.props.id, user: props.props.info.user })
      .then(() => props.props.update())
      .catch(err => console.error(err))
      props.setOpenBuyOut(false)
  }

  return (
    <div>
      <Dialog
        open={props.openBuyOut}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Buy Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           To buying out this item, you will have to pay the full price that listed on the item.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            No, Cancel
          </Button>
          <Button onClick={handleBuyOut} color="secondary" autoFocus>
            Yes, I Want To Buy It !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
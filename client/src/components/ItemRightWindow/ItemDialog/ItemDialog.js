import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ItemPhotos from "./ItemPhotos";
import ItemAPI from '../../../utils/ItemAPI'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const { makeTopBid, itemSold } = ItemAPI

export default function ItemDialog(props) {
  const topBid = () => {
    makeTopBid({
      postId: props.info.item,
      bidId: props.info._id,
    })
      .then((data) => {
        props.update()
      })
      .catch((err) => console.error(err));
  };
  const acceptBid = () => {
    itemSold({
      price: props.info.price,
      description: props.info.description, 
      postId: props.info._id,
      user: props.info.user._id
    })
      .then(() => {props.update()})
      .catch(err => console.error(err))
  }
  return (
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        justify="center"
        alignItems="center"
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          {props.info.user
            ? `Bidder: ${props.info.user.firstName} ${props.info.user.lastName} Offer:${props.info.price}` 
            : ""}
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            Description: {props.info.description}
          </Typography>
          {props.info.photos 
          ? <ItemPhotos  photos={props.info.photos} /> 
          : null}
        </DialogContent>
        {props.auctionOn && props.isUserItem ? (
          <DialogActions>
            <Button autoFocus onClick={props.handleClose} color="default">
              Close
            </Button>
            <Button onClick={topBid} autoFocus color="default">
              Make Top Bid
            </Button>
            <Button autoFocus onClick={acceptBid} color="default">
              Accept Offer
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
  );
}

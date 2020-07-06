import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Category from "../Category";
import ItemAPI from "../../../../utils/ItemAPI";

const useStyles = makeStyles({
  modal: {
    margin: "15px",
    color: "white",
    borderColor: "white",
  },
  listNewItem: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "95%",
    minHeight: "10vh",
    maxHeight: "10vh",
    background: "#adadad",
    alignItems: "center",
  },
  plusIcon: {
    color: "white",
    fontSize: "50px",
  },
  addItemText: {
    margin: "auto",
  },
});

const { createItem } = ItemAPI;

export default function FormDialog() {
  const classes = useStyles();

  const [category, setCategory] = useState("Art");
  const [files, setFiles] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const NewListingInfo = {
      title: event.target.itemTitle.value,
      description: event.target.itemDescription.value,
      price: event.target.itemPrice.value,
      category: category,
      keywords: event.target.itemKeywords.value,
      dateTimeStart: event.target.dateTimeStart.value,
      dateTimeStop: event.target.dateTimeStop.value,
    };

    if(files)
      {
        for (const key of Object.keys(files)) {
      formData.append('imgCollection', files[key])}
        }

        for (const key of Object.keys(NewListingInfo)) {
          formData.append(key,NewListingInfo[key])
        }
   
    createItem(formData)
    .then(data=>console.log(data));
  };

  const handleFilesOnChange = (event) => {
    event.preventDefault();
    setFiles(event.target.files);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const today = new Date();
  const date =
    (today.getMonth() < 10 ? "0" : "") +
    (today.getMonth() + 1) +
    "/" +
    ((today.getDate() < 10 ? "0" : "") + today.getDate()) +
    "/" +
    today.getFullYear();
  const futureDate =
    (today.getMonth() < 10 ? "0" : "") +
    (today.getMonth() + 1) +
    "/" +
    (((today.getDate() + 5) < 10 ? "0" : "") + (today.getDate() + 5)) +
    "/" +
    today.getFullYear();
  const time =
    ((today.getHours() < 10 ? "0" : "") + (today.getHours() % 12 || 12)) +
    ":" +
    ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes());
  const hours = today.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const startDate = date + ", " + time + " " + ampm;
  const stopDate = futureDate + ", " + time + " " + ampm;

  return (
    <>
      <List>
        <ListItem
          button
          className={classes.modal}
          variant="outlined"
          color="default"
          onClick={handleClickOpen}
        >
          <Grid container>
            <Grid item xs={2}>
              <AddCircleIcon className={classes.plusIcon} />
            </Grid>
            <Grid item xs={9} className={classes.addItemText}>
              <Typography>Click Here to Sell A New Item</Typography>
            </Grid>
          </Grid>
        </ListItem>
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Item Information</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="itemTitle"
                  id="itemTitle"
                  label="Item Title"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="itemDescription"
                  id="itemDescription"
                  label="Item Description"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="itemPrice"
                  id="itemPrice"
                  label="Price $"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Category setCategory={setCategory} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="itemKeywords"
                  id="itemKeywords"
                  label="Keywords (separate with commas)"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    label="Add Photos of the Item"
                    type="file"
                    onChange={handleFilesOnChange}
                    multiple
                  />
                  <Button color="gray" variant="contained" component="span">
                    Choose Photos
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="dateTimeStart"
                  id="dateTimeStart"
                  label="Auction Start"
                  type="datetime"
                  defaultValue={startDate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="dateTimeStop"
                  id="dateTimeStop"
                  label="Auction Stop"
                  type="datetime"
                  defaultValue={stopDate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>

            <DialogActions>
              <Button onClick={handleClose} color="default">
                Cancel
              </Button>
              <Button type="submit" color="default">
                Create Listing
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

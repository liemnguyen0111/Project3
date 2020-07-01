import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   itemSearch: {
//     color: "black",
//   },
// }));

export default function SearchButton() {
  // const classes = useStyles()
  const [open, setOpen] = React.useState(false);



  const [searchState, setSearchState] = React.useState({})

  const handleInputChange = (event) => {
    setSearchState({ ...searchState, [event.target.name]: event.target.value })
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = event => {
    setOpen(false);
  };

  return (
    <div>
      <SearchIcon
        variant="outlined"
        color="default"
        onClick={handleClickOpen}
      ></SearchIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Search an item by name or category...
          </DialogContentText>
          <TextField
            autoFocus
            name='itemSearch'
            onChange={handleInputChange}
            // InputProps={{
            //   className: classes.itemSearch,
            // }}
            margin="dense"
            id="itemSearch"
            label="Item"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button onClick={handleClose} color="default">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

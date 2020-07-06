import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ItemAPI from '../../utils/ItemAPI'
import ItemContext from '../../utils/ItemContext'

const { itemSearch } = ItemAPI
export default function SearchButton() {
  // const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const [searchState, setSearchState] = React.useState({})

  const handleInputChange = (event,items) => {
    setSearchState(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = setItems => {
    itemSearch(searchState)
    .then(({data})=> {
      setItems(data)
      setSearchState({})
    })
    .catch(err => {})
    
    setOpen(false);
  };

  return (
    <div>
      <ItemContext.Consumer>
      {
          ({ setItems , items}) =>
          ( 
            <>
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
            onChange={(event) => handleInputChange(event, items)}
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
          <Button onClick={()=> handleSearch(setItems)} color="default">
            Search
          </Button>
        </DialogActions>
      </Dialog>
            
            </>
          )
        }
     
      </ItemContext.Consumer>
    </div>
  );
}

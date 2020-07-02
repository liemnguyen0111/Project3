import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle"
import axios from 'axios'
import UserAPI from '../../../utils/UserAPI'

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = UserAPI

const useStyles = makeStyles({
  modal: {
    margin: "15px",
    color: "white",
    borderColor: "white",
  },
})

export default function FormDialog() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault()
    const userSignupInfo = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
      age: event.target.age.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    createUser({})
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        className={classes.modal}
        variant="outlined"
        color="default"
        onClick={handleClickOpen}
      >
        Sign up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="firstName"
              id="firstName"
              label="First Name"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              name="lastName"
              id="lastName"
              label="Last Name"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              name="address"
              id="address"
              label="Street Address"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              name="age"
              id="age"
              label="Age"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              name="email"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              name="password"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleClose} color="default">
                Cancel
              </Button>
              <Button type='submit' onClick={handleClose} color="default">
                Sign Up
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

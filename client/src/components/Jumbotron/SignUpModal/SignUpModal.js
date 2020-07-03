import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserAPI from "../../../utils/UserAPI"
import LoginContext from '../../../utils/LoginContext'

const { createUser } = UserAPI;

const useStyles = makeStyles({
  modal: {
    margin: "15px",
    color: "white",
    borderColor: "white",
  },
});

export default function FormDialog() {
  const classes = useStyles();

  const { loginState, setLoginState } = useContext(LoginContext)

  const handleSignup = (event) => {
    event.preventDefault();
    const userSignupInfo = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
      age: event.target.age.value,
      email: event.target.email.value,
      // username: event.target.username.value,
      password: event.target.password.value,
    }
    createUser(userSignupInfo)
      .then(({ data }) => {
        if (data.name) {
          setOpen(true)
        } else {
          localStorage.setItem("user", data)
          setLoginState(true)
          setOpen(false)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <form onSubmit={handleSignup}>
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
            {/* <TextField
              margin="dense"
              name="username"
              id="username"
              label="Username"
              type="username"
              fullWidth
            /> */}
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
              <Button type="submit" color="default">
                Sign Up
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

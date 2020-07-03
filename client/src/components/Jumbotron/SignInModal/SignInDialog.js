import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserAPI from "../../../utils/UserAPI";
import LoginContext from "../../../utils/LoginContext";

const { loginUser } = UserAPI;

const useStyles = makeStyles({
  modal: {
    margin: "15px",
    color: "white",
    borderColor: "white",
  },
})

export default function SignInDialog({open, setOpen}) {
  const { loginState, setLoginState } = useContext(LoginContext);
  const handleLogin = (event) => {
    // console.log(event);
    event.preventDefault();
    const userSigninInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // console.log(userSigninInfo)
    loginUser(userSigninInfo)
      .then(({ data }) => {
        if (data) {
          localStorage.setItem("user", data)
          setLoginState(true)
          handleClose()
        } else {
          console.log("Incorrect username or password")
        }
      })
      .catch((err) => console.error(err))
  };
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <form onSubmit={handleLogin}>
            <TextField
              autoFocus
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleClose} color="default">
                Cancel
              </Button>
              <Button type="submit" color="default">
                Sign In
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
  );
}

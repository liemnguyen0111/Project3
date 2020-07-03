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
import SignInDialog from './SignInDialog'

const { loginUser } = UserAPI;

const useStyles = makeStyles({
  modal: {
    margin: "15px",
    color: "white",
    borderColor: "white",
  },
});

export default function FormDialog() {
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
      .then(( {data} ) => {
        if (data) {
          localStorage.setItem('user', data)
          setLoginState(true)
          console.log(data)
        } else {
          console.log('Incorrect username or password')
        }
      })
      .catch((err) => console.error(err))
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

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
        Sign in
      </Button>
      <SignInDialog open={open} setOpen={setOpen}/>
    
    </>
  );
}

import React, { useEffect, useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import UserAPI from "../../utils/UserAPI"
import LoginContext from '../../utils/LoginContext'

let { authorizeUser } = UserAPI;
let isLoggedIn = false;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    marginTop: "30px",

    "& > *": {
      width: "100vw",
      height: theme.spacing(16),
      color: "#ffffff",
    },
  },
  headline: {
    fontWeight: "100",
    marginTop: "10px",
    fontSize: "40px",
    textAlign: "center",
    lineHeight: "120%",
  },
  background: {
    background: "linear-gradient(#c9caca, #373737)",
    padding: "40px",
    height: "auto",
  },

  button: {
    margin: "20px",
    color: "#ffffff",
    borderColor: "#ffffff",
  },
}))

export default function Jumbotron() {

  const classes = useStyles()

  const { loginState, setLoginState } = useContext(LoginContext)

  return (
    <div className={classes.root}>
      <Box className={classes.background}>
        <Grid direction="column" alignItems="center" container spacing={1}>
          <Grid item xs={12} direction="row">
            <Typography variant="h5" className={classes.headline}>
              Buy, sell, barter, trade... anything.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} direction="row">
            {loginState ? null : (
              <>
                <SignUpModal setLoginState={setLoginState} />
                <SignInModal setLoginState={setLoginState} />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

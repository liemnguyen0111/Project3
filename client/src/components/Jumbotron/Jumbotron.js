import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    
    "& > *": {
      width: "100vw",
      height: theme.spacing(16),
      color: '#616161',
    },
  },
  button: {
    marginRight: '10px',
    marginLeft: '10px'
  }
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Grid direction="column" alignItems="center" container spacing={1}>
          <Grid item xs={12} direction="row">
            <Typography variant="h5">
              <strong>Welcome to C A C H E</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} direction="row">
            <Typography>Buy, sell, barter, trade...anything!</Typography>
          </Grid>
          <Grid item xs={12} sm={6} direction="row">
            <Button
              className={classes.button}
              size="medium"
              variant="outlined"
              color="default"
            >
              Sign up
            </Button>
            <Button
              className={classes.button}
              size="medium"
              variant="outlined"
              color="default"
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    
    "& > *": {
      width: "100vw",
      height: theme.spacing(16),
      // color: '#616161',
      color: '#ffffff',
    },
  },
  // welcome: {
  //   fontWeight: '100',
  //   marginTop: '10px',
  //   // fontSize: '54px',
  //   fontSize: '34px',
  //   textAlign: 'center',
  //   lineHeight: '95%',
  // },
  // cacheName: {
  //   fontWeight: '500',
  //   letterSpacing: '13px',
  // },
  headline: {
    fontWeight: '100',
    marginTop: '10px',
    fontSize: '40px',
    textAlign: 'center',
    lineHeight: '120%',
  },
  // tagline: {
  //   // fontWeight: '100',
  //   margin: '10px',
  // },
  background: {
    background: 'linear-gradient(#c9caca, #373737)',
    // background: 'linear-gradient(#373737, #c9caca)',
    // background: 'linear-gradient(#6c6c6c, #c9caca, #6c6c6c)',
    // background: 'radial-gradient(#5c5c5c, #ffffff)',
    padding: '40px',
    height: 'auto'
  },
  button: {
    margin: '20px',
    // marginRight: '15px',
    // marginLeft: '15px',
    color: '#ffffff',
    borderColor: '#ffffff',
  }
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.background}>
        <Grid direction="column" alignItems="center" container spacing={1}>

          {/* <Grid item xs={12} direction="row">
            <Typography variant="h5" className={classes.welcome}>
              Welcome to <span className={classes.cacheName}>CACHE</span>
            </Typography>
          </Grid> */}

          <Grid item xs={12} direction="row">
            <Typography variant="h5" className={classes.headline}>
              Buy, sell, barter, trade... anything.
            </Typography>
          </Grid>

          {/* <Grid item xs={12} sm={6} direction="row" className={classes.tagline}>
            <Typography>Buy, sell, barter, trade... anything.</Typography>
          </Grid> */}

          <Grid item xs={12} sm={6} direction="row">
            <Button
              className={classes.button}
              size="large"
              variant="outlined"
              color="default"
            >
              Sign up
            </Button>
            <Button
              className={classes.button}
              size="large"
              variant="outlined"
              color="default"
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>

    // <div className={classes.root}>
    //   <Paper elevation={1}>
    //     <Grid direction="column" alignItems="center" container spacing={1}>
    //       <Grid item xs={12} direction="row">
    //         <Typography variant="h5">
    //           <strong>Welcome to C A C H E</strong>
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} direction="row">
    //         <Typography>Buy, sell, barter, trade...anything!</Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} direction="row">
    //         <Button
    //           className={classes.button}
    //           size="medium"
    //           variant="outlined"
    //           color="default"
    //         >
    //           Sign up
    //         </Button>
    //         <Button
    //           className={classes.button}
    //           size="medium"
    //           variant="outlined"
    //           color="default"
    //         >
    //           Sign in
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
  );
}

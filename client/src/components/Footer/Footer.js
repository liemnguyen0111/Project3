import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    width: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    color: 'gray'
  },
  textLink: {
    textDecoration: 'none',
    color: 'gray'
  },
}));

export default function Footer() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid direction="column" alignItems="center" container spacing={1}>
            <Typography className={classes.footer}>
            &copy;2020 C A C H E  •  <a href="https://github.com/liemnguyen0111/Project3" target="_blank" className={classes.textLink}>GitHub</a>
            </Typography>
        </Grid>
      </div>
    )
  }



import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position : 'absolute',
    height : '60px',
    width: '99%',
    bottom: '0',
    left:'0',
    right:'0'
  },
  footer: {
    width: 'auto',
    marginTop: '20px',
    textAlign : 'center',
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
        <Divider/>
        <Grid direction="column" alignItems="center" justify="center" container spacing={1}>
            <Typography className={classes.footer}>
            &copy;2020 C A C H E  •  <a href="https://github.com/liemnguyen0111/Project3" target="_blank" className={classes.textLink}>GitHub</a>
            </Typography>
        </Grid>
      </div>
    )
  }



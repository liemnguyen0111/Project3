import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import UserAPI from "../../../utils/UserAPI";

const { getUser } = UserAPI;

const defaultProps = {
  bgcolor: "background.paper",
  border: 1,
  style: { width: "100%", height: "600px" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "95%",
    overflow: "scroll",
    minHeight: "70vh",
    maxHeight: "70vh",
    backgroundColor: theme.palette.background.paper,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  title: {
    textAlign: "center",
    color: "#616161",
    fontWeight: "300",
    fontSize: "40px",
    padding: "10px",
    marginTop: "10px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "86%",
  },
  subtitle: {
    textAlign: "center",
    color: "#616161",
    fontWeight: "300",
    fontSize: "14px",
    marginTop: "-6px",
  },
  item: {
    flex: 0.5,
    border: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    marginBottom: "5px",
    textDecoration : 'none'
  },
  imageArea: {
    marginRight: "10px",
  },
  thumbnail: {
    marginTop: "10px",
    width: "90%",
  },
  detailText: {
    color: "gray",
    fontSize: "14px",
  },
  itemPrice:{
    textAlign: 'center',
  }
}));

export default function BidsSection({bidItems}) {
  const classes = useStyles();

  return (
    <>
    {console.log(bidItems)}
      <Typography className={classes.title}>
        Bids
        <br />
        <p className={classes.subtitle}>
          These are items you've bid on. If you win, you'll be notified and the
          item will move to the Won column.
        </p>
      </Typography>

      <Box
        textAlign="center"
        borderColor="text.primary"
        {...defaultProps}
        className={classes.root}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {bidItems.map(item => {
            return (
              <ListItem button 
              component={Link}
              to={`/ItemView/:search?${item._id}`}
              className={classes.item}
              >
                <Grid container spacing={1}>
                  <Grid item xs={3} className={classes.imageArea}>
                  <img className={classes.thumbnail} src={item.photos[0]} alt="" />
                <Typography className={classes.itemPrice}>
                  {item.price? `$${item.price}`: null}
                </Typography>
                  </Grid>

                  <Grid item xs={8}>
                <Typography noWrap>{item.title}</Typography>
                    <Typography className={classes.detailText} noWrap>
                      {item.description}
                    </Typography>
                    <Divider />
                    <Typography>Your Latest Offer</Typography>
                    <Typography className={classes.detailText}>
                      {item.bid[item.bid.length - 1 ].description}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            );
          })

         
          }
        </List>
      </Box>
    </>
  );
}

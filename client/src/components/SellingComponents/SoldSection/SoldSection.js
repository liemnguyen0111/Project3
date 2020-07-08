import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ItemAPI from '../../../utils/ItemAPI'

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
  },
  imageArea: {
    marginRight: "10px",
  },
  thumbnail: {
    marginTop: "10px",
    width: "90%",
  },
  shippedButton: {
    background: "#5c9c5d",
    marginTop: "20px",
  },
  detailText: {
    color: "gray",
    fontSize: "14px",
  },
}));

const { itemShipped } = ItemAPI

export default function SoldSection({soldItems, setUpDate, update}) {
  const classes = useStyles();

  const handleOnClickShip = (itemId) => {
  
    itemShipped({postId : itemId})
    .then(() => setUpDate(!update))
    .catch(err => console.error(err))
  };
  return (
    <>
      <Typography className={classes.title}>
        Sold
        <p className={classes.subtitle}>
          Contact the buyer to arrange payment/delivery. Click 'Ship' to move
          item to the Shipped column.
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
          {soldItems.map(item => {
           
            return (

              <ListItem className={classes.item}>
                <Grid container spacing={1}>
                  <Grid item xs={3} className={classes.imageArea}>
                    <img
                      className={classes.thumbnail}
                      src={item.photos[0]}
                      alt=""
                    />
                    <Button
                      size="small"
                      onClick={() => handleOnClickShip(item._id)}
                      className={classes.shippedButton}
                    >
                      Ship
                    </Button>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{item.title}</Typography>
                    <Typography className={classes.detailText}>
                      {item.description}
                    </Typography>
                    <Divider />
                    <Typography>Sale Terms</Typography>
                    <Typography className={classes.detailText}>
                      {`${item.topBid.price} | ${item.topBid.description}`}
                    </Typography>
                    <Divider />
                    <Typography>Buyer Info</Typography>
                    <Typography className={classes.detailText}>
                      {`${item.topBid.user.firstName} ${item.topBid.user.lastName} | ${item.topBid.user.username}`}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            );})}
        </List>
      </Box>
    </>
  );
}

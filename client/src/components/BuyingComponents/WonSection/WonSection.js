import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const defaultProps = {
  bgcolor: 'background.paper',
  border: 1,
  style: { width: '100%', height: '600px' },
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
    textDecoration: 'none',
  },
  thumbnail: {
    marginTop: "10px",
    width: "90%",
  },
  detailText: {
    color: "gray",
    fontSize: "14px",
  },
}));

export default function WonSection({boughtItems}) {
  
  const classes = useStyles();

  return (
    <>
      {console.log(boughtItems)}
      <Typography className={classes.title}>
        Won
        <br />
        <p className={classes.subtitle}>
          When you've won an item, it will appear here. Contact the seller to
          arrange payment/delivery.{" "}
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
          {boughtItems.map((item) => (
            <ListItem
              component={Link}
              to={`/ItemView/:search?${item._id}`}
              className={classes.item}
            >
              <Grid container spacing={1}>
                <Grid item xs={3} className={classes.imageArea}>
                  <img
                    className={classes.thumbnail}
                    src={item.photos[item.photos.length - 1]}
                    alt={item.photos[item.photos.length - 1]}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography noWrap>{item.title}</Typography>
                  <Typography className={classes.detailText} noWrap>
                    {item.description}
                  </Typography>
                  <Divider />
                  <Typography noWrap>Sale Terms</Typography>
                  <Typography className={classes.detailText} noWrap>
                    ${`${item.topBid.price} | ${item.topBid.description}`}
                  </Typography>
                  <Divider />
                  <Typography>Seller Info</Typography>
                  <Typography className={classes.detailText}>
                    {`${item.user.firstName} ${item.user.lastName} | ${item.user.username}`}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

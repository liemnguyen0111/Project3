import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    minHeight : '70vh',
    maxHeight : '70vh',
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  title: {
    textAlign: 'center',
    color: '#616161',
    fontWeight: '300',
    fontSize: '40px',
    padding: '10px',
    marginTop: '10px',
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "86%",
  },
  subtitle: {
    textAlign: 'center',
    color: '#616161',
    fontWeight: '300',
    fontSize: '14px',
    marginTop: '-6px'
  },
  item:
  {
    flex: 0.5,
    border : "1px",
    borderStyle : "solid",
    borderRadius : "5px",
    marginBottom : '5px',
  },
  thumbnail: {
    marginTop: '10px',
    width: '90%',
  },
  detailText: {
    color: 'gray',
    fontSize: '14px',
  },
}));

export default function ShippedSection({shipItems}) {
  
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>
        Shipped
          <br />
        <p className={classes.subtitle}>After you've clicked the 'Ship' button on an item in the Sold column, the item will move here.</p>
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
          {shipItems.map((item) => (
            <ListItem className={classes.item}>
              <Grid container spacing={1}>
                <Grid item xs={3} className={classes.imageArea}>
                  <img
                    className={classes.thumbnail}
                    src={item.photos[0]}
                    alt={item.photos[0]}
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
                    {`${item.topBid.price} | ${item.topBid.description}`}
                  </Typography>
                  <Divider />
                  <Typography>Buyer Info</Typography>
                  <Typography className={classes.detailText}>
                    {item.topBid.user.firstName} {item.topBid.user.lastName} | {item.topBid.user.username}
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

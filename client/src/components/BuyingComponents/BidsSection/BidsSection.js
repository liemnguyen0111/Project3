import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
  imageArea: {
    marginRight: '10px',
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

export default function BidsSection(props) {
  
  const classes = useStyles();

  const handleOnClick = itemId =>
  {
    console.log(itemId)
  }
  return (
    <>
      <Typography className={classes.title}>
        Bids
          <br />
        <p className={classes.subtitle}>These are items you've bid on. If you win, you'll be notified and the item will move to the Won column.</p>
      </Typography>
      
      <Box textAlign="center" borderColor="text.primary" {...defaultProps} className={classes.root}>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >

          <ListItem button className={classes.item}>  
            <Grid container spacing={1}>
              <Grid item xs={3} className={classes.imageArea}>
                <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
                <Typography className={classes.itemPrice}>
                  $230
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  Item Title
                </Typography>
                <Typography className={classes.detailText}>
                  Item description goes here. Look at these features! 
                </Typography>
                <hr />
                <Typography>
                  Your Offer
                </Typography>
                <Typography className={classes.detailText}>
                  2 Twinkies and a Donut
                </Typography>
              </Grid>
            </Grid>
          </ListItem>  

          <ListItem button className={classes.item}>
            <Grid container spacing={1}>
              <Grid item xs={3} className={classes.imageArea}>
                <img className={classes.thumbnail} src="https://secure.img1-fg.wfcdn.com/im/55776803/resize-h600-w600%5Ecompr-r85/4366/43669260/King+Tutankhamen%2527s+Life+Size+Sarcophagus+Statue.jpg" alt="" />
                <Typography className={classes.itemPrice}>
                  $230
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  Item Title
                </Typography>
                <Typography className={classes.detailText}>
                  Item description goes here. Look at these features!
                </Typography>
                <hr />
                <Typography>
                  Your Offer
                </Typography>
                <Typography className={classes.detailText}>
                  A Ham Sandwich
                </Typography>
              </Grid>
            </Grid>
          </ListItem>  

          <ListItem button className={classes.item}>
            <Grid container spacing={1}>
              <Grid item xs={3} className={classes.imageArea}>
                <img className={classes.thumbnail} src="https://images.homedepot-static.com/productImages/797b0135-79ff-4196-9644-483ed8ca0a72/svn/paint-buckets-lids-rg580-12-64_1000.jpg" alt="" />
                <Typography className={classes.itemPrice}>
                  $230
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  Item Title
                </Typography>
                <Typography className={classes.detailText}>
                  Item description goes here. Look at these features!
                </Typography>
                <hr />
                <Typography>
                  Your Offer
                </Typography>
                <Typography className={classes.detailText}>
                  A Ham Sandwich
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

                    
        </List>
      </Box> 
    </> 
  );
}

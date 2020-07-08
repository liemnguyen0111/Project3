import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import ItemAPI from '../../../utils/ItemAPI'
import ItemDialog from '../ItemDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    flexGrow: '1',
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  item:
  {
    flex: 0.5,
    border: "1px",
    top: '0',
    borderStyle: "solid",
    borderRadius: "5px",
    marginBottom: '5px',
  },
  isRead:
  {
    flex: 0.5,
    border: "1px",
    top: '0',
    borderStyle: "solid",
    borderRadius: "5px",
    marginBottom: '5px',
    backgroundColor : '#cfd8dc'
  }
}));

const { isRead } = ItemAPI

export default function BidSection({ bid ,isUserItem, auctionOn, update}) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState([]);

  const handleClickOpen = (itemInfo) => {
    if(isUserItem) 
    {
      isRead({bidId : itemInfo._id })
      .then(() => update())
      .catch(err => console.log(err))
    }
    setCurrent(itemInfo)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <ItemDialog
        isUserItem={isUserItem}
        auctionOn={auctionOn}
        info={current}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        update={update}
      />

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {bid.map(bidItem =>
          (
            <>
              <ListItem
                button
                onClick={() => { handleClickOpen(bidItem) }}
                className={isUserItem? (bidItem.isRead? classes.item : classes.isRead) : classes.item}
                >

                <ListItemIcon >
                  {bidItem.photos[0] ? < Avatar alt={bidItem.photos[0]}
                    src={`${bidItem.photos[0]}`}
                    className={classes.bigAvatar} /> : <Avatar alt="N/A"
                      src='https://ssihplc.com/wp-content/uploads/no-image.png'
                      className={classes.bigAvatar} />}

                </ListItemIcon>
                <Typography noWrap>
                  <ListItemText primary={`${bidItem.user.firstName} ${bidItem.user.lastName}`} secondary={bidItem.description} />

                </Typography>
              </ListItem>
            </>
          ))}

      </List>
    </>
  );
}
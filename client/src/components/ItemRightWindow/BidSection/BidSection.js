import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "90%",
    overflow: "scroll",
    minHeight : '50vh',
    maxHeight : '50vh',
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  item:
  {
    flex: 0.5,
    border : "1px",
    borderStyle : "solid",
    borderRadius : "5px",
    marginBottom : '5px',
    overflow : 'hidden !important',
    whiteSpace: "nowrap",
  }
}));

export default function BidSection(props) {
  
  const classes = useStyles();

  const handleOnClick = itemId =>
  {
    console.log(itemId)
  }
  return (
   <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button  className={classes.item} onClick={()=>handleOnClick(123)} style={{position : 'sticky', top: '0', backgroundColor : 'green', zIndex : '10'}}>
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>
     
      <ListItem button  className={classes.item}>
        <ListItemIcon>
        <Avatar alt="Remy Sharp" src="https://www.cheapjordanaaas.com/wp-content/uploads/2019/01/70-Off-Jordan-Retro-10-WhiteBlackUniversity-RedHyper-Royal-Grade-School-Kids-Shoe-retro-jordan-shoes-cheap-R0241-2.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
       
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut possimus consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      
      <ListItem button  className={classes.item}>
        <ListItemIcon>
        <Avatar alt="Remy Sharp" src="https://images-na.ssl-images-amazon.com/images/I/51iYcRDsJrL._AC_SX679_.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
       
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut possimus consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      
      <ListItem button  className={classes.item}>
        <ListItemIcon>
        <Avatar alt="Remy Sharp" src="https://images-na.ssl-images-amazon.com/images/I/51iYcRDsJrL._AC_SX679_.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
       
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut possimus consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      
      <ListItem button  className={classes.item}>
        <ListItemIcon>
        <Avatar alt="Remy Sharp" src="https://images-na.ssl-images-amazon.com/images/I/51iYcRDsJrL._AC_SX679_.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
       
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut possimus consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

     
    </List>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    flexGrow : '1',
    overflow: "auto",
    minHeight : '80vh',
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

  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState('');

  const handleClickOpen = (itemInfo) => {
    setCurrent(itemInfo)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
    {/* <DetailsDialog/> */}
   
   <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
       

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="Alan L" secondary="Offer : 2016 Hyyndai" />
      </ListItem>
      {/* <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item1')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>


      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item2')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item3')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>

      <ListItem 
      button 
      onClick={()=>{handleClickOpen('item4')}} 
      className={classes.item}>
     
        <ListItemIcon >
        <Avatar alt="Remy Sharp" src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg" className={classes.bigAvatar} />
        </ListItemIcon>
        <ListItemText primary="User" secondary=" 123321Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut  consectetur quas, blanditiis sint veritatis ratione molestiae quo nesciunt perspiciatis culpa ipsam. Vero saepe provident, labore modi natus tempore." />
      </ListItem>
      */}
     
    </List>
    </>
  );
}
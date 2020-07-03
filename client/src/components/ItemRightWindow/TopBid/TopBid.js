import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles ,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
      whiteSpace: 'nowrap',
      width : '100%',
      borderRadius : '0',
      backgroundColor :'#9e9e9e',
  },
  item:
  {
    flex: 0.5,
    margin : '5px 0px 5px 0px',
    overflow : 'hidden !important',
    whiteSpace: "nowrap",
  },
  title:
  {
    textAlign : 'center',
    fontWeight: 'bold',
    fontstyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  isTop:
  {
    whiteSpace: 'nowrap',
    width : '100%',
    borderRadius : '0',
    backgroundColor :'#69f0ae',
  }
}));

export default function TopBid(props) {
  const classes = useStyles();
  const [isTop, setIsTop] = useState(true)

  const handleOnclick = () =>
  {
      setIsTop(!isTop)
  }
  return (
    <Paper elevation={3} className={isTop?classes.isTop : classes.root }> 
    <div >
    <ThemeProvider  >
      <Typography variant='h5' className={classes.title}>Top Bid</Typography>
    </ThemeProvider>
    {
        isTop?
        <ListItem 
        button 
        className={classes.item} onClick={handleOnclick}>
       
          <ListItemIcon >
          <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hostess-Twinkies.jpg/1200px-Hostess-Twinkies.jpg" className={classes.bigAvatar} />
          </ListItemIcon>
          <ListItemText primary="Tim Nguyen" secondary="Offer : lorem 1 donut and 2 twinkies  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum sint reprehenderit est cum odit libero ullam! Omnis iste voluptatum rerum eaque mollitia vero, possimus, magni rem maxime eligendi repellendus." />
         
        </ListItem>
              :           
          <ListItem 
        button 
        className={classes.item} 
        style={{textAlign : 'center', fontStyle: 'italic'}}
        onClick={handleOnclick}
        >
          <ListItemText  primary="NONE"/>
        </ListItem>
  
    }
  

    </div>
    </Paper>
  );
}
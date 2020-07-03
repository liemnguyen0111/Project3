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
      position : 'absolute',
      width : '100%',
  },
  item:
  {
    position : 'relative',
    width : '100%',
    margin : '5px 0px 5px 0px',
    flexShrink : '1',
    flexWrap: "wrap",
    textAlign : 'center',
    color: '#616161',
  },
  title:
  {
    textAlign : 'center',
    fontWeight: 'bold',
    fontstyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  ended:
  {
    height : '10vh',
    width : '100%',
  }
}));

export default function TopBid(props) {
  const classes = useStyles();
  const [isEnd, setIsEnd] = useState(true)

  return (
    <div  className={classes.root} >
    {     isEnd?   
        <Typography variant='h4' className={classes.item}>
        <strong>Ended</strong>
      </Typography>
        :
        <Typography variant='h4' className={classes.item}>
        <strong>End in 2 hours 24 minutes 24 seconds</strong>
      </Typography>
    }
    </div>
  );
}
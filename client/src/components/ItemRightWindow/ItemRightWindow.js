import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BidSection from './BidSection'
import ChatSection from './ChatSection'
import TopNav from './TopNav'
import TopBid from './TopBid'
import BottomNav from './BottomNav';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display : 'flex',
    flexFlow : 'column',
    backgroundColor: theme.palette.background.paper,
    border : '1px solid #bdbdbd',
    borderLeft : 'none',
    height : '90vh',
    [theme.breakpoints.down('xs')]: {
      borderLeft : '1px solid #bdbdbd',
      marginTop :'15px'
  }
  },
  body: {
    display : 'flex',
    flexFlow : 'column',
    // position: 'absolute',
    height : '90vh',
    backgroundColor: theme.palette.background.paper, 
  },
  view:{
    height :'100%',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  bottomNav : 
  {
    // position : 'sticky',
    // bottom : '0',
  },
  topNav : 
  {
    height: '20px',
    marginLeft : '0',
    marginRight : '0',
    whiteSpace: 'nowrap',
    width : '100%',
     
  },
  inputForm:
  {
    margin : '0px 5px 25px 5px'
  }
}));

export default function ItemRightWindow() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [messages, setMessage] = React.useState(['1'])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleOnSubmitMessage = event =>
  {
    event.preventDefault()
    if(event.keycode === 13  && messages || !event.keycode && messages)
    {
      // let messages = JSON.parse(JSON.stringify(message.messages))

      // messages.push(event.target.message.value)
      // setMessage({ ...message, messages, temp: '' })
      setMessage(m => [...m, event.target.message.value]);
      event.target.message.focus()
      event.target.reset()
    }
  }


  return (
    <div className={classes.root}>
     <div className={classes.body}>
     <TopBid/>
     <TopNav className={classes.topNav}/>
   

     <SwipeableViews  className={classes.view}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BidSection/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

        <ChatSection messages={messages} />

        </TabPanel>
       
      </SwipeableViews>
      
      {value? 
      <div className={classes.inputForm}>
        <form onSubmit={handleOnSubmitMessage}>
  
        <TextField
          id="outlined-full-width"
          name="message"
          style={{ height: "5vh" }}
          placeholder="Send a message"
          fullWidth
          variant="outlined"
         
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                  <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
              </InputAdornment>
            ),
          }}
          
        />  
        
     </form>
      </div> 
      :
       null
      }

      <BottomNav className={classes.bottomNav} handleChange={handleChange} value={value}/>
   </div> 
   </div>
  );
}
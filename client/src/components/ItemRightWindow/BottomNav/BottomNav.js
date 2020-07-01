// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import ChatIcon from '@material-ui/icons/Chat';
// import ImportExportIcon from '@material-ui/icons/ImportExport';

// const useStyles = makeStyles({
//   root: {
//     // display : 'flex',
//     position : 'relative',
//     bottom : '0',
//     marginLeft : 'auto',
//     marginRight : 'auto',
//     marginBottom : '0',
//     width: "auto",
//     // height : '10vh'
//   },
// });

// export default function BottomNav(props) {
//   const classes = useStyles();
  
//   return (
   
//     <BottomNavigation
//       value={props.value}
//       onChange={(event, newValue) => {
//         props.setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Bid" icon={<ImportExportIcon />} />
//       <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
//     </BottomNavigation>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import ChatIcon from '@material-ui/icons/Chat';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BidSection from '../BidSection';
import ChatSection from '../ChatSection';


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
    backgroundColor: theme.palette.background.paper,
    border : '1px solid'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    height : '50vh',
  },

}));

export default function BottomNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [messages, setMessage] = React.useState([])

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
    
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BidSection/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
    
        <ChatSection messages={messages}/>
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
        </TabPanel>
      </SwipeableViews>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Bid" {...a11yProps(0)} icon={<ImportExportIcon />} />
          <Tab label="Chat" {...a11yProps(1)} icon={<ChatIcon />} />
        </Tabs>
      </AppBar>
    </div>
  );
}
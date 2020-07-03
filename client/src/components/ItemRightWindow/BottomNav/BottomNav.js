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

export default function BottomNav(props) {
  // const classes = useStyles();
  // const theme = useTheme();


  return (
    <>
    
      <AppBar position="static" color="default">
     <Tabs
       value={props.value}
       onChange={props.handleChange}
       indicatorColor="primary"
       textColor="primary"
       variant="fullWidth"
       aria-label="full width tabs example"
       style={{backgroundColor: '#e0e0e0', borderBottomRightRadius : '5px',}}
     >
       <Tab label="Bid" {...a11yProps(0)} icon={<ImportExportIcon />} />
       <Tab label="Chat" {...a11yProps(1)} icon={<ChatIcon />} />
     </Tabs>
   </AppBar>
   
   </>
  );
}
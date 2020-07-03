import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import SearchButton from "../../components/SearchButton";
import Divider from '@material-ui/core/Divider'
import Drawer from './Drawer'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position : 'sticky',
    top: 0,
    zIndex : 20
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: 'flex-start',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    color: '#616161',
  },
  icon: {
    alignSelf: 'center',
    color: '#616161',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


const Navbar = () => {
  const classes = useStyles()
  



  return (
    <div className={classes.root}>
        <AppBar position="static" elevation={0} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h4">
            C A C H E
          </Typography>
          <IconButton className={classes.icon} aria-label="search">
            <SearchButton />
          </IconButton>
          <Drawer />
        </Toolbar>
      </AppBar>
      <Divider/>
    </div>
  )
}

export default Navbar
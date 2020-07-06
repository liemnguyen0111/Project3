import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import ItemContext from '../../utils/ItemContext'
import SearchButton from "../../components/SearchButton";
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
    alignSelf: 'center',
    color: '#616161',
    textDecoration: 'none',
    '&:hover':
    {
      cursor : 'pointer'
    }
  },
  space:
  {
    flexGrow : 1
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

  // const [items , setItems ] = useState(ItemContext)
  // console.log(items)
  
  return (
    <div className={classes.root}>
        <ItemContext.Consumer>
        {
          ({ onPageChange , setOnPageChange, setCategory }) =>
          ( 
            <>
             <AppBar position="static" elevation={0} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography 
          component={Link}
          to='/'
          className={classes.title} 
          variant="h4"
          onClick={() => {
            setOnPageChange(!onPageChange)
            setCategory('All')
          }}
          >
            C A C H E
          </Typography>
          <Typography className={classes.space}/>
          <IconButton className={classes.icon} aria-label="search">
            <SearchButton />
          </IconButton>
          <Drawer setOnPageChange={setOnPageChange} onPageChange={onPageChange} setCategory={setCategory}/>
        </Toolbar>
      </AppBar>
      <Divider/>
           </>
          )}
          </ItemContext.Consumer>
       
    </div>
  )
}

export default Navbar

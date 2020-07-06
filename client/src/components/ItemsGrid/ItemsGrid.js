import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginContext from '../../utils/LoginContext'
import SignInDialog from "../../components/Jumbotron/SignInModal/SignInDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'15px',
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:hover':
    {
      cursor : 'pointer'
    },
  },
  link:{
    textDecoration : 'none',
    // padding: theme.spacing(1),
    marginTop  : '10px'
  },
  date: {
    float: 'left',
    fontSize: 'small',
    marginBottom: '20px'
  },
  thumbnail: {
    height: '9rem',
    width: '100%',
    objectFit: 'contain',
  },
  title: {
    marginTop: '20px',
    color: 'black',
    '&:hover':
    {
      textDecoration : 'underline'
    }
  },
  price: {
    marginTop : '15px',
    marginBottom: '10px',
  }
}));

export default function ItemsGrid(props) {
  const classes = useStyles();
  const [ open, setOpen ] = React.useState(false);
  const { loginState, setLoginState } = useContext(LoginContext)
  
  const handleOnClick = () =>
  {
    if(!loginState)
    {
      setOpen(true)
    }
  }
  return (
    <div className={classes.root}>
       <SignInDialog open={open} setOpen={setOpen}/>
      <Grid container spacing={2} >

      {props.items.map((item) =>
        <Grid item xs={6} sm={3}>
          <Link 
          onClick={handleOnClick}
          to={loginState? `/ItemView/:search?${item._id}` : '/' }
          className={classes.link}
          >
            <Paper  
            className={classes.paper}
            >
              <Grid item xs={12}>
      <Typography className={classes.date}>Ends {item.dateTimeStop.split(','[0])}</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src={item.photos[0]} alt="IMG"/>
              </Grid>
              <Grid item xs={12} className={classes.title}>

          <Typography noWrap><strong>{item.title}</strong></Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={classes.price}>  ${item.price}</Typography>
              </Grid>
             
            </Paper> 
         </Link>
        </Grid>
      )}
      
      </Grid>
    </div>
  );
}
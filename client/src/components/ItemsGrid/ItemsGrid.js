import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios'
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
  // const [products, setProducts] = useState([])

  // const fetchProds = async (url) => {
  //   const result = await axios.get(url);

  //   const mydata = result.then((myresult) => {
  //     return myresult.data;

  //   });

  //   return mydata

  // }

  /*  useEffect(() => {
     const myprods = fetchProds('path/to/your/API');
     setProducts((products) => {
       return [...products, myprods];
      })
     
   }, []) */



  const hideGrid = { display: 'none', visibility: 'hidden' }
  const showGrid = { display: 'block', visibility: 'visible' }

  const [open, setOpen] = React.useState(false);
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
      <Grid container spacing={0}>

        <Grid style={props.artCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
              </Grid>
              <Grid item xs={12} className={classes.title}>
                <Typography><strong>Air Jordan 5 Retro 'Top 3'</strong></Typography>
              </Grid>
              <Grid item xs={12} className={classes.price}>
                <Typography>
                  $230
                </Typography>
              </Grid>
            </Paper>
          </a>
        </Grid>

        <Grid style={props.collectablesCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://www.breville.com/content/dam/breville/us/assets/blenders/finished-goods/bbl920/bbl920bss1bus1/images/pdp0.jpg.transform/breville-med/image.jpg" alt="" />
              </Grid>
              <Grid item xs={12} className={classes.title}>
                <Typography><strong>Air Jordan 5 Retro 'Top 3'</strong></Typography>
              </Grid>
              <Grid item xs={12} className={classes.price}>
                <Typography>
                  $230
                </Typography>
              </Grid>
            </Paper>
          </a>
        </Grid>

        <Grid style={props.fashionCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://secure.img1-fg.wfcdn.com/im/55776803/resize-h600-w600%5Ecompr-r85/4366/43669260/King+Tutankhamen%2527s+Life+Size+Sarcophagus+Statue.jpg" alt="" />
              </Grid>
              <Grid item xs={12} className={classes.title}>
                <Typography><strong>Air Jordan 5 Retro 'Top 3'</strong></Typography>
              </Grid>
              <Grid item xs={12} className={classes.price}>
                <Typography>
                  $230
                </Typography>
              </Grid>
            </Paper>
          </a>
        </Grid>

        <Grid style={props.homegardenCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://images.homedepot-static.com/productImages/797b0135-79ff-4196-9644-483ed8ca0a72/svn/paint-buckets-lids-rg580-12-64_1000.jpg" alt="" />
              </Grid>
              <Grid item xs={12} className={classes.title}>
                <Typography><strong>Air Jordan 5 Retro 'Top 3'</strong></Typography>
              </Grid>
              <Grid item xs={12} className={classes.price}>
                <Typography>
                  $230
                </Typography>
              </Grid>
            </Paper>
          </a>
        </Grid>

        <Grid style={props.servicesCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
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

        <Grid style={props.artCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/037/815/978/original/551059_00.png.png" alt="" />
          <Typography noWrap><strong>{item.title}</strong></Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={classes.price}>  ${item.price}</Typography>
              </Grid>
             
            </Paper> 
         
        </Grid>

        <Grid style={props.collectablesCat ? showGrid : hideGrid} item xs={6} sm={3}>
          <a href="https://google.com" className={classes.textLink}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography className={classes.date}>Ends Jul 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <img className={classes.thumbnail} src="https://www.breville.com/content/dam/breville/us/assets/blenders/finished-goods/bbl920/bbl920bss1bus1/images/pdp0.jpg.transform/breville-med/image.jpg" alt="" />
              </Grid>
              <Grid item xs={12} className={classes.title}>
                <Typography><strong>Air Jordan 5 Retro 'Top 3'</strong></Typography>
              </Grid>
              <Grid item xs={12} className={classes.price}>
                <Typography>
                  $230
                </Typography>
              </Grid>
            </Paper>
          </a>
        </Grid>

      )}
      
      </Grid>
    </div>
  );
}
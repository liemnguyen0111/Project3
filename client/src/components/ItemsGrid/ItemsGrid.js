import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  textLink: {
    textDecoration: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '15px',
    // borderStyle: 'solid',
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
  },
  price: {
    marginTop: '20px',
    marginBottom: '10px'
  },
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

      </Grid>
    </div>
  );
}
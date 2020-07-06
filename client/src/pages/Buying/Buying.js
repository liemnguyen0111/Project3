import React, {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserAPI from '../../utils/UserAPI'
import WatchingSection from '../../components/BuyingComponents/WatchingSection'
import BidsSection from '../../components/BuyingComponents/BidsSection'
import WonSection from '../../components/BuyingComponents/WonSection'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0px 15px 0px 15px',
    paddingBottom: '75px'
  }
}));

const { getUser } = UserAPI
const Buying = () => {
  const classes = useStyles();
  const [ items, setItems ] = useState({
    watchItems : [],
    buyItems : [],
    boughtItems : []
  })

  useEffect(() =>
  {
      getUser()
      .then(({data}) => {
        setItems(data)
      })
      .catch(err => console.error(err))
  },[])

  return (
    <>
    {console.log(items)}
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4}>
            <WatchingSection watchItems={items.watchItems}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BidsSection bidItems={items.buyItems}/>
          </Grid>
          <Grid item xs={12} sm={4} >
            <WonSection boughtItems={items.boughtItems}/>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Buying

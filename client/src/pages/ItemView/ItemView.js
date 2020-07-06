import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import ItemAPI from '../../utils/ItemAPI'
import ItemLeftWindow from "../../components/ItemLeftWindow";
import ItemRightWindow from "../../components/ItemRightWindow";
import './ItemView.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "15px 15px 0px 15px",
    paddingBottom: "75px",
  },
}));

const { getItem } = ItemAPI

class ItemView extends Component {
  //  let classes = useStyles();
  // const id = location
  state = {
    leftWindow: {
      title: '',
      photos: [],
      timeStart: '',
      timeEnd: '',
    },
    rightWindow: {
      price: '',
      isUserItem: false,
      bid: [],
      topBid: [],
      comment: [],
      isWatch : false
    }
  }

  componentWillMount() {
    const id = this.props.location.search.split('?')[1]
    getItem(id)
      .then(({ data }) => {
        // let leftWindow = JSON.parse(JSON.stringify(this.state.leftWindow))
        let leftWindow = {
          title: data[0].title,
          description: data[0].description,
          photos: data[0].photos,
          timeStart: data[0].dateTimeStart,
          timeEnd: data[0].dateTimeEnd,
        }

        // let rightWindow = JSON.parse(JSON.stringify(this.state.rightWindow))

        let rightWindow = {
          price: data[0].price,
          isUserItem: data[1].isUserItem,
          bid: data[0].bid,
          topBid: data[0].topBid,
          comment: data[0].comment,
          isWatch : data[2].isWatch
        }
        console.log(data)
        this.setState({
          leftWindow, rightWindow
        })
        console.log(rightWindow)
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <>
        <div style={{

          flexGrow: 1,
          margin: "15px 15px 0px 15px",
          paddingBottom: "75px",
        }}>
          <Grid container >
            <Grid item xs={12} sm={6}>
<<<<<<< HEAD
              <div className={'fade-in one'}>
                <ItemLeftWindow info={this.state.leftWindow}/>
              </div>  
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={'fade-in two'}>
                <ItemRightWindow id={this.props.location.search.split('?')[1]} info={this.state.rightWindow}/>
              </div>  
=======
              <ItemLeftWindow info={this.state.leftWindow} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ItemRightWindow id={this.props.location.search.split('?')[1]} info={this.state.rightWindow} />
>>>>>>> chatandbid
            </Grid>
          </Grid>
        </div>
      </>
    );
  }

};

export default ItemView;

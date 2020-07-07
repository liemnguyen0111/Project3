import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import io from 'socket.io-client'
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

let socket;
const ENDPOINT = 'https://uci-cache.herokuapp.com/'
socket = io(ENDPOINT)

const ItemView = () => {

  const [state, setState] = useState({
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
    },
    room : window.location.search.split('?')[1]
  })


    useEffect(()=>
    {
              handleDataUpdate()

             socket.emit('joinRoom', { room : state.room }, (error) => {
              if(error) {
                console.log('errr');
              }
            });
            
            socket.on("update", (data) => {
              handleDataUpdate()
            });
           
    },[])
  

  const handleOnUpdate = () =>
  {
    socket.emit('update','update')
  }

  const handleDataUpdate = () =>
  {
    getItem(state.room)  
    .then(({ data }) => {
      console.log(data)
    let leftWindow = {
      title: data[0].title,
      description: data[0].description,
      photos: data[0].photos,
      timeStart: data[0].dateTimeStart,
      timeEnd: data[0].dateTimeStop,
      auctionOn : data[0].auctionOn
    }
    let rightWindow = {
      user : data[3].user,
      price: data[0].price,
      isUserItem: data[1].isUserItem,
      bid: data[0].bid,
      topBid: data[0].topBid,
      comment: data[0].comment,
      isWatch : data[2].isWatch,
      auctionOn : data[0].auctionOn
    }
    setState({
      leftWindow, 
      rightWindow, 
      room :  window.location.search.split('?')[1]
    })

  })
  .catch(err => console.error(err))

  }


    return (
      <>
        <div style={{

          flexGrow: 1,
          margin: "15px 15px 0px 15px",
          paddingBottom: "75px",
        }}>
          <Grid container >
            <Grid item xs={12} sm={6}>
              <div className={'fade-in one'}>
                <ItemLeftWindow info={state.leftWindow}/>
              </div>  
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={'fade-in two'}>
                <ItemRightWindow id={state.room} info={state.rightWindow} update={handleOnUpdate}/>
              </div>  
            </Grid>
          </Grid>
        </div>
      </>
    );

};

export default ItemView;

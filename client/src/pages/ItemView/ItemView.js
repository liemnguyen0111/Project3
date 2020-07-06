import React, { Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import ItemAPI from '../../utils/ItemAPI'
import ItemLeftWindow from "../../components/ItemLeftWindow";
import ItemRightWindow from "../../components/ItemRightWindow";

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
    leftWindow : [],
    rightWindow : []
  }

  componentWillMount()
  {
    const id = this.props.location.search.split('?')[1]
    getItem(id)
    .then(({data}) => {
      let leftWindow = JSON.parse(JSON.stringify(this.state.leftWindow))
      leftWindow.push({
        title : data[0].title,
        photos : data[0].photos,
        timeStart : data[0].dateTimeStart,
        timeEnd : data[0].dateTimeEnd
      })
      this.setState({
        leftWindow
      })
    })
    .catch(err => console.error(err))
  }
  render()
  {
    return (
      <>
        <div style={{
       
            flexGrow: 1,
            margin: "15px 15px 0px 15px",
            paddingBottom: "75px",
        }}>
          <Grid container >
            <Grid item xs={12} sm={6}>
              <ItemLeftWindow info={this.state.leftWindow}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ItemRightWindow id={this.props.location.search.split('?')[1]}/>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
  
};

export default ItemView;

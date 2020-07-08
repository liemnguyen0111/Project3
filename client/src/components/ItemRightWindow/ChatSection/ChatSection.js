import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    backgroundColor: theme.palette.background.paper,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  item:
  {
    flex: 0.5,
    border: "1px",
    borderRadius: "5px",
    marginBottom: '5px',
  }
}));

export default function ChatSection({ messages , input }) {

  const classes = useStyles();

  const commentSection = useRef(null)

  useEffect(()=>
  {
    scrollToMyRef()
  }
  ,[messages])

  const scrollToMyRef = () => {
    const scroll =
    commentSection.current.scrollHeight -
    commentSection.current.clientHeight;
    commentSection.current.scrollIntoView(0 ,scroll);
  };

 
//test
  return (
    <>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}  
    >
    
        {messages.map(message =>
        <ListItem >

          <Avatar alt="Remy Sharp" src="https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png" className={classes.bigAvatar} />


          <ListItemText primary={`${message.user.firstName} ${message.user.lastName}`} secondary={`${message.body}`} />
        </ListItem>
      )    
      }
        <div ref={commentSection} />
    </List>

</>
  );
}
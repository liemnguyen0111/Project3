import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRange(props) {
  const classes = useStyles();

  const handleOnClick= (event, page) =>
  {
    event.preventDefault()
    props.setNewPage(page)
  }
  return (
    <div className={classes.root}>
      <Pagination count={props.pages} boundaryCount={4} onChange={handleOnClick}/>
    </div>
  );
}
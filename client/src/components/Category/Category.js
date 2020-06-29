import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Category = () =>
{

    const classes = useStyles();
    const list = ['cat1','cat2','cat3','cat4']
    return(
        <>
        <Grid
             container
             direction="row"
             justify="flex-end"
             alignItems="center"
            >
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Categories</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            {list.map(item =>
            <option value={item}>{item}</option>
            )}  
        </Select>
      </FormControl>
      </Grid>
      <Divider light />
        </>
    )
}

export default Category
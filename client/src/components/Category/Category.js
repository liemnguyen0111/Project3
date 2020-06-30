import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

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

    const handleOnChange = (event) =>
    {
        console.log(event.target.value)
    }

    return(
        <>
        <Grid
             container
             direction="row"
             justify="flex-end"
             alignItems="center"
            >
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Categories
        </InputLabel>
        <NativeSelect onChange={handleOnChange}>
          <option value="">All</option>
          {list.map(item => <option key={item} value={item}>{item}</option > )}  
        </NativeSelect>
      </FormControl>
      </Grid>
      <Divider light />
        </>
    )
}

export default Category
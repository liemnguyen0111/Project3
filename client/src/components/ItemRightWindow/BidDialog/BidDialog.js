import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root:
  {
    overFlow: 'hidden',
    '&*': {
      // margin: theme.spacing(1),
      overFlow: 'hidden !important'
    }
  },
  input: {
    display: 'none',
  },
}));


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function BidDialog(props) {
  const classes = useStyles();
  console.log(props)
  const [values, setValues] = React.useState({
    numberformat: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const handleOnSubmit = (event) =>
  {
    event.preventDefault()
    console.log(event.target.files.value)
    const fd = new FormData(event.target)
    console.log(fd)
    props.handleClose();
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      
      >
   <form enctype="multipart/form-data" onSubmit={handleOnSubmit} style={{ overFlow: 'hidden !important',whiteSpace: "nowrap"}}>
        <DialogTitle style={{width:'100vw'}}>
          Place bid
        </DialogTitle>
 
        <DialogContent>

       
        <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
>


<TextField
          id="standard-full-width"
          name='title'
          label="Label"
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
        label="$ Your Price"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        style={{width : '100%'}}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />

<TextField
          id="outlined-multiline-static"
          label="Description (Optional)"
          style={{marginTop :'20px', width : '100%'}}
          multiline
          rows={4}
          placeholder="Please enter a brief description to highlight your offer"
          variant="outlined"
        />
       
     
</Grid>

<input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        name ='files'
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" 
        color="primary" 
        component="span"
        style={{marginTop: '15px'}}
        >
          Upload Photos
        </Button>
      </label>

        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type='submit' color="primary">
            Bid
          </Button>
        </DialogActions>
   </form>
      </Dialog>
   
    </div>
  );
}
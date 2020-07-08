import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import ItemAPI from '../../../utils/ItemAPI'

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

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const { userBid } = ItemAPI

export default function BidDialog(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    numberformat: "",
  });

  const [files, setFiles] = useState();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = new FormData();
    const newBid = 
    {
      price : event.target.numberformat.value,
      description : event.target.description.value,
      postId : props.id
    }

    if(files)
    {
      for (const key of Object.keys(files)) {
    formData.append('imgCollection', files[key])}
      }

      for (const key of Object.keys(newBid)) {
        formData.append(key,newBid[key])
      }

    userBid(formData)
    .then(()=>
    {
      props.update()
      console.log(props)
    }
    )
    .catch(err => console.error(err))

    event.target.reset()
    props.handleClose();
  };

  const handleFilesOnChange = (event) => {
    event.preventDefault();
    setFiles(event.target.files);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <form
          enctype="multipart/form-data"
          onSubmit={handleOnSubmit}
          style={{ overFlow: "hidden !important", whiteSpace: "nowrap" }}
        >
          <DialogTitle>Place bid</DialogTitle>

          <DialogContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <TextField
                required="true"
                label="$ Your Offer"
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                style={{ width: "100%" }}
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />

              <TextField
                required="true"
                id="outlined-multiline-static"
                name="description"
                label="Description"
                style={{ marginTop: "20px", width: "100%" }}
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
              name="files"
              onChange={handleFilesOnChange}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ marginTop: "15px" }}
              >
                Upload Photos
              </Button>
            </label>
          </DialogContent>

          <DialogActions>
            <Button autoFocus onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Bid
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

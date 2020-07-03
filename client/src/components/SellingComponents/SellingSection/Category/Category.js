import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const Category = (props) => {
  const classes = useStyles();
  const list = [
    "Art",
    "Collectables",
    "Experiences",
    "Fashion",
    "Home & Garden",
    "Media",
    "Miscellaneous",
    "Services",
    "Sporting Goods",
    "Tech",
  ];

  const handleOnChange = (event) => {
    props.setCategory(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>Select a Category</InputLabel>
        <NativeSelect onChange={handleOnChange}>
          {list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default Category;

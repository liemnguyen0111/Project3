import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ItemsGrid from "../ItemsGrid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Category = (props) => {
  const classes = useStyles();
  const list = [
    "All",
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

  const [categoryState, setCategoryState] = useState({
    allProducts: true,
    artIsTrue: true,
    collectablesIsTrue: true,
    experiencesIsTrue: true,
    fashionIsTrue: true,
    homegardenIsTrue: true,
    mediaIstrue: true,
    miscellaneousIsTrue: true,
    servicesIsTrue: true,
    sportinggoodsIsTrue: true,
    techIsTrue: true
  })


  const handleOnChange = (event) => {
    console.log(event.target.value)
    let categories = event.target.value

    switch (categories) {
      case "All": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: true,
              collectablesIsTrue: true,
              experiencesIsTrue: true,
              fashionIsTrue: true,
              homegardenIsTrue: true,
              mediaIstrue: true,
              miscellaneousIsTrue: true,
              servicesIsTrue: true,
              sportinggoodsIsTrue: true,
              techIsTrue: true
            }
          }
        })
        break
      }
      case "Art": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: true,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break 
      }
      case "Collectables": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: true,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Experiences": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: true,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Fashion": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: true,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Home & Garden": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: true,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Media": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: true,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Miscellaneous": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: true,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Services": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: true,
              sportinggoodsIsTrue: false,
              techIsTrue: false
            }
          }
        })
        break
      }
      case "Sporting Goods": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: true,
              techIsTrue: false
            }
          }
        })
        break
      }  
      case "Tech": {
        setCategoryState((categoryState) => {
          return {
            ...categoryState, ...{
              artIsTrue: false,
              collectablesIsTrue: false,
              experiencesIsTrue: false,
              fashionIsTrue: false,
              homegardenIsTrue: false,
              mediaIstrue: false,
              miscellaneousIsTrue: false,
              servicesIsTrue: false,
              sportinggoodsIsTrue: false,
              techIsTrue: true
            }
          }
        })
        break
      }
    }
  }

  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Categories
          </InputLabel>
          <NativeSelect onChange={handleOnChange}>
            <option value=""></option>
            {list.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <Grid item xs={12}>
          <ItemsGrid
            artCat={categoryState.artIsTrue}
            collectablesCat={categoryState.collectablesIsTrue}
            experiencesCat={categoryState.experiencesIsTrue}
            fashionCat={categoryState.fashionIsTrue}
            homegardenCat={categoryState.homegardenIsTrue}
            mediaCat={categoryState.mediaIstrue}
            miscellaneousCat={categoryState.miscellaneousIsTrue}
            servicesCat={categoryState.servicesIsTrue}
            sportingCat={categoryState.sportinggoodsIsTrue}
            techCat={categoryState.techIsTrue}
          />
        </Grid>
      </Grid>
      <Divider light />
    </>
  );
};

export default Category;

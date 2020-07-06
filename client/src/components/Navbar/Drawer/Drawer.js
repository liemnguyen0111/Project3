import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import LoginContext from "../../../utils/LoginContext";
import SignInDialog from "../../Jumbotron/SignInModal/SignInDialog";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    alignSelf: "center",
    color: "#616161",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const Drawer = () => {


  const [open, setOpen] = useState(false);

  const { loginState, setLoginState } = useContext(LoginContext);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <SignInDialog
        onClick={(event) => {
          event.stopPropagation();
        }}
        open={open}
        setOpen={setOpen}
      />
      <List>
        <ListItem
          button
          key="home"
          component={Link}
          to="/"
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          key="howitworks"
          component={Link}
          to="/howitworks"
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="How it Works" />
        </ListItem>
        {!loginState ? null : (
          <>
            <ListItem
              button
              key="buying"
              component={Link}
              to="/buying"
              onClick={toggleDrawer(anchor, false)}
            >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Buying" />
            </ListItem>
            <ListItem
              button
              key="selling"
              component={Link}
              to="/selling"
              onClick={toggleDrawer(anchor, false)}
            >
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Selling" />
            </ListItem>
          </>
        )}
      </List>

      <Divider />
      <List>
        {!loginState ? (
          <ListItem
            onClick={(event) => {
              event.stopPropagation();
              setOpen(true);
            }}
            button
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
        ) : null}
        {loginState ? (
          <ListItem
            onClick={() => {
              localStorage.removeItem("user");
              window.location = "/";
            }}
            button
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        ) : null}
      </List>
    </div>
  );
  return (
    <IconButton aria-label="display more actions" edge="end">
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className={classes.icon}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </IconButton>
  );
};

export default Drawer;

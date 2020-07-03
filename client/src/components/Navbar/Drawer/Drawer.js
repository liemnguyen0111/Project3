import React, {useContext} from "react";
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
import VisibilityIcon from "@material-ui/icons/Visibility";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import LoginContext from '../../../utils/LoginContext'

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
  const {loginState, setLoginState} = useContext(LoginContext)

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

  const drawerList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "How it Works",
      link: "/howItWorks",
    },
    {
      name: "Watching",
      link: "/watching",
    },
    {
      name: "Selling",
      link: "/selling",
    },
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {drawerList.map((item, index) => (
          <ListItem button key={item.name} component={Link} to={item.link}>
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <HelpIcon />}
              {index === 2 && <VisibilityIcon />}
              {index === 3 && <MonetizationOnIcon />}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {!loginState ? (
          <ListItem button>
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

import { AppBar, makeStyles } from "@material-ui/core";
import React from "react";
import './header.scss'
import { HeaderBar } from "../header-bar";
import HeaderMenu from "../header-menu";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center'
    }
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menu: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));


export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.bar}>
      <HeaderBar className={classes.toolbar} />
      <HeaderMenu className={classes.menu} />
    </AppBar>
  );
}

export default Header;

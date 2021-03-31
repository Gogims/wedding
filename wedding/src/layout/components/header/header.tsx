import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './header.scss'

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));


export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.menu}>
      <Toolbar>
        <Typography variant="h6" className={classes.menuButton} >
          <Link component={RouterLink} to="/" underline="none">Our Story</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h6" className={classes.menuButton}>
          <Link component={RouterLink} to="/destination" underline="none">When &amp; Where</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h6" className={classes.menuButton}>
          <Link component={RouterLink} to="/rsvp" underline="none">RSVP</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h6" className={classes.menuButton}>
          <Link component={RouterLink} to="/transportation" underline="none">Transportation</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h6" className={classes.menuButton}>
          <Link component={RouterLink} to="/gift" underline="none">Gift Registry</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h6" className={classes.menuButton}>
          <Link component={RouterLink} to="/gallery" underline="none">Gallery</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

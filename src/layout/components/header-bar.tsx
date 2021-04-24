import { makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'inline-flex',
    fontFamily: 'Dancing Script'
  }
}));

type HeaderBarProps = {
  className: string
}

export const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const classes = useStyles();
  
  return (
    <Toolbar className={props.className}>
        <Typography variant="h5" className={classes.menuButton} >
          <Link component={RouterLink} to="/" underline="none">Our Story</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Link component={RouterLink} to="/destination" underline="none">When &amp; Where</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Link component={RouterLink} to="/rsvp" underline="none">RSVP</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Link component={RouterLink} to="/transportation" underline="none">Transportation</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Link href="https://www.blueprintregistry.com/registry/salma-and-gogi-wedding-registry-2-19-2022" underline="none" target="_blank">Gift Registry</Link>
        </Typography>
        <Typography className={classes.menuButton}>
          <FavoriteIcon color="primary"/>
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Link component={RouterLink} to="/gallery" underline="none">Gallery</Link>
        </Typography>
    </Toolbar>
  );
}

export default HeaderBar;

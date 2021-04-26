import { IconButton, Link, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) => ({
    menu: {
      display: 'inline-flex',
      fontFamily: 'Dancing Script'
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}));

type HeaderMenuProps = {
  className: string
}

export const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Toolbar className={props.className}>
        <IconButton edge="start" color="primary" aria-controls="simple-menu" aria-haspopup="true" className={classes.menu} onClick={handleClick}>
            <MenuIcon className={classes.icon} /> Menu
        </IconButton>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link component={RouterLink} to="/" underline="none" className={classes.menu}>
                        <FavoriteIcon color="primary" className={classes.icon} /> Our Story
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link component={RouterLink} to="/destination" underline="none" className={classes.menu}>
                        <FavoriteIcon color="primary" className={classes.icon} /> When &amp; Where
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link component={RouterLink} to="/transportation" underline="none" className={classes.menu}>
                        <FavoriteIcon color="primary" className={classes.icon} /> Transportation
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link component={RouterLink} to="/rsvp" underline="none" className={classes.menu}>
                        <FavoriteIcon color="primary" className={classes.icon} /> RSVP
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link underline="none" className={classes.menu} href="https://www.blueprintregistry.com/registry/salma-and-gogi-wedding-registry-2-19-2022" target="_blank">
                        <FavoriteIcon color="primary" className={classes.icon} /> Gift Registry
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                    <Link component={RouterLink} to="/gallery" underline="none" className={classes.menu}>
                        <FavoriteIcon color="primary" className={classes.icon} /> Gallery
                    </Link>
                </Typography>
            </MenuItem>
        </Menu>
    </Toolbar>
  );
}

export default HeaderMenu;

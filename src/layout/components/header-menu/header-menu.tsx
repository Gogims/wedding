import { IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';

type HeaderMenuProps = {
  className: string
}

export const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Toolbar className={props.className}>
        <IconButton edge="start" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
        </IconButton>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/" underline="none">
                        <FavoriteIcon color="primary"/> Our Story
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/destination" underline="none">
                        <FavoriteIcon color="primary"/> When &amp; Where
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/rsvp" underline="none">
                        <FavoriteIcon color="primary"/> RSVP
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/transportation" underline="none">
                        <FavoriteIcon color="primary"/> Transportation
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/gift" underline="none">
                        <FavoriteIcon color="primary"/> Gift Registry
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Typography>
                    <Link component={RouterLink} to="/gallery" underline="none">
                        <FavoriteIcon color="primary"/> Gallery
                    </Link>
                </Typography>
            </MenuItem>
        </Menu>
    </Toolbar>
  );
}

export default HeaderMenu;

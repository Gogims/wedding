import { IconButton, Link, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import headerData from "src/layout/header.json";
import { Header } from "src/shared/models/header";

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
    const headers = headerData as Header[];
    const headerElements = headers.map((h,i) => {
        const header = h.isExternal ?
          (<Link href={h.route} underline="none" target="_blank" className={classes.menu}>
              <FavoriteIcon color="primary" className={classes.icon} />{h.name}
            </Link>) :
          (<Link component={RouterLink} underline="none" to={h.route} className={classes.menu}> 
            <FavoriteIcon color="primary" className={classes.icon} /> {h.name}
            </Link>)
    
        return (
          <MenuItem key={i} onClick={handleClose}>
              <Typography variant="h6">
                  {header}
              </Typography>
          </MenuItem>
        )
      });

  return (
    <Toolbar className={props.className}>
        <IconButton edge="start" color="primary" aria-controls="simple-menu" aria-haspopup="true" className={classes.menu} onClick={handleClick}>
            <MenuIcon className={classes.icon} /> Menu
        </IconButton>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {headerElements}
        </Menu>
    </Toolbar>
  );
}

export default HeaderMenu;

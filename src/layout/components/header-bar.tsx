import { makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Header } from "src/shared/models/header";
import headerData from "src/layout/header.json";

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
  const headers = headerData as Header[];
  const headerElements = headers.map((h,i) => {
    const header = h.isExternal ?
      (<Link href={h.route} underline="none" target="_blank">{h.name}</Link>) :
      (<Link component={RouterLink} to={h.route} underline="none">{h.name}</Link>)
    const heartIcon = headers.length - 1 === i ?
      <></> :
      (<Typography className={classes.menuButton}><FavoriteIcon color="primary"/></Typography>)

    return (
      <div key={i}>
        <Typography variant="h5" className={classes.menuButton}>
          {header}
        </Typography>
        {heartIcon}
      </div>
    )
  });
  
  return (
    <Toolbar className={props.className}>
      {
        headerElements
      }
    </Toolbar>
  );
}

export default HeaderBar;

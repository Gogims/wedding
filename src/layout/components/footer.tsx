import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import utility from "src/shared/utility";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(4)
  },
  footerImage: {
    width: '100wh',
    maxWidth: '100%'
  }
}),
);

export const Footer: React.FC = () => {
  const classes = useStyles();
  const isDesktop = utility.IsDesktop();
  const src = isDesktop ?
    'images/footer-desktop.png' :
    'images/footer.jpg';

  return (
    <div className={classes.footer}>
      <img src={src} alt="J&amp;S" className={classes.footerImage} />
    </div>
  );
}

export default Footer;

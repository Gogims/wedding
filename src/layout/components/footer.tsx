import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

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

  return (
    <div className={classes.footer}>
      <img src="images/footer.jpg" alt="J&amp;S" className={classes.footerImage} />
    </div>
  );
}

export default Footer;

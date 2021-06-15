import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Reserve from "src/shared/reserve";
import rsvp from "./rsvp.json";

const useStyles = makeStyles((theme: Theme) => ({
  cards: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}));

export const Rsvp: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.cards}>
      <Grid item xs={11} sm={6} md={5} >
        <Reserve {...rsvp}/>
      </Grid>
    </Grid>
  );
}

export default Rsvp;

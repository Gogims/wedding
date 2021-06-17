import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ImageSlider from "src/shared/image-slider";
import Accomodation from "./components/accomodation";
import Calendar from "./components/calendar";
import Hacienda from "./components/hacienda";
import OtherOption from "./components/other-options";
import Schedule from "../shared/schedule";
import Trip from "./components/trip";
import hacienda from "./hacienda.json";
import HaciendaMap from "src/shared/hacienda-map";

const useStyles = makeStyles((theme: Theme) => ({
  cards: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}));

export const Destination: React.FC = () => {
  const classes = useStyles();
  const haciendaArray = hacienda as string[];

  return (
    <>
      <ImageSlider imageName="hacienda" total={4} extension="jpg" />

      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Hacienda paragraphs={haciendaArray} />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Schedule imageName="schedule" />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Calendar />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Accomodation />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <HaciendaMap />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <OtherOption />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Trip />
        </Grid>
      </Grid>
    </>
  );
}

export default Destination;

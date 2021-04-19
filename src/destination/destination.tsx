import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ImageSlider from "src/shared/image-slider";
import Hacienda from "./components/hacienda";
import Information from "./components/information";
import OtherOption from "./components/other-options";
import Schedule from "./components/schedule";
import Trip from "./components/trip";

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    textAlign: "center"
  },
  map: {
    height: 300,
    border: 0,
    width: '100%',
    maxWidth: 800
  },
  cards: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}));

export const Destination: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <ImageSlider imageName="hacienda" total={4} extension="jpg" />

      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Information />
        </Grid>        
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Schedule />
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <iframe title="Google Maps" className={classes.map} allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP}&q=Hotel+%26+Spa+Hacienda+de+Cortes`}>
          </iframe>
        </Grid>
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Hacienda />
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

import { makeStyles } from "@material-ui/core";
import React from "react";
import ImageSlider from "src/shared/image-slider";

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    textAlign: "center"
  },
  map: {
    width: '90%',
    height: 300,
    border: 0,
    [theme.breakpoints.up('md')]: {
      width: '50%',
    }
  }
}));

export const Destination: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <ImageSlider imageName="hacienda" total={4} extension="jpg" />
      <div className={classes.mapWrapper}>
        <iframe title="Google Maps" className={classes.map} allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP}&q=Hotel+%26+Spa+Hacienda+de+Cortes`}>
        </iframe>
      </div>
    </div>
  );
}

export default Destination;

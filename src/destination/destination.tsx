import { Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ImageSlider from "src/shared/image-slider";
import InfoIcon from '@material-ui/icons/Info';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GoogleCalendar from "src/shared/google-calendar";

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
  },
  cards: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  card: {
    maxWidth: 800
  },
  cardContent: {
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body1.fontSize
    }
  },
  cardInformation: {
    marginBottom: theme.spacing(1)
  },
  schedule: {
    marginRight: theme.spacing(8)
  }
}));

export const Destination: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <ImageSlider imageName="hacienda" total={4} extension="jpg" />

      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Card variant="outlined" className={classes.card} >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <InfoIcon /> Information
              </Typography>
              <div className={classes.cardContent}>
                <div className={classes.cardInformation}>Hotel &#38; Spa Hacienda de Cortes</div>
                <div className={classes.cardInformation}>Date: February 22nd, 2022</div>
                <div className={classes.cardInformation}>Address: Plaza Kennedy 90, Atlacomulco, 62560 Jiutepec, Mor., Mexico</div>
                <div>Dress Code: formal or black-tie optional</div>
              </div>
            </CardContent>
            <CardActions>
              <GoogleCalendar />
            </CardActions>
          </Card>
        </Grid>        
      </Grid>
      <Grid container className={classes.cards} justify="center">
        <Grid item xs={11} md={6}>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <DateRangeIcon /> Wedding Day Schedule
              </Typography>
              <div className={classes.cardContent}>
                <div>
                  <span className={classes.schedule}>4 pm</span>
                  <span>Ceremony</span>
                </div>
                <div>
                  <span className={classes.schedule}>5 pm</span>
                  <span>Cocktail Hour</span>
                </div>
                <div>
                  <span className={classes.schedule}>6 pm</span>
                  <span>Reception</span>
                </div>
                <div>
                  <span className={classes.schedule}>8 pm</span>
                  <span>Dance Party</span>
                </div>
                <div>
                  <span className={classes.schedule}>2 am</span>
                  <span>End of Reception</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.mapWrapper}>
        <iframe title="Google Maps" className={classes.map} allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP}&q=Hotel+%26+Spa+Hacienda+de+Cortes`}>
        </iframe>
      </div>
    </div>
  );
}

export default Destination;

import React from 'react';
import rsvp from './rsvp.json';
import Reserve from 'src/shared/reserve';
import WeddingCountdown from 'src/shared/wedding-countdown';
import { Grid, Link, makeStyles, Theme } from '@material-ui/core';
import Hacienda from './components/hacienda';
import HaciendaMap from 'src/shared/hacienda-map';
import LoveImage from 'src/shared/love-image';
import { Link as RouterLink } from "react-router-dom";
import Schedule from 'src/shared/schedule';
import Historia from './components/historia';
import Registry from './components/registry';
import Gallery from './components/gallery';

const useStyles = makeStyles((theme: Theme) => ({
  cards: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  link: {
    width: '100%'
  }
}));

export const Spanish: React.FC = () => {
  const classes = useStyles();

  return (    
    <Grid container justify="center" className={classes.cards}>
      <Grid item xs={12}>
        <div>
          <WeddingCountdown daysLabel="Días" hoursLabel="Horas" minutesLabel="Minutos" secondsLabel="Segundos" />
        </div>
      </Grid>

    <Grid container justify="center" className={classes.cards}>
      <Grid item xs={11} md={6} >
        <Historia />
      </Grid>
    </Grid>

      <Grid container justify="center" className={classes.cards}>
        <Grid item xs={11} md={6} >
          <Hacienda />
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.cards}>
        <Grid item xs={11} md={6} >
          <Schedule imageName="horario" />
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.cards}>
        <Grid item xs={11} md={6}>
          <HaciendaMap />
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.cards}>
        <Grid item xs={11} md={6}>
          <div id="rsvp">
            <Reserve {...rsvp}/>
          </div>
        </Grid>
      </Grid>

    <Grid container justify="center" className={classes.cards}>
      <Grid item xs={11} md={6}>
        <Registry />
      </Grid>
    </Grid>

    <Grid container justify="center" className={classes.cards}>
      <Grid item xs={11} md={6}>
        <Gallery />
      </Grid>
    </Grid>

      <Link component={RouterLink} to="/gallery" className={classes.link}>
        <LoveImage />
      </Link>
      
    </Grid>
  );
}

export default Spanish;
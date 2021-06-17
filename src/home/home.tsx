import React from 'react';
import WeddingCountdown from '../shared/wedding-countdown';
import TimelineStory from './components/timeline-story/timeline-story';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import HashtagForm from './components/hashtag-form';
import Showcase from './components/showcase';
import bridesmaid from './bridesmaid.json';
import groomsmen from './groomsmen.json';
import LoveImage from 'src/shared/love-image';

const useStyles = makeStyles((theme: Theme) => ({
    countdown: {
      marginBottom: theme.spacing(5)
    },
    chooseYou: {
      textAlign: 'center'
    },
    chooseYouImage: {
      maxWidth: '100%'
    }
}));

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <LoveImage />

      <div className={classes.countdown}>
        <WeddingCountdown daysLabel="Days" hoursLabel="Hours" minutesLabel="Minutes" secondsLabel="Seconds" />
      </div>
      
      <TimelineStory />

      <Grid item xs={12} className={classes.chooseYou}>
          <img src="images/choose-you.jpg" alt="I Choose You" className={classes.chooseYouImage} />
      </Grid>

      <Showcase showcaseUrl="images/bridesmaid.jpg" friends={bridesmaid} />
      <Showcase showcaseUrl="images/groomsmen.jpg" friends={groomsmen} />

      <HashtagForm />
    </>
  );
}

export default Home;

import React from 'react';
import WeddingCountdown from './components/wedding-countdown';
import TimelineStory from './components/timeline-story/timeline-story';
import { Card, CardMedia, Grid, makeStyles, Theme } from '@material-ui/core';
import utility from 'src/shared/utility';
import HashtagForm from './components/hashtag-form';
import Showcase from './components/showcase';
import bridesmaid from './bridesmaid.json';
import groomsmen from './groomsmen.json';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
      width: '100%'
    },
    image: {
        height: '100vh'
    },
    countdown: {
      marginBottom: theme.spacing(5)
    },
    chooseYou: {
      textAlign: 'center'
    },
    chooseYouImage: {
      maxWidth: '100%'
    }
  }),
);

export const Home: React.FC = () => {
  const classes = useStyles();
  const imageName = utility.IsDesktop() ? 'Home' : 'Home-mobile';

  return (
    <>
      <Card className={classes.card} >
        <CardMedia className={classes.image} image={`./images/${imageName}.jpg`} title="Love Is All You Need" />
      </Card>

      <div className={classes.countdown}>
        <WeddingCountdown />
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

import React from 'react';
import WeddingCountdown from './components/wedding-countdown/wedding-countdown';
import TimelineStory from './components/timeline-story/timeline-story';
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import utility from 'src/shared/utility';

const useStyles = makeStyles(() => ({
    card: {
      width: '100%'
    },
    image: {
        height: '100vh'
    },
    countdown: {
      marginBottom: 100
    }    
  }),
);

export const Home: React.FC = () => {
  const classes = useStyles();
  const imageName = utility.IsDesktop() ? 'Home' : 'Home-mobile';

  return (
    <div>
      <Card className={classes.card} >
        <CardMedia className={classes.image} image={`./images/${imageName}.jpg`} title="Love Is All You Need" />
      </Card>

      <div className={classes.countdown}>
        <WeddingCountdown />
      </div>
      
      <TimelineStory />
    </div>
  );
}

export default Home;

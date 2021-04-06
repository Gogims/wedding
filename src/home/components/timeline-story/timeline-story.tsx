import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlightIcon from '@material-ui/icons/Flight';
import HomeIcon from '@material-ui/icons/Home';
import WcIcon from '@material-ui/icons/Wc';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  primaryTail: {
    backgroundColor: theme.palette.primary.main
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const TimelineStory: React.FC = () => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 7th, 2017 • San Antonio, TX
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FavoriteIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              The Shared Elevator
            </Typography>
            <Typography>
              Salma and Jennifer, her college best friend, were headed to downtown San Antonio on first Friday pub run. 
              She re-routed a Lyft to make a stop at Paramour for a mutual friend’s birthday party. 
              In the elevator going up to the rooftop....
            </Typography>
            <br/>
            <Typography>
              Jose had other plans that day, but his mom convinced him to go to her friend’s daughter’s birthday party at Paramour. 
              In the elevator going up to the rooftop... they made eye contact for the first time! 
              His Dominican flow had her captivated immediately. By the end of the night, they had each other’s numbers ;)
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            September 1st, 2018 • 9 countries
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <FlightIcon color="secondary"/>
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              The South American Trip
            </Typography>
            <Typography>
              She has a wandering soul and he has a kindred spirit. 
              They packed up their homes in Texas and embarked on a 19 month journey as digital nomads with their dog, Brodie.
            </Typography>
            <br/>
            <Typography>
              They spent the first months showing each other’s roots in her home country Mexico, and in his home country, 
              the Dominican Republic. Then they lived in various cities in Colombia, Peru, Chile, Argentina, and Brazil, 
              learning from the world together, and supporting each other through the rollercoaster of life abroad!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            March 21st, 2020 • Austin, Texas
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HomeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              The Pandemic 
            </Typography>
            <Typography>
              Soon after celebrating one last horrah at Carnaval in Río de Janeiro, 
              the pandemic brought them back to Texas to be closer to family during those months of uncertainty. 
              After living out of Airbnbs for many many months, they decided to create a home of their own and 
              moved to Austin, Texas with Brodie! This is where they live now. 
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            January 16th, 2021 • Dominican Republic
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <WcIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              The Proposal
            </Typography>
            <Typography>
              They were visiting his family and traveled to the North of DR to Las Terrenas, 
              his favorite part of the Island, when they set out for a sunset walk on the beach. 
              To her surprise, she found a message hidden in a glass bottle in the sand, 
              telling a story of a local fishermen‘s tale. As she faced the sun to make a wish with 
              her eyes closed(as instructed by the tale), he knelt down in one knee and waited for her 
              to turn around. Without a moment of doubt, she knew they were destined to spend the rest of their lives together!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineStory;

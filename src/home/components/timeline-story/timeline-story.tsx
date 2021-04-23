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
import SimpleDialog from 'src/shared/simple-dialog';
import utility from 'src/shared/utility';
import storiesJson from "./stories.json";
import Story from './story';

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
  const [open, setOpen] = React.useState(false);
  const [story, setStory] = React.useState([""]);
  const stories = storiesJson as string[];
  const isDesktop = !utility.IsDesktop();

  const handleClickStory = (story: string[]) => {
    if (isDesktop)
    {
      setStory(story);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            <Paper elevation={3} className={classes.paper} onClick={() => handleClickStory([stories[0], stories[1]])}>
              <Typography variant="h6" component="h1">
                The Shared Elevator
              </Typography>
              <Typography>
                <Story story={stories[0]} length={50}/>
              </Typography>
              <br/>
              {
                !isDesktop && <Typography>
                  {stories[1]}
                </Typography>
              }
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
            <Paper elevation={3} className={classes.paper} onClick={() => handleClickStory([stories[2], stories[3]])}>
              <Typography variant="h6" component="h1">
                The South American Trip
              </Typography>
              <Typography>
                <Story story={stories[2]} length={52}/>
              </Typography>
              <br/>
              {
                !isDesktop && <Typography>
                  {stories[3]}
                </Typography>
              }
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
            <Paper elevation={3} className={classes.paper} onClick={() => handleClickStory([stories[4]])}>
              <Typography variant="h6" component="h1">
                The Pandemic 
              </Typography>
              <Typography>
                <Story story={stories[4]} length={50}/>
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
            <Paper elevation={3} className={classes.paper} onClick={() => handleClickStory([stories[5]])}>
              <Typography variant="h6" component="h1">
                The Proposal
              </Typography>
              <Typography>
                <Story story={stories[5]} length={50}/>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <SimpleDialog open={open} value={story} onClose={handleClose} />
    </>
  );
}

export default TimelineStory;
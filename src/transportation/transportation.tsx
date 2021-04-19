import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import FlightIcon from '@material-ui/icons/Flight';
import Options from "./components/options";
import TransportationForm from "./components/transportation-form";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  header: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5)
  }
}));

export const Transportation: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" className={classes.header}>
        <FlightIcon /> We encourage our guests to book their flights 
        Friday morning on February 18th, 2022 to the MEXICO CITY (MEX) airport <FlightIcon />
      </Typography>
      
      <Options />
      <TransportationForm />
    </div>
  );
}

export default Transportation;

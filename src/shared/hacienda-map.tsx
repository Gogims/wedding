import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    map: {
      height: 300,
      border: 0,
      width: '100%',
      maxWidth: 800
    }
  }));

export const HaciendaMap: React.FC = () => {
    const classes = useStyles();

    return (
        <iframe title="Google Maps" className={classes.map} allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP}&q=Hotel+%26+Spa+Hacienda+de+Cortes`}>
        </iframe>
    );
}

export default HaciendaMap;
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import utility from './utility';

const useStyles = makeStyles(() => ({
    card: {
        width: '100%'
    },
    image: {
        height: '100vh'
    }
  }),
);

export const LoveImage: React.FC = () => {
    const classes = useStyles();
    const imageName = utility.IsDesktop() ? 'Home' : 'Home-mobile';
    
    return (
        <Card className={classes.card} >
            <CardMedia className={classes.image} image={`./images/${imageName}.jpg`} title="Love Is All You Need" />
        </Card>
    );
}

export default LoveImage;
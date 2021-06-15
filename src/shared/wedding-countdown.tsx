import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import utility from './utility';
import Clock from './clock';

type Label = {
    daysLabel: string;
    hoursLabel: string;
    minutesLabel: string;
    secondsLabel: string;
}

const useStyles = makeStyles((theme) => ({
    weddingCountdown: {
        textAlign: 'center'
    },
    nameHeading: {
        fontFamily: 'Dancing Script',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h4.fontSize,
            paddingTop: theme.spacing(5)
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.h3.fontSize
        }
    },
    heading: {
        fontFamily: 'Marck Script',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h4.fontSize,
            paddingTop: theme.spacing(5)
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.h3.fontSize
        }
    },
    location: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5)
    },
    separator: {
        padding: '0px 20px'
    },
    citySeparator: {
        padding: '0px 10px'
    }
}));

export const WeddingCountdown: React.FC<Label> = (props) => {
    const weddingDay = new Date(2022, 1, 19);
    const classes = useStyles();
    const breaker = utility.IsDesktop() ?  "" : <br/>;
    const renderer : CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        return (<span>Let's Go!</span>);
        } else {
            return (
                <Clock days={days} hours={hours} minutes={minutes} seconds={seconds} {...props} />
            );
        }
    };

    return (
        <div className={classes.weddingCountdown}>
            <Typography className={classes.nameHeading}>
                <span>Salma Méndez Gómez</span> {breaker}
                <span className={classes.separator}>&#38;</span> {breaker}
                <span>José Reyes García</span>
            </Typography>
            <Typography className={classes.heading}>Feb 19th, 2022</Typography>
            <Typography className={classes.location}>
                <span className={classes.citySeparator}>C u e r n a v a c a ,</span>
                <span className={classes.citySeparator}>M é x i c o</span>
            </Typography>

            <Countdown date={weddingDay} renderer={renderer} />
        </div>
    );
}

export default WeddingCountdown;
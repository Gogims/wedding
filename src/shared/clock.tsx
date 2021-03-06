import { Grid, GridSpacing, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';
import utility from 'src/shared/utility';

type ClockProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    daysLabel: string;
    hoursLabel: string;
    minutesLabel: string;
    secondsLabel: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: "center"
    },
    paper: {
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up('md')]: {
            minWidth: theme.spacing(12)
        }
    },
    typography: {
        color: '#FFFFFF'
    }
}));

export const Clock: React.FC<ClockProps> = (props) => {
    const isDesktop = utility.IsDesktop();
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);

    React.useEffect(() => {
        setSpacing(isDesktop ? 5 : 2);
    }, [isDesktop]);
    
    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={spacing}>
                <Grid item xs={3} md={2}>
                    <Paper className={classes.paper} square>
                        <Typography className={classes.typography} variant="h4">
                            {props.days}
                        </Typography>
                        <Typography className={classes.typography}>
                            {props.daysLabel}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Paper className={classes.paper} square>
                        <Typography className={classes.typography} variant="h4">
                            {props.hours}
                        </Typography>
                        <Typography className={classes.typography}>
                            {props.hoursLabel}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Paper className={classes.paper} square>
                        <Typography className={classes.typography} variant="h4">
                            {props.minutes}
                        </Typography>
                        <Typography className={classes.typography}>
                            {props.minutesLabel}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Paper className={classes.paper} square>
                        <Typography className={classes.typography} variant="h4">
                            {props.seconds}
                        </Typography>
                        <Typography className={classes.typography}>
                            {props.secondsLabel}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Clock;
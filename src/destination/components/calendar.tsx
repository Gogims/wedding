import { Card, CardActions, CardContent, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AppleCalendar from "src/shared/apple-calendar";
import GoogleCalendar from "src/shared/google-calendar";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        maxWidth: 800
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.caption.fontSize
        }
    }
}));

export const Calendar: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <CardActions className={classes.buttons}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <GoogleCalendar />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AppleCalendar />
                    </Grid>
                </Grid>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default Calendar;

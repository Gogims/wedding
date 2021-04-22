import { Card, CardActions, CardContent, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AppleCalendar from "src/shared/apple-calendar";
import GoogleCalendar from "src/shared/google-calendar";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 800
    }
}));

export const Calendar: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <CardActions>
                <Grid container>
                    <Grid item xs={6}>
                        <GoogleCalendar />
                    </Grid>
                    <Grid item xs={6}>
                        <AppleCalendar />
                    </Grid>
                </Grid>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default Calendar;

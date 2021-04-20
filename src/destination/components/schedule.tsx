import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 800
    },
    content: {
        fontSize: theme.typography.h6.fontSize,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.body1.fontSize
        }
    },
    schedule: {
        marginRight: theme.spacing(8)
    }
}));

export const Schedule: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom className="inline-flex">
                    <DateRangeIcon className="icon" /> Wedding Day Schedule
              </Typography>
                <div className={classes.content}>
                    <div>
                        <span className={classes.schedule}>4 pm</span>
                        <span>Ceremony</span>
                    </div>
                    <div>
                        <span className={classes.schedule}>5 pm</span>
                        <span>Cocktail Hour</span>
                    </div>
                    <div>
                        <span className={classes.schedule}>6 pm</span>
                        <span>Reception</span>
                    </div>
                    <div>
                        <span className={classes.schedule}>8 pm</span>
                        <span>Dance Party</span>
                    </div>
                    <div>
                        <span className={classes.schedule}>2 am</span>
                        <span>End of Reception</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Schedule;

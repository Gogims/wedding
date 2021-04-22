import React from "react";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    button: {
        fontSize: "inherit"
    }
}));

export const GoogleCalendar: React.FC = () => {
    const classes = useStyles();

    return (
        <Button target="_blank" rel="noreferrer" className={classes.button}
            href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NWgwbXZtOWhzZHR0MzhhcmE2ZGljaGQ0Y3QgZDcxZ2dpcjlpZzQ5OWp2ZXQzM2kyZDE3bzhAZw&tmsrc=d71ggir9ig499jvet33i2d17o8%40group.calendar.google.com">
            <EventAvailableIcon /> &nbsp;Add To Google Calendar
        </Button>
    );
}

export default GoogleCalendar;
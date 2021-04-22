import React from "react";
import AppleIcon from '@material-ui/icons/Apple';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    button: {
        fontSize: "inherit"
    }
}));

export const AppleCalendar: React.FC = () => {
    const classes = useStyles();

    return (
        <Button className={classes.button} href="webcal://wedding-contact-form.s3.us-east-2.amazonaws.com/calendar.ics">
            <AppleIcon /> &nbsp;Add To Apple Calendar
        </Button>
    );
}

export default AppleCalendar;
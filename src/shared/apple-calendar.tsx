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
        <Button rel="noreferrer" className={classes.button} href="./calendar.ics">
            <AppleIcon /> &nbsp;Add To Apple Calendar
        </Button>
    );
}

export default AppleCalendar;
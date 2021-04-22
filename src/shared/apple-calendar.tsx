import React from "react";
import AppleIcon from '@material-ui/icons/Apple';
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
    button: {
        fontSize: "inherit"
    }
}));

export const AppleCalendar: React.FC = () => {
    const classes = useStyles();
    const handleClick = async () => {
        const response = await axios.get('./calendar.ics');
        const blob = new Blob([response.data], { type: 'text/calendar'});
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = "calendar"
        link.click();
        window.URL.revokeObjectURL(url);
    }

    return (
        <Button className={classes.button} onClick={handleClick}>
            <AppleIcon /> &nbsp;Add To Apple Calendar
        </Button>
    );
}

export default AppleCalendar;
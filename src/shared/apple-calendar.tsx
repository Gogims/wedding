import React from "react";
import AppleIcon from '@material-ui/icons/Apple';
import { Button } from "@material-ui/core";

export const AppleCalendar: React.FC = () => {
    return (
        <Button  rel="noreferrer" download href="./calendar.ics">
            <AppleIcon /> &nbsp;Add To Apple Calendar
        </Button>
    );
}

export default AppleCalendar;
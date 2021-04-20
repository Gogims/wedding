import { Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import GoogleCalendar from "src/shared/google-calendar";

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
    information: {
        marginBottom: theme.spacing(1)
    }
}));

export const Information: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} >
            <CardContent>
                <Typography color="textSecondary" gutterBottom className="inline-flex">
                    <InfoIcon className="icon" /> Information
                </Typography>
                <div className={classes.content}>
                    <div className={classes.information}>Hotel &#38; Spa Hacienda de Cortes</div>
                    <div className={classes.information}>Date: February 22nd, 2022</div>
                    <div className={classes.information}>Address: Plaza Kennedy 90, Atlacomulco, 62560 Jiutepec, Mor., Mexico</div>
                    <div>Dress Code: formal or black-tie optional</div>
                </div>
            </CardContent>
            <CardActions>
                <GoogleCalendar />
            </CardActions>
        </Card>
    );
}

export default Information;

import { Card, CardContent, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BeachAccess, LocationCity } from '@material-ui/icons';

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

export const Trip: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    <BeachAccess /> Extend Your Trip!
              </Typography>
                <div className={classes.content}>
                    <p>
                        We highly recommend extending your trip to Mexico and exploring Salma’s 
                        home country! Salma is known as a travel guru and has put the following 
                        recommendations for you in Mexico City, Tulum, and Cancun.
                    </p>
                    <p>
                        <span>For more information </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/1RRhiUpk5Jo_5W5rkLab-x33OuxsaUwr_TsstLOxBkwo/edit?usp=sharing">
                            click here!
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default Trip;

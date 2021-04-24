import { Card, CardContent, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BeachAccess } from '@material-ui/icons';

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
                <Typography color="textSecondary" gutterBottom className="inline-flex">
                    <BeachAccess className="icon" /> Extend Your Trip!
              </Typography>
                <div className={classes.content}>
                    <Typography>
                        We highly recommend extending your trip to Mexico and exploring Salma’s 
                        home country! Salma is known as a travel guru and has put the following 
                        recommendations for you in Mexico City, Tulum, and Cancun.
                    </Typography>
                    <Typography>
                        <span>For more information </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/1RRhiUpk5Jo_5W5rkLab-x33OuxsaUwr_TsstLOxBkwo/edit?usp=sharing">
                            click here!
                        </Link>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default Trip;

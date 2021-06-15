import { Card, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";

type ScheduleProps = {
    imageName: string;
};

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 800
    },
    image: {
        height: 1000,
        [theme.breakpoints.only('xs')]: {
            height: 400
        },
        [theme.breakpoints.only('sm')]: {
            height: 900
        },
        [theme.breakpoints.only('md')]: {
            height: 650
        },
        [theme.breakpoints.only('lg')]: {
            height: 900
        }
    },
    information: {
        marginBottom: theme.spacing(1)
    }
}));

export const Schedule: React.FC<ScheduleProps> = (props) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} >
            <CardMedia className={classes.image} image={`./images/${props.imageName}.jpg`} title="Schedule" />            
        </Card>
    );
}

export default Schedule;

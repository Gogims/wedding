import { Card, CardContent, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        maxWidth: 800,
        textAlign: 'center'
    },
    link: {
        fontFamily: 'Dancing Script',
        fontSize: theme.typography.h3.fontSize,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h5.fontSize
        }
    },
    icon: {
        marginRight: theme.spacing(2),
        fontSize: theme.typography.h3.fontSize,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h5.fontSize
        }
    }
}));

export const Gallery: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Link component={RouterLink} to="/gallery">
                    <Typography color="secondary" gutterBottom className={classes.link}>
                        <PhotoCameraIcon className={classes.icon} /> Galería de Fotos
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
}

export default Gallery;
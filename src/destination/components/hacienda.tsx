import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Pinterest, Twitter, Instagram, Facebook, } from '@material-ui/icons';

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
    logo: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    header: {
        fontSize: theme.typography.h5.fontSize,
        color: '#a9171a',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.body2.fontSize
        }
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    button: {
        color: '#a9171a'
    }
}));

export const Hacienda: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} >
            <CardHeader avatar={
                <Avatar src="images/haciendacortes.png" className={classes.logo}></Avatar>
            } title={
                <Typography className={classes.header}>
                    Hotel &#38; Spa Hacienda de Cortes
                </Typography>
            } subheader={
                <div>Plaza Kennedy 90, Atlacomulco, 62560 Jiutepec, <br/>Cuernavaca, Mexico</div>
            } />
            <CardContent>
                <div className={classes.content}>
                    <Typography>
                        We have carefully selected our wedding venue for our guests to experience an authentic cultural immersion.
                        Hacienda de Cortes was a sugar cane estate founded by Hernan Cortes in 1530. It’s historic past transcends
                        through its stone walls, lush gardens, and architectural magnificence.
                    </Typography>
                    <Typography>
                        We chose this XVI century estate to open our guest’s minds to Mexico’s rich history, and to expose them to the
                        traditions and customs of Salma's home country. For a stress-free experience, we encourage you to make
                        your reservation at the hacienda’s hotel and spa. Booking information is found below.
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://www.facebook.com/haciendadecortes" target="_blank">
                            <Facebook className={classes.icon} /> Facebook
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://www.instagram.com/hacienda_de_cortes/" target="_blank">
                            <Instagram className={classes.icon} /> Instagram
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://es.pinterest.com/HcdadeCortes/" target="_blank">
                            <Pinterest className={classes.icon} /> Pinterest
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://twitter.com/hacienda_cortes" target="_blank">
                            <Twitter className={classes.icon} /> Twitter
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Hacienda;

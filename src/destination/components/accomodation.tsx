import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { WhatsApp, Language, Email, Phone } from '@material-ui/icons';

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

export const Accomodation: React.FC = () => {
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
                        <b>To make hotel reservations:</b>
                    </Typography>
                    <Typography>
                        <span>We have negotiated a 10-15% discount on the nightly rates for guests atteding our wedding. Please refer to the </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/12toeVoWXb7GvB1SsJnTvrDVBV-604PcbDm9a0T0h2tM/edit#gid=1999678424">
                            price table
                        </Link> 
                        <span> for rates. To make your reservation, please email the hotel or use whatsapp to text/call using the links below.</span>
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://wa.me/527773158844">
                            <WhatsApp className={classes.icon} /> WhatsApp
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="mailto:reservaciones@hotelhaciendadecortes.com.mx">
                            <Email className={classes.icon} /> Email
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://www.hotelhaciendadecortes.com.mx/" target="_blank">
                            <Language className={classes.icon} /> Website
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="tel:+527773158844">
                            <Phone className={classes.icon} /> Phone
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Accomodation;

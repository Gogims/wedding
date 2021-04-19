import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { WhatsApp, Pinterest, Twitter, Instagram, Facebook, Language, Email, Phone } from '@material-ui/icons';

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
                <div>Cuernavaca, México</div>
            } />
            <CardContent>
                <div className={classes.content}>
                    <p>
                        We have carefully selected a venue where our guests can experience an authentic cultural experience.
                        Hacienda de Cortes was a sugar estate founded by Hernan Cortes in 1530. It’s historic past transcends
                        through its stone walls, lush gardens, and architectural magnificence.
                    </p>
                    <p>
                        We chose this XVI century venue to open our guest’s minds to Mexico’s rich history, and to expose you to the
                        traditions and customs of the bride’s home country. For a stress-free experience, we encourage you to make
                        your reservation at the hacienda’s hotel and spa.
                    </p>
                    <p>
                        <span>We have negotiated a discount for our guests. Please refer to the </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/12toeVoWXb7GvB1SsJnTvrDVBV-604PcbDm9a0T0h2tM/edit#gid=1999678424">
                            price table
                        </Link> 
                        <span> for February 2022 rates. To reserve, please email or use whatsapp to text/call (information below).</span>
                    </p>
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
                        <Button size="small" className={classes.button} href="tel:800(220)7697">
                            <Phone className={classes.icon} /> Phone
                        </Button>
                    </Grid>
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

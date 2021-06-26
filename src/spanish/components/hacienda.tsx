import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Pinterest, Twitter, Instagram, Facebook, WhatsApp, Language, Email, Phone } from '@material-ui/icons';

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
        marginBottom: theme.spacing(3)
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
                <div>Plaza Kennedy 90, Atlacomulco, 62560 Jiutepec, <br/>Cuernavaca, Morelos, Mexico</div>
            } />
            <CardContent>
                <div className={classes.content}>
                    <Typography className={classes.information}>
                        Los esperamos en la Hacienda de Cortés en Cuernavaca para celebrar nuestro matrimonio el Sábado, 19 de
                        Febrero del 2022. Elegimos una finca del siglo XIV que fue fundada por Hernán Cortés para que nuestros
                        invitados del extranjero conozcan la rica cultura e historia de México, en el país de origen de Salma. 
                    </Typography>
                    <Typography className={classes.information}>
                        <b>Les pedimos que por favor envíen su <Link href="#rsvp" color="secondary"underline="always">RSVP</Link> antes del
                            31 de Diciembre del 2021</b>
                        <span>. Tenemos el gusto de comunicarles información del hospedaje, horario y registro de regalos a continuación.</span>
                        
                    </Typography>
                    <Typography className={classes.information}>
                        <span>
                            Si desean hospedarse en la hacienda, hemos negociado un descuento en los precios de las habitaciones para los 
                            invitados de nuestra boda. Aquí puede </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/12toeVoWXb7GvB1SsJnTvrDVBV-604PcbDm9a0T0h2tM/edit#gid=1999678424">
                            consultar los precios
                        </Link> 
                        <span>. Para reservar, por favor contacten a la hacienda directamente por teléfono o por whatsapp usando los enlaces abajo.</span>
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
                            <Email className={classes.icon} /> Correo
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="https://www.hotelhaciendadecortes.com.mx/" target="_blank">
                            <Language className={classes.icon} /> Web
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button size="small" className={classes.button} href="tel:+527773158844">
                            <Phone className={classes.icon} /> Teléfono
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
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

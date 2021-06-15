import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Pinterest, Twitter, Instagram, Facebook, WhatsApp, Language, Email, Phone } from '@material-ui/icons';

type HaciendaProps = {
    paragraphs: string[];
}

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

export const Hacienda: React.FC<HaciendaProps> = (props) => {
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
                    <Typography className={classes.information}>
                        Hemos seleccionado cuidadosamente el lugar de nuestra boda para que nuestros invitados experimenten una 
                        auténtica inmersión cultural. Hacienda de Cortes fue una finca de caña de azúcar fundada por Hernán Cortés 
                        en 1530. Su pasado histórico trasciende a través de sus muros de piedra, exuberantes jardines y 
                        magnificencia arquitectónica.
                    </Typography>
                    <Typography className={classes.information}>
                        Elegimos esta finca del siglo XVI para abrir las mentes de nuestros huéspedes a la rica historia de México y 
                        exponerlos a las tradiciones y costumbres del país de origen de Salma. Para una experiencia libre de estrés, 
                        le recomendamos que haga su reserva en el hotel y spa de la hacienda. La información de reserva se encuentra a 
                        continuación.
                    </Typography>
                    <Typography className={classes.information}>
                        <span>Hemos negociado un descuento entre 10-15% en las tarifas nocturnas para los invitados de nuestra boda. Consulte </span>
                        <Link color="secondary" underline="always" target="_blank"
                            href="https://docs.google.com/spreadsheets/d/12toeVoWXb7GvB1SsJnTvrDVBV-604PcbDm9a0T0h2tM/edit#gid=1999678424">
                            los precios
                        </Link> 
                        <span> para conocer las tarifas. Para reservar, envíe un correo electrónico al hotel o use whatsapp para enviar 
                            un mensaje de texto o llamar usando los enlaces abajo.
                        </span>
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

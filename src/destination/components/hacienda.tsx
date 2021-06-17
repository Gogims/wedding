import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Pinterest, Twitter, Instagram, Facebook, } from '@material-ui/icons';

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
    //const paragraphs = ;

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
                    { props.paragraphs.map((info, i) => (<Typography key={i} className={classes.information}>{info}</Typography>)) }
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

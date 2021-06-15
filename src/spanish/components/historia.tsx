import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    list: {
        fontSize: theme.typography.body1.fontSize
    }
}));

export const Historia: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} >
            <CardContent>
                <Typography color="textSecondary" gutterBottom className="inline-flex">
                    <FavoriteIcon className="icon" /> Nuestra Historia
              </Typography>
                <div className={classes.content}>
                    <Typography className={classes.information}>
                        El 7 de Julio del 2017, Salma y José compartieron un ascensor y se conocieron en una fiesta en San Antonio, Texas.
                        Sólo tomó una conversación para que ambos notaran la magia de su futura relación... 
                    </Typography>

                    <Typography className={classes.information}>
                        Un año después, decidieron empacar sus maletas y ¡viajar por todo Latinoamérica juntos! Empezaron en sus 
                        respectivos países: México y República Dominicana. Después recorrieron Colombia, Peru, Chile, Argentina y Brazil, 
                        viviendo experiencias únicas e inolvidables. Después de 19 meses viviendo en Sur América, para Marzo del 2020, 
                        la pandemia los hizo regresar a Estados Unidos. Decidieron empezar su nuevo capítulo en Austin, Texas.
                    </Typography>

                    <Typography className={classes.information}>
                        El 16 de Enero del 2022, Salma y José disfrutaban del Mar Caribe caminando para ver el atardecer en Las Terrenas, 
                        República Dominicana. Inesperadamente, Salma encontró una botella de vidrio enterrada en la arena sellada con un 
                        papel. Segundos después…
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default Historia;

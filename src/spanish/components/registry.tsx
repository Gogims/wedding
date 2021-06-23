import { Card, CardContent, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        maxWidth: 800,
        textAlign: 'center'
    },
    information: {
        marginBottom: theme.spacing(3)
    },
    link: {
        fontFamily: 'Dancing Script',
        fontSize: theme.typography.h3.fontSize,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h5.fontSize
        }
    }
}));

export const Registry: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography className={classes.information}>
                    ¡La presencia de ustedes el dia de nuestra boda es el mejor regalo que nos pudieran dar! Si consideran 
                    apoyarnos de otra manera, aceptamos contibuciones monetarias para que nuestra luna de miel en Europa sea inolvidable. 
                </Typography>

                <Typography className={classes.information}>
                    <Link color="primary" target="_blank" className={classes.link}
                        href="https://www.blueprintregistry.com/registry/salma-and-gogi-wedding-registry-2-19-2022">
                        Registro de Luna de Miel
                    </Link> 
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Registry;
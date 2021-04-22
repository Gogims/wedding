import { Card, CardContent, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import InfoIcon from '@material-ui/icons/Info';

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
        marginBottom: theme.spacing(1)
    }
}));

export const OtherOption: React.FC = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} >
            <CardContent>
                <Typography color="textSecondary" gutterBottom className="inline-flex">
                    <InfoIcon className="icon" /> Alternate Accomodations
              </Typography>
                <div className={classes.content}>
                    <p className={classes.information}>
                        We understand some may want flexibility in their accommodations. 
                        We’ve put together a list of other recommended hotels in the area:
                    </p>
                    <ul>
                        <li>
                            <Link color="secondary" underline="always" target="_blank"
                                href="https://www.booking.com/hotel/mx/camino-real-sumiya-cuernavaca.en.html?aid=1693558&checkin_monthday=18&checkin_month=2&checkin_year=2022&checkout_monthday=20&checkout_month=2&checkout_year=2022&no_rooms=1&group_adults=2&room1=A%2CA">
                                Camino Real Sumiya Cuernavaca
                            </Link>
                            <span> ($$$$) - 10-minute drive from hacienda, 25-minutes from downtown.</span>
                        </li>
                        <li>
                            <Link color="secondary" underline="always" target="_blank"
                                href="https://www.booking.com/hotel/mx/la-joyita.en.html?aid=1693558&checkin_monthday=18&checkin_month=2&checkin_year=2022&checkout_monthday=20&checkout_month=2&checkout_year=2022&no_rooms=1&group_adults=2&room1=A%2CA">
                                Hotel La Joyita Cuernavaca
                            </Link>
                            <span> ($$$) - 10-minute drive from hacienda, 7-minute drive from downtown.</span>
                        </li>
                        <li>
                            <Link color="secondary" underline="always" target="_blank"
                                href="https://www.booking.com/hotel/mx/hosteria-las-quintas.en.html?aid=1693558&checkin_monthday=18&checkin_month=2&checkin_year=2022&checkout_monthday=20&checkout_month=2&checkout_year=2022&no_rooms=1&group_adults=2&room1=A%2CA">
                                Hostería Las Quintas
                            </Link>
                            <span> ($$) - 7-minute drive from hacienda, 10-minute drive from downtown.</span>
                        </li>
                        <li>
                            <Link color="secondary" underline="always" target="_blank"
                                href="https://www.booking.com/hotel/mx/casa-frida-cuernavaca.en.html?aid=1693558&checkin_monthday=18&checkin_month=2&checkin_year=2022&checkout_monthday=20&checkout_month=2&checkout_year=2022&no_rooms=1&group_adults=2&room1=A%2CA">
                                Hotel Casa Frida
                            </Link>
                            <span> ($) 12-minute drive from hacienda, located downtown.</span>
                        </li>
                    </ul>
                    
                    <p>Airbnb is also an option. You can use “Cuernavaca Centro” as the location in your search.</p>
                    <p>If you need help with your  accommodations, please don’t hesitate to get in touch with Salma. After all, she is a travel guru ;)</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default OtherOption;

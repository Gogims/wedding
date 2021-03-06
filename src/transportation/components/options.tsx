import { Card, CardContent, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

export const Options: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={11} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="inline-flex">
                            <AirportShuttleIcon className="icon" /> Option A
                        </Typography>
                        <Typography variant="body1">
                            We will have complimentary shuttles for our guests from the airport to the hacienda
                            on Friday, February 18th, and returning to the airport on Sunday, February 20th.&nbsp;
                            <b>If you will be using the shuttle, please&nbsp;
                            <Link href="#shuttle" underline="always" color="secondary">submit your shuttle registration</Link> no
                            later than January 1st, 2022</b>. This is extremely important because we need this to coordinate pick up/drop off times.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={11} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="inline-flex">
                            <DirectionsCarIcon className="icon" /> Option B
                        </Typography>
                        <Typography variant="body1">
                            Rent a car: Hacienda de Cortes is 1 hour 45 minutes away from the Mexico City airport. Rental car
                            options include: Enterprise, Avis, Nacional. Rental prices start at $30 for a 2-night rental.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={11} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="inline-flex">
                            <DirectionsBusIcon className="icon" /> Option C
                        </Typography>
                        <Typography variant="body1">
                            Local Bus: There are hourly departures from Mexico City Airport Terminal 1 to Cuernavaca Casino bus
                            terminal via Pullman Morelos. From the terminal in Cuernavaca, it is a 5-minute taxi to the hacienda.
                            You can buy these tickets online or upon arrival to the terminal. The roundtrip cost for the bus is $20.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={11} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="inline-flex">
                            <EmojiTransportationIcon className="icon" /> Option D
                        </Typography>
                        <Typography variant="body1">
                            If you choose to extend your time in Cuernavaca, please let me know and we can put you in contact with the
                            transportation agency to arrange your own private transfer to/from Mexico City. Average cost for the roundtrip
                            is $200 per vehicle with a private driver.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Options;

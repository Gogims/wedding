import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

type ShowcaseProps = {
    showcaseUrl: string;
    friends: Friend[]
};

type Friend = {
    name: string;
    location: string;
    description: string;
    photo: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    showcase: {
      textAlign: 'center'
    },
    card: {
        height: '100%'
    },
    showcaseImage: {
        maxWidth: '100%'
    },
    friendImage: {
        maxHeight: '100%',
        height: 400
    },
    friendLocation: {
        display: 'inline-flex'
    }
  }),
);

export const Showcase: React.FC<ShowcaseProps> = (props) => {
  const classes = useStyles();
  const friendCards = props.friends.map((f, i) => (
    <Grid key={i} item xs={11} sm={6} md={2}>
        <Card className={classes.card}>
            <CardHeader title={f.name} subheader={(<><LocationOnIcon /> {f.location}</>)} subheaderTypographyProps={{
                className: classes.friendLocation
            }} />
            <CardMedia image={f.photo} className={classes.friendImage} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {f.description}
                </Typography>
            </CardContent> 
        </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch" className={classes.root}>
        <Grid item xs={12} className={classes.showcase}>
            <img src={props.showcaseUrl} alt="Showcase" className={classes.showcaseImage} />
        </Grid>
        {friendCards}
    </Grid>
  );
}

export default Showcase;

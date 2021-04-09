import { Grid, GridListTile, GridListTileBar, IconButton, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import imageJson from './images.json';

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    maxHeight: 283,
    width: '100%'
  },
  imageTall: {
    maxHeight: 566,
    width: '100%'
  },
  list: {
    listStyle: 'none'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

type Image = {
  title: string,
  subTitle: string,
  isTall: boolean,
  src: string
};

export const Gallery: React.FC = () => {
  const classes = useStyles();
  const images = imageJson as Image[];

  return (
    <Grid container justify="center" spacing={2}>
        {images.map((image, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <GridListTile className={classes.list} >
              <img className={image.isTall? classes.imageTall : classes.image} src={image.src} alt=""/>
              <GridListTileBar title={image.title} subtitle={image.subTitle} actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              } />
            </GridListTile>
          </Grid>
        ))}
    </Grid>
  );
}

export default Gallery;

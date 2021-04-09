import { Button, Card, CardContent, FormControl, Grid, InputLabel, Link, makeStyles, MenuItem, Select, TextField, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  form: {
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5)
  },
  firstFormControl: {
    width: '100%',
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(3)
  }
}));

export const Rsvp: React.FC = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const watchHasGuest: string = watch("hasGuest", "");

  return (
    <Grid item xs={11} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5">
              RSVP
          </Typography>
          <Typography variant="caption" color="error">
            IMPORTANT: We will have complimentary shuttles running from the Mexico City 
            airport to Hacienda de Cortes on Friday, January 18th. Please send us a 
            screenshot of your flight schedule by January 1st so that we can arrange the 
            shuttle pickup times. We will provide a morning and afternoon shuttle return 
            to the Mexico City airport on Sunday, February 20th. 
          </Typography>
        </CardContent>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller render={({field}) => 
            <TextField {...field} className={classes.firstFormControl} required label="First Name" />
          } control={control} name="firstName" defaultValue=""/>
          <Controller render={({field}) => 
            <TextField {...field} className={classes.formControl} required label="Last Name" />
          } control={control} name="lastName" defaultValue=""/>
          <Controller render={({field}) => 
            <TextField type="email" {...field} className={classes.formControl} required label="Email" />
          } control={control} name="email" defaultValue=""/>
          <FormControl className={classes.formControl}>
            <InputLabel id="guest-label" required>Are you bringing a guest?</InputLabel>
            <Controller render={({ field: { onBlur, onChange, value } }) => 
              <Select labelId="guest-label" required onBlur={onBlur} value={value} onChange={e => {
                setValue("guessName", "");
                onChange(e);
              }}>
                <MenuItem value="yes">Yes</MenuItem> 
                <MenuItem value="no">No</MenuItem>
              </Select>
            } control={control} name="hasGuest" defaultValue="" />
          </FormControl>
          { watchHasGuest === "yes" && 
            <Controller render={({ field }) => 
              <TextField  className={classes.formControl} required label="Guest Name(s)" {...field} />
            } control={control} name="guessName" defaultValue=""/>
          }
          <FormControl className={classes.formControl}>
            <InputLabel id="transportation-label" required>Will you need an airport shuttle?</InputLabel>
            <Controller render={({field}) => 
              <Select labelId="transportation-label" required {...field}>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No, I will get there by myself</MenuItem>
              </Select>
            } control={control} name="hasTransportation" defaultValue="" />
          </FormControl>
          <Controller render={({field}) => 
            <TextField {...field} multiline className={classes.formControl} label="Comments/Questions" />
          } control={control} name="comment" defaultValue=""/>
          
          <Typography variant="caption" color="error">
            REMINDER: <Link component={RouterLink} to="/destination" underline="none" color="error">Hotel information is found on our website</Link>
          </Typography>

          <FormControl className={classes.formControl}>
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>
    </Grid>
  );
}

export default Rsvp;

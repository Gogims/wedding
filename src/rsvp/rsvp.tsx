import { Button, Card, CardContent, FormControl, Grid, InputLabel, Link, makeStyles, MenuItem, Select, Snackbar, TextField, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { RsvpForm } from "src/shared/models/rsvp-form";
import axios from "axios";
import { Alert } from "@material-ui/lab";

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
  },
  flightButton: {
    marginRight: theme.spacing(3)
  },
  imageName: {
    fontSize: theme.typography.button.fontSize
  }
}));

export const Rsvp: React.FC = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    unregister,
    reset
  } = useForm();
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const watchHasGuest: string = watch("hasGuest", "");

  const onSubmit = async (data: RsvpForm) => {
    const url = process.env.REACT_APP_API as string;
    const response = await axios.post([url, 'rsvp'].join('/'), {form: data});
    
    if (response.status === 200) {
      setIsSuccessful(true);
      const emptyData = Object.keys(data).reduce((emptyForm, prop) => ({...emptyForm, [prop]: ""}), {});
      reset(emptyData);
    }
    else
      setIsError(true);
  };

  return (
    <Grid item xs={11} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5">
              RSVP
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller render={({field}) => 
              <TextField {...field} className={classes.firstFormControl} error={!!errors.firstName} required label="First Name" />
            } control={control} name="firstName" defaultValue="" rules={{ required: true }}/>

            <Controller render={({field}) => 
              <TextField {...field} className={classes.formControl} error={!!errors.lastName} required label="Last Name" />
            } control={control} name="lastName" defaultValue="" rules={{ required: true }}/>

            <Controller render={({field}) => 
              <TextField type="email" {...field} className={classes.formControl} error={!!errors.email} required label="Email" />
            } control={control} name="email" defaultValue="" rules={{ required: true }}/>

            <FormControl className={classes.formControl}>
              <InputLabel id="guest-label" required>Are you bringing a guest?</InputLabel>
              <Controller render={({ field: { onBlur, onChange, value } }) => 
                <Select labelId="guest-label" error={!!errors.hasGuest} required onBlur={onBlur} value={value} onChange={e => {
                  onChange(e);
                  if (e.target.value === "no")
                    unregister("guessName");
                }}>
                  <MenuItem value="yes">Yes</MenuItem> 
                  <MenuItem value="no">No</MenuItem>
                </Select>
              } control={control} name="hasGuest" defaultValue="" rules={{ required: true }}/>
            </FormControl>

            { watchHasGuest === "yes" && 
              <Controller render={({ field }) => 
                <TextField  className={classes.formControl} error={!!errors.guessName} required label="Guest Name(s)" {...field} />
              } control={control} name="guessName" defaultValue="" rules={{ required: true }}/>
            }

            <FormControl className={classes.formControl}>
              <InputLabel id="transportation-label" required>Will you need an airport shuttle?</InputLabel>
              <Controller render={({field}) => 
                <Select labelId="transportation-label" error={!!errors.hasTransportation} required {...field}>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No, I will get there by myself</MenuItem>
                  <MenuItem value="not sure">I am not sure yet</MenuItem>
                </Select>
              } control={control} name="hasTransportation" defaultValue="" rules={{ required: true }} />
            </FormControl>
            <Typography variant="caption" color="error">
              IMPORTANT: We will have complimentary shuttles running from the Mexico City 
              airport to Hacienda de Cortes on Friday, January 18th. Please send us a 
              screenshot of your flight schedule by January 1st so that we can arrange the 
              shuttle pickup times. We will provide a morning and afternoon shuttle return 
              to the Mexico City airport on Sunday, February 20th. 
            </Typography>
            
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
        </CardContent>
      </Card>

      <Snackbar open={isSuccessful} autoHideDuration={6000} onClose={() => setIsSuccessful(false)}>
        <Alert onClose={() => setIsSuccessful(false)} severity="success">
          Form uploaded successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={isError} onClose={() => setIsError(false)}>
        <Alert onClose={() => setIsError(false)} severity="error">
          There was an error uploading the form. Please let us know at gogims@gmail.com or sssalma11@gmail.com
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Rsvp;

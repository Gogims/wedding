import { Button, Card, CardContent, CardMedia, FormControl, InputLabel, Link, makeStyles, MenuItem, Select, TextField, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { RsvpForm } from "src/shared/models/rsvp-form";
import axios from "axios";
import AlertSnackbar from "src/shared/alert-snackbar";
import { IdName } from "./models/id-name";

type Label = {
  firstName: string;
  lastName: string;
  email: string;
  guest: string;
  guestOptions: IdName[];
  guestName: string;
  hasShuttle: boolean;
  comments: string;
  hasReminder: boolean;
  submit: string;
  errorMessage?: string;
  successMessage: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 800
  },
  rsvp: {
    height: 201
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

export const Reserve: React.FC<Label> = (props) => {
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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const watchHasGuest: string = watch("hasGuest", "");

  const onSubmit = async (data: RsvpForm) => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      const url = process.env.REACT_APP_API as string;
      const response = await axios.post([url, 'rsvp'].join('/'), {form: data});
      
      if (response.status === 200) {
        setIsSuccessful(true);
        const emptyData = Object.keys(data).reduce((emptyForm, prop) => ({...emptyForm, [prop]: ""}), {});
        reset(emptyData);
      }
      else
        setIsError(true);
        
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card variant="outlined" className={classes.card}>
        <CardMedia className={classes.rsvp} image={'./images/rsvp.jpg'} title="RSVP" />

        <CardContent>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller render={({field}) => 
              <TextField {...field} className={classes.firstFormControl} error={!!errors.firstName} required label={props.firstName} />
            } control={control} name="firstName" defaultValue="" rules={{ required: true }}/>

            <Controller render={({field}) => 
              <TextField {...field} className={classes.formControl} error={!!errors.lastName} required label={props.lastName} />
            } control={control} name="lastName" defaultValue="" rules={{ required: true }}/>

            <Controller render={({field}) => 
              <TextField type="email" {...field} className={classes.formControl} error={!!errors.email} required label={props.email} />
            } control={control} name="email" defaultValue="" rules={{ required: true }}/>

            <FormControl className={classes.formControl}>
              <InputLabel id="guest-label" required>{props.guest}</InputLabel>
              <Controller render={({ field: { onBlur, onChange, value } }) => 
                <Select labelId="guest-label" error={!!errors.hasGuest} required onBlur={onBlur} value={value} onChange={e => {
                  onChange(e);
                  if (e.target.value === "no")
                    unregister("guessName");
                }}>
                    {
                        props.guestOptions.map((o,i)=>(<MenuItem key={i} value={o.id}>{o.name}</MenuItem> ))
                    }
                </Select>
              } control={control} name="hasGuest" defaultValue="" rules={{ required: true }}/>
            </FormControl>

            { watchHasGuest === "yes" && 
              <Controller render={({ field }) => 
                <TextField  className={classes.formControl} error={!!errors.guessName} required label={props.guestName} {...field} />
              } control={control} name="guessName" defaultValue="" rules={{ required: true }}/>
            }

            {
              !props.hasShuttle ? <></>:
              (
                <>
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
                  <Typography variant="caption" color="primary">
                    IMPORTANT: We will have complimentary shuttles running from the Mexico City 
                    airport to Hacienda de Cortes on Friday, February 18th. We will provide a morning and 
                    afternoon shuttle return to the Mexico City airport on Sunday, February 20th. Please submit 
                    your <Link component={RouterLink} to="/transportation" underline="always" color="secondary">shuttle registration</Link>
                    &nbsp;by January 1st so that we can arrange the shuttle pickup times.
                  </Typography>
                </>
              )
            }
            
            <Controller render={({field}) => 
              <TextField {...field} multiline className={classes.formControl} label={props.comments} />
            } control={control} name="comment" defaultValue=""/>
            
            {
              !props.hasReminder ? <></> :
              (
                <Typography variant="caption" color="primary">
                  REMINDER: Hotel information is found on <Link component={RouterLink} to="/destination" underline="always" color="secondary" target="_blank">our website.</Link>
                </Typography>
              ) 
            }

            <FormControl className={classes.formControl}>
              <Button type="submit" variant="contained" color="secondary" disabled={isSubmitting}>
                {props.submit}
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
      
      <AlertSnackbar isSuccessful={isSuccessful} onSuccessClose={() => setIsSuccessful(false)} 
                successMessage={props.successMessage}
                isError={isError} onErrorClose={() => setIsError(false)}
                errorMessage={props.errorMessage}/>
    </>
  );
}

export default Reserve;

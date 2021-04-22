import { Button, Card, CardContent, CardMedia, FormControl, Grid, IconButton, InputLabel, makeStyles, Snackbar, TextField, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { Alert } from "@material-ui/lab";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { PhotoCamera } from "@material-ui/icons";
import utility from "src/shared/utility";
import { FlightForm } from "src/shared/models/flight-form";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  shuttle: {
    height: 150
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

export const TransportationForm: React.FC = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    register,
    reset
  } = useForm();
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const watchFlightImage: FileList = watch("flightImage", "");
  const imageName = watchFlightImage.length > 0 ?
    watchFlightImage[0].name :
    'Attach Flight Information';

  const onSubmit = async (data: FlightForm) => {
    if (!!data.flightImage && data.flightImage.length > 0) {
      const imageFile = data.flightImage?.item(0) as File;
      data.flight = await utility.toBase64Async(imageFile);
    }
    const {flightImage, ...form} = data;

    const url = process.env.REACT_APP_API as string;
    const response = await axios.post([url, 'flight'].join('/'), {form: form});
    
    if (response.status === 200) {
      setIsSuccessful(true);
      const emptyData = Object.keys(data).reduce((emptyForm, prop) => ({...emptyForm, [prop]: ""}), {});
      reset(emptyData);
    }
    else
      setIsError(true);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={6} md={4}>
        <Card className={classes.root}>
          <CardMedia className={classes.shuttle} image={'./images/shuttle.jpg'} title="Shuttle Registration" />
          
          <CardContent>
            <Typography variant="caption" color="primary" align="center" component="p">
              Please submit by <b>January 1st, 2022</b>.
            </Typography>

            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Controller render={({field}) => 
                <TextField {...field} className={classes.firstFormControl} error={!!errors.names} required label="Name(s)" />
              } control={control} name="names" defaultValue="" rules={{ required: true }}/>

              <Controller render={({field}) => 
                <TextField {...field} type="number" className={classes.formControl} error={!!errors.totalPeople} required label="Total Number of People" />
              } control={control} name="totalPeople" defaultValue="1" rules={{ required: true, min: 1 }}/>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller render={({field: {ref, ...rest}}) =>
                    <DateTimePicker {...rest} className={classes.formControl} error={!!errors.arrival} variant="inline" required label="Arrival" />
              } control={control} name="arrival" defaultValue={new Date("2022-02-18T11:00")} rules={{ required: true }}/>
              
              <Controller render={({field: {ref, ...rest}}) =>
                    <DateTimePicker {...rest} className={classes.formControl} error={!!errors.departure} variant="inline" required label="Departure" />
              } control={control} name="departure" defaultValue={new Date("2022-02-20T13:00")} rules={{ required: true }}/>
              </MuiPickersUtilsProvider>
              
              <Controller render={({field}) => 
                <TextField {...field} type="email" className={classes.formControl} error={!!errors.email} required label="Email" />
              } control={control} name="email" defaultValue="" rules={{ required: true }}/>

              <FormControl className={classes.formControl}>
              <InputLabel></InputLabel>
              <input type="file" hidden accept="image/*" id="flight-information" {...register("flightImage")} />
                <label htmlFor="flight-information">
                <IconButton color="primary" component="span" className={classes.imageName}>
                  <PhotoCamera className={classes.flightButton} /> {imageName}
                </IconButton>
              </label>
              </FormControl>

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
    </Grid>
  );
}

export default TransportationForm;

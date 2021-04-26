import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

type AlertSnackbarProps = {
    isSuccessful: boolean;
    onSuccessClose: () => void;
    successMessage: string;
    isError: boolean;
    onErrorClose: () => void;
};

export const AlertSnackbar: React.FC<AlertSnackbarProps> = (props) => {
    return (
        <>
            <Snackbar open={props.isSuccessful} autoHideDuration={6000} onClose={props.onSuccessClose}>
                <Alert onClose={props.onSuccessClose} severity="success">
                    {props.successMessage}
                </Alert>
            </Snackbar>
            <Snackbar open={props.isError} onClose={props.onErrorClose}>
                <Alert onClose={props.onErrorClose} severity="error">
                    There was an error uploading the form. Please let us know at gogims@gmail.com or salma.mendezg@gmail.com
                </Alert>
            </Snackbar>
        </>
    );
  }
  
  export default AlertSnackbar;
import { Dialog, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

type DialogProps = {
    open: boolean;
    value: string[];
    onClose: () => void;
}

const useStyles = makeStyles((theme : Theme) => ({
    dialog: {
      padding: theme.spacing(3),
    }
}));

export const SimpleDialog: React.FC<DialogProps> = (props) => {
    const classes = useStyles();
    const values = props.value.map((v,i) => (
        <div key={i}>
            <Typography>
                {v}
            </Typography>
            <br/>
        </div>
    ))

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <div className={classes.dialog}>
                {values}
            </div>
        </Dialog>
    );
}

export default SimpleDialog;
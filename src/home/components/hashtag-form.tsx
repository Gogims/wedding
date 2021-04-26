import { Avatar, Button, Card, CardContent, CardMedia, Chip, FilledInput, FormControl, Grid, InputAdornment, makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import AlertSnackbar from 'src/shared/alert-snackbar';
import utility from 'src/shared/utility';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    hashtag: {
      paddingTop: theme.spacing(15),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(12)
        }
    }   
  }),
);

export const HashtagForm: React.FC = () => {
    const classes = useStyles();
    const [hashtags, setHashtags] = useState([] as string[]);
    const [hashtag, setHashtag] = useState('');
    const [isSuccessful, setIsSuccessful] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hashtag = (e.target as HTMLInputElement).value;
        const tag = utility.getCleanTag(hashtag);

        if (hashtag.endsWith(' ') && !!tag) {
            setHashtags(hashtags.concat(tag));
            setHashtag('');
        } else
            setHashtag(e.target.value);
    };

    const removeHashtag = (index: number) => {
        const tagCopy = hashtags.slice();
        tagCopy.splice(index, 1)
        setHashtags(tagCopy);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tag = utility.getCleanTag(hashtag);
        const tags = !!tag ? hashtags.concat([tag]) : hashtags;

        if (!isSubmitting && tags.length > 0)
        {
            setIsSubmitting(true);
            const url = process.env.REACT_APP_API as string;
            const response = await axios.post([url, 'hashtag'].join('/'), {form: tags});
            
            if (response.status === 200)
                setIsSuccessful(true);
            else
                setIsError(true);

            setHashtags([]);
            setHashtag('');
            setIsSubmitting(false);
        }
    };

    const tags = hashtags.map((tag, i) => (
        <Chip key={i} avatar={<Avatar>#</Avatar>} label={tag} onDelete={() => removeHashtag(i)} variant="outlined" />
    ));

    return (
        <Grid item xs={11} sm={6} md={4} className={classes.root}>
            <Card>
                <CardMedia image="images/hashtags.jpg" className={classes.hashtag} />
                <CardContent>                
                    <form onSubmit={onSubmit}>
                        <FormControl fullWidth>
                            <FilledInput
                                value={hashtag}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">#</InputAdornment>}
                                endAdornment={<Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>Submit</Button>}
                            />
                        </FormControl>
                        <div>
                            {tags}
                        </div>
                    </form>
                </CardContent>
            </Card>
            <AlertSnackbar isSuccessful={isSuccessful} onSuccessClose={() => setIsSuccessful(false)} 
                successMessage="Thank You!" isError={isError} onErrorClose={() => setIsError(false)}/>
        </Grid>
    )
}

export default HashtagForm;

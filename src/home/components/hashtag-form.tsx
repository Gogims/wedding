import { Avatar, Button, Card, CardContent, CardMedia, Chip, FilledInput, FormControl, Grid, InputAdornment, makeStyles, Snackbar, Theme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useState } from 'react'
import utility from 'src/shared/utility';

const useStyles = makeStyles((theme: Theme) => ({
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const code = e.key.charCodeAt(0);
        const tag = utility.getCleanTag((e.target as HTMLInputElement).value);

        if (code === 32 && !!tag) {
            setHashtags(hashtags.concat(tag));
            setHashtag('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        const url = process.env.REACT_APP_API as string;
        const response = await axios.post([url, 'hashtags'].join('/'), {form: tags});
        
        if (response.status === 200) {
          setIsSuccessful(true);
        }
        else
          setIsError(true);
    };

    const tags = hashtags.map((tag, i) => (
        <Chip key={i} avatar={<Avatar>#</Avatar>} label={tag} onDelete={() => removeHashtag(i)} variant="outlined" />
    ));

    return (
        <Grid item xs={11} sm={6} md={4}>
            <Card>
                <CardMedia image="images/hashtags.jpg" className={classes.hashtag} />
                <CardContent>                
                    <form onSubmit={onSubmit}>
                        <FormControl fullWidth>
                            <FilledInput
                                value={hashtag}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                startAdornment={<InputAdornment position="start">#</InputAdornment>}
                                endAdornment={<Button type="submit" color="primary" variant="contained">Submit</Button>}
                            />
                        </FormControl>
                        <div>
                            {tags}
                        </div>
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
    )
}

export default HashtagForm;

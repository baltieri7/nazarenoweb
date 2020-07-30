import React from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
    root: {
        '& >*':{
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Menuradio() {
    const classes = useStyles();

    return(
       
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Link radio" />
                    
                </form>
                <Button variant="contained">Default</Button>
            </div>
        );
}
 

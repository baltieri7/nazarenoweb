import React from 'react'
import { Radio } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import classes from '*.module.css'

class Radio extends React.Component{
    render(){
        return(
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Link radio" />
                </form>
            </div>
        );
    }
}
 
export default Radio
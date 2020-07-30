import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
class Grafico extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h5" component="h2">
                    <Box textAlign="left"
                        paddingTop="30px"
                    >
                        h1. Título
                   </Box>
                </Typography>
            </div>
        )
    }
}


export default Grafico
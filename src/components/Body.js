import React from 'react'
import Users from './Users'
import { Grid, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        
    },
}));
export default function Body() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">Hola acá va un menú quizá</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Users />
                </Grid>
            </Grid>
        </div>
    )
}

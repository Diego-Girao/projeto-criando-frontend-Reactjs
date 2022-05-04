import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '60ch',
        display:'flex',
        margin:'50px',
    },
},
  }));

const Contatos = () => {
    const classes = useStyles();

    return(
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center"xs={12}>
                
                <form className={classes.root} noValidate autoComplete="off">
                <TextField variant="filled" id="name" label="Name" />
                <TextField variant="filled" id="email" label="E-mail" />
                <TextField variant="filled" id="message" label="Message" multiline rows={4} />
                </form>
                
            </Grid>
            <Button variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </>
    )
}

export default Contatos;

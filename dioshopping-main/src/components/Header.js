import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';
  
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        justifyContent: 'space-between',
        background: '#00a1ff',
        width: '100%',
        color: 'white'
    },   
  }));

  const Header = () => {
      const classes = useStyles();
    return(

        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className={classes.paper} >
            <Typography variant='h3'>
                <p>
                _.Dio SoccerShop
                </p>
            </Typography>
                <Button variant="contained" component={Link} to="/">Home</Button>
                <Button variant="contained" component={Link} to="/contato">Contato</Button>
            <Cart />              
        </Grid>
    )
}

export default Header;

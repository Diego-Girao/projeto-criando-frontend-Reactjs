import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
  
  const Header = () => {
    return(
  
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
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

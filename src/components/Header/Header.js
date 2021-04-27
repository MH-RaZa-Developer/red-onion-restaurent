import { Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../img/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { foodContext } from '../../App';

const Header = () => {

    const [foodItem, setFoodItem] = useContext(foodContext);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img src={logo} alt=""></img>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div style={{textAlign:"right", marginRight:"50px"}}>
                    <span>{foodItem.length}</span><FontAwesomeIcon style={{marginTop:"20px"}} icon={faShoppingCart} />
                        
                        <Button style={{margin:"18px", textTransform:"capitalize"}} variant="contained" color="primary">
                        Log In
                        </Button>
                        <Button style={{margin:"15px", textTransform:"capitalize"}} variant="contained" color="secondary">
                        Sign Up
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
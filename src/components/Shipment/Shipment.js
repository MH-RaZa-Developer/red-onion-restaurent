import { Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { foodContext } from '../../App';
import './Shipment.css';

const Shipment = () => {

    const cartStyle = {
        textAlign: "center"
    }

    const {foodOrder} = useContext(foodContext);

    const [foodItem, setFoodItem] = foodOrder;

    const { add } = useContext(foodContext);

    const [address, setAddress] = add;

    console.log(foodItem);

    let subTotal = 0;
    for(let i = 0; i < foodItem.length; i++)
    {
        let element = parseFloat(foodItem[i].price);
        subTotal += element;
    }
    
    let tax;
    if(subTotal > 20)
    {
        tax = 5;
    }
    else if(subTotal > 30)
    {
        tax = 3.50;
    }
    else{
        tax = 2.50;
    }

    const total = subTotal + tax + 10;

    return (
        <div>
            <div className="form">
                <h3>Edit your delivery task</h3>
                <hr />
                <form style={{marginTop:"20px"}}>
                    <TextField style={{marginTop:"20px"}} className="text-field" id="outlined-basic" label="District" variant="outlined" /><br />
                    <TextField style={{marginTop:"20px"}} className="text-field" id="outlined-basic" label="House no/Road no" variant="outlined" /><br />
                    <TextField style={{marginTop:"20px"}} className="text-field" id="outlined-basic" label="Floor/Flat no." variant="outlined" />
                    <Button type="button" style={{marginTop:"20px", textTransform: "capitalize", width:"100%"}} variant="contained" color="secondary">Place order</Button>
                </form>
            </div>
            <div className="cart" style={cartStyle}>
                <h3>Location: From Gulshan Plaza, Dhaka</h3>
                <p>Arriving in 20-30 minutes</p>
                <h5>Item Order: {foodItem.length}</h5>
                <h5>Sub Total: $ {subTotal.toFixed(2)}</h5>
                <h5>Tax: $ {foodItem.length > 0 ? tax : "00"}</h5>
                <h5>Delivery Charge: $ {foodItem.length > 0 ? "10" : "00"}</h5>
                <h5>Total: $ {foodItem.length > 0 ? total.toFixed(2) : "00.0"}</h5>
            </div>
        </div>
    );
};

export default Shipment;
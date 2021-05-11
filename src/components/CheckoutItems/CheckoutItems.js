import { Button } from '@material-ui/core';
import React from 'react';
import './CheckoutItems.css';

const CheckoutItems = (props) => {

    const {img, title, price} = props.items;

    return (
        <div className="con">
            <div className="checkout-Item">
                <img style={{borderRadius:"50%", width:"120px"}} src={img}></img>
                <h3>{title}</h3>
                <h5>$ {price}</h5>
            </div>
        </div>
    );
};

export default CheckoutItems;
import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { foodContext } from '../../App';
import CheckoutItems from '../CheckoutItems/CheckoutItems';

const Checkout = () => {

    const {foodOrder} = useContext(foodContext);

    const [foodItem, setFoodItem] = foodOrder;

    const history = useHistory();

    const handleShipment = () =>{
        history.push('/shipment');
    }

    return (
        <div>
            <div style={{textAlign: "center"}}>
                <Button onClick={handleShipment} style={{textTransform:"capitalize"}} variant="contained" color="primary">Shipment</Button>
                <p>Click here for shipment your order!</p>
            </div>
            <div>
                {
                    foodItem.map(item => <CheckoutItems items={item} />)
                }
            </div>
        </div>
    );
};

export default Checkout;
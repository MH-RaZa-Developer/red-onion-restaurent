import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/food';
import './Details.css';
import {foodContext} from '../../App'

const Details = () => {

    const {id} = useParams();

    const data = fakeData.find(info => info.id === id);
    console.log(data);

    const { title, img, description, price} = data;

    const { foodOrder } = useContext(foodContext);

    const [foodItem, setFoodItem] = foodOrder;

    const handleAdd = () =>{
        const beforeItems = foodItem;
        setFoodItem([...beforeItems, data])
    }
    // console.log(foodItem);

    return (
        <div>
            <div className="detail-area">
                <h2>{title}</h2>
                <p>{description}</p>
                <h1>$ {price}</h1>
                <Button onClick={handleAdd} variant="contained" color="secondary">
                Add
                </Button>
            </div>

            <div className="image-area">
            <img src={img}></img>
            </div>
            
        </div>
    );
};

export default Details;
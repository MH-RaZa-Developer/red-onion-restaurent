import React, { useContext, useState } from 'react';
import './NavBar.css';
import fakeData from '../../fakeData/food';
import Items from '../Items/Items';
import { Button } from '@material-ui/core';
import { foodContext } from '../../App';
import { useHistory } from 'react-router';

const NavBar = () => {

    console.log(fakeData);

    const { foodOrder } = useContext(foodContext);

    const [foodItem, setFoodItem] = foodOrder;

    const [food, setFood] = useState(fakeData);

    const [toggle, setToggle] = useState([]);

    const handleBreakfast = () =>{
        const breakfast = fakeData.filter(fd => fd.type === "breakfast");
        setFood(breakfast);
    }

    const handleLunch = () =>{
        const lunch = fakeData.filter(fd => fd.type === "lunch");
        setFood(lunch);
    }

    const handleDinner = () =>{
        const dinner = fakeData.filter(fd => fd.type === "dinner");
        setFood(dinner);
    }

    const history = useHistory();

    const handleCheckout = () =>{
        history.push("/checkout");
    }

    return (
        <div>
            <div className="nav">
            <button className="btn" onClick={handleBreakfast}>Breakfast</button>
            <button className="btn" onClick={handleLunch}>Lunch</button>
            <button className="btn" onClick={handleDinner}>Dinner</button>
            </div>

            <div>
                {
                    food.map(fd => <Items foods={fd} />)
                }
            </div>
            <div className="checkout">
                    <Button onClick={handleCheckout} disabled={foodItem.length == 0} variant="contained" color="secondary">Checkout Your Food</Button>
            </div>
        </div>
    );
};

export default NavBar;
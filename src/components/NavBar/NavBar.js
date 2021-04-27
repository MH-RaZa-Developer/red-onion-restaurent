import React, { useState } from 'react';
import './NavBar.css';
import fakeData from '../../fakeData/food';
import Items from '../Items/Items';

const NavBar = () => {

    console.log(fakeData);

    const [food, setFood] = useState(fakeData);

    const [toggle, setToggle] = useState([]);

    return (
        <div>
            <div className="nav">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
            </div>

            <div>
                {
                    food.map(fd => <Items foods={fd} />)
                }
            </div>
        </div>
    );
};

export default NavBar;
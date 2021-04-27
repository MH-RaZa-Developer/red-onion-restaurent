import React from 'react';
import { useHistory } from 'react-router';
import './Items.css';

const Items = (props) => {

    console.log(props.foods);

    const {id, title, shortDesc, description, price, img} = props.foods;
    const history = useHistory();
    const handleData = (id) =>{
        console.log(id);
        history.push(`/details/${id}`)
    }

    return (
        <div className="Container">
            <div onClick={() => handleData(id)} className="food-card">
                <img style={{width:"150px", borderRadius:"50%"}} src={img}></img>
                <h2>{title}</h2>
                <p>{shortDesc}</p>
                <h4>$ {price}</h4>
            </div>
        </div>
    );
};

export default Items;
import { Button } from '@material-ui/core';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="input-area">
            <h2>Best food waiting for your belly.</h2>
                <input style={{borderRadius:"15px", border:"1px solid black", width:"250px", height:"33px",fontSize:"20px"}} type="text" /><Button style={{borderRadius:"15px", marginLeft: "4px"}} variant="contained" color="primary">Search</Button>
            </div>
        </div>
    );
};

export default Banner;
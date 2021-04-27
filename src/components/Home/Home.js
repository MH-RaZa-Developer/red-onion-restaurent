import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <Banner />
            <NavBar />
        </div>
    );
};

export default Home;
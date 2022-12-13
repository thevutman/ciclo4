import React from 'react';
import '../styles/Home.scss';
import Cajitas from '../components/Cajitas';

const Home = () => {
    return (
        <div className='home container'>
            <h2>INICIO</h2>
            <div className='home__items'>
                <h3>Peliculas</h3>
                <Cajitas />
            </div>
            <div className='home__items'> 
                <h3>Series</h3>
                <Cajitas />
            </div>
            <div className='home__items'>
                <h3>Favoritos</h3>
                <Cajitas />
            </div>
        </div>
    );
};

export default Home;
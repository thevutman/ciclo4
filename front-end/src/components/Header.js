import React from 'react';
import '../styles/Header.scss';
import img from '../assets/netflix.png';

const header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <img src={img} className='header__logo' />
                {/* <p className='header__p'>BIENVENIDO</p> */}
            </div>
            <div className='header--mobile'>
                <h1>MENU</h1>
            </div>
            <div className='header--desktop'>
                <h1>INICIO</h1>
                <h1>PELICULAS</h1>
                <h1>SERIES</h1>
                <h1>CATEGORIAS</h1>
                <h1>CUENTA</h1>
            </div>
        </div>
    );
};

export default header;
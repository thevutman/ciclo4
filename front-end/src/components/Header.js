import React from 'react';
import '../styles/Header.scss';
import img from '../assets/logo.svg';

const header = () => {
    const openMenu = () => {
        document.getElementById('menu').classList.toggle("active")
    }
    return (
        <div className='header'>
            <div className='header-container'>
                <img src={img} />
                <div></div>
                <p>BIENVENIDO</p>
            </div>
            <div className='header--mobile' onClick={openMenu}>
                <h1>MENU</h1>
            </div>
            <div className='header--desktop'>
                <h1>INICIO</h1>
                <h1>PELICULAS</h1>
                <h1>SERIES</h1>
                <h1>CATEGORIAS</h1>
                <h1>CUENTA</h1>
            </div>
            <div className='menu' id='menu'>
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
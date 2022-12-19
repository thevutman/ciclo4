import React from 'react';
import '../styles/Header.scss';
import img from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const header = () => {
    const openMenu = () => {
        document.getElementById('menu').classList.toggle("active")
    }
    return (
        <div className='header'>
            <div className='header-container'>
                <img src={img} alt='logo de netflix con un parche' />
                <div></div>
                <p>BIENVENIDO</p>
            </div>
            <div className='header--mobile' onClick={openMenu}>
                <h1>MENU</h1>
            </div>
            <div className='header--desktop'>
                <Link className='header__link' to={"/"}>INICIO</Link>
                <Link className='header__link'>PELICULAS</Link>
                <Link className='header__link'>SERIES</Link>
                <Link className='header__link'>CATEGORIAS</Link>
                <Link className='header__link'>CUENTA</Link>
            </div>
            <div className='menu' id='menu'>
                <Link className='header__link' to={"/"}>INICIO</Link>
                <Link className='header__link'>PELICULAS</Link>
                <Link className='header__link'>SERIES</Link>
                <Link className='header__link'>CATEGORIAS</Link>
                <Link className='header__link'>CUENTA</Link>
            </div>
        </div>
    );
};

export default header;
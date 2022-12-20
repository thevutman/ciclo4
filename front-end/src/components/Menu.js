import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';

const Menu = () => {

    const openMenu = () => {
        document.getElementById('menu').classList.toggle("active")
    }

    return (
        <div className='menu'>
            <div className='menu--mobile' onClick={openMenu}>
                <h1>MENU</h1>
            </div>
            <div className='menu--desktop'>
                <Link className='menu__link' to={"/home"} onClick={openMenu}>INICIO</Link>
                <Link className='menu__link' onClick={openMenu}>PELICULAS</Link>
                <Link className='menu__link' onClick={openMenu}>SERIES</Link>
                <Link className='menu__link' onClick={openMenu}>CATEGORIAS</Link>
                <Link className='menu__link' onClick={openMenu}>CUENTA</Link>
            </div>
            <div className='menu__items' id='menu'>
                <Link className='menu__link' to={"/home"} onClick={openMenu}>INICIO</Link>
                <Link className='menu__link' onClick={openMenu}>PELICULAS</Link>
                <Link className='menu__link' onClick={openMenu}>SERIES</Link>
                <Link className='menu__link' onClick={openMenu}>CATEGORIAS</Link>
                <Link className='menu__link' onClick={openMenu}>CUENTA</Link>
            </div>
        </div>
    );
};

export default Menu;
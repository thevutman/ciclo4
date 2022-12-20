import React from 'react';
import '../styles/Header.scss';
import img from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <img src={img} alt='logo de netflix con un parche' />
                <div></div>
                <p>BIENVENIDO</p>
            </div>
        </div>
    );
};

export default header;
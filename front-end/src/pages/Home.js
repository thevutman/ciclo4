import React, {useEffect} from 'react';
import {Link, useNavigate } from "react-router-dom";
import '../styles/Home.scss';
import Cajitas from '../components/Cajitas';

const Home = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('dataUser')){
            navigate('/')
        }
    },[])

    function next (x){
        const activities = document.querySelectorAll(".cajitas");
        activities[x].scrollLeft = activities[x].scrollLeft+400
    }
    function back (x, e){
        const activities = document.querySelectorAll(".cajitas");
        activities[x].scrollLeft = activities[x].scrollLeft-400
    }
    return (
        <div className='home container'>
            <h2>INICIO</h2>
            <div className='home__items'>
                <h3>Peliculas</h3>
                <Cajitas
                    API="http://localhost:8080/api/movie"
                    type="movies"
                    category=""
                />
                <div className='home__left' onClick={() => back(0)}></div>
                <div className='home__right' onClick={() => next(0)}></div>
            </div>
            <div className='home__items'> 
                <h3>Series</h3>
                <Cajitas
                    API="http://localhost:8080/api/series"
                    type='series'
                    category=""
                />
                <div className='home__left' onClick={() => back(1)}></div>
                <div className='home__right' onClick={() => next(1)}></div>
            </div>
            {/*<div className='home__items'>
                <h3>Favoritos</h3> */}
                {/* <Cajitas
                    API="http://localhost:8080/api/movie"
                /> */}
            {/* </div> */}
        </div>
    );
};

export default Home;
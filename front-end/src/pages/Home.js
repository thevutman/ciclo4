import React from 'react';
import '../styles/Home.scss';
import Cajitas from '../components/Cajitas';
import { useEffect } from 'react';

const Home = () => {
    function next (x){
        const activities = document.querySelectorAll(".cajitas");
        console.log(activities[x])
        console.log("a")
        // activities.scrollLeft = activities.scrollLeft+400
    }
    function back (x){
        const activities = document.querySelectorAll(".cajitas");
        console.log(activities[x])
        // activities.scrollLeft = activities.scrollLeft-400
    }
    return (
        <div className='home container'>
            <h2>INICIO</h2>
            <div className='home__items'>
                <h3>Peliculas</h3>
                <Cajitas
                    API="http://localhost:8080/api/movie"
                />
                <div className='home__left' onClick={console.log(1)}></div>
                <div className='home__right' onClick={next}></div>
            </div>
            <div className='home__items'> 
                <h3>Series</h3>
                <Cajitas
                    API="http://localhost:8080/api/series"
                />
                <div className='home__left' onClick={back(1)}></div>
                <div className='home__right' onClick={next(1)}></div>
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
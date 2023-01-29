import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss'
import Layout from '../containers/Layout';
import MenuLayout from '../containers/MenuLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Account from '../pages/Account';
import MoviesContainer from '../pages/MoviesContainer';


export default function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Login />}/>
                        <Route path='register' element={<Register />}/>
                        <Route element={<MenuLayout />}>
                            <Route path='movies/:id' element={<Movies/>}/>
                            <Route path='series/:id' element={<Series/>}/>
                            <Route path='home/:name' element={<MoviesContainer/>}/>
                            <Route path='account' element={<Account/>}/>
                            <Route path='*' element={<Error />}/>
                        </Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};
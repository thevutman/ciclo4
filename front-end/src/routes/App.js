import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss'
import Layout from '../containers/Layout';
import MenuLayout from '../containers/MenuLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import Movies from '../pages/Movies';


export default function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Login />}/>
                        <Route path='register' element={<Register />}/>
                        <Route element={<MenuLayout />}>
                            <Route path='home' element={<Home />}/>
                            <Route path='movies/:id' element={<Movies/>}/>
                            <Route path='*' element={<Error />}/>
                        </Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};
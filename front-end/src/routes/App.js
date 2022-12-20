import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import Movies from '../pages/Movies';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>

                    <Route path='/movies/:id' element={<Movies/>}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
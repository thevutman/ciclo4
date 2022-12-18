import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
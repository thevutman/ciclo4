import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../components/Header'

const Layout = () => {
    return (
        // <div className='layout'>
        //     <Header />
        // </div>
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
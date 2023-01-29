import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderMenu from './HeaderMenu';

const Layout = () => {
    return (
        <>
            <HeaderMenu />
            <Outlet/>
        </>
    );
};

export default Layout;
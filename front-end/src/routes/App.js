import React from 'react';
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';

const App = () => {
    return (
        <div>
            <Layout>
                {/* <Home /> */}
                <Login/>
            </Layout>
        </div>
    );
};

export default App;
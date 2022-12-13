import React from 'react';
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Home from '../pages/Home';

const App = () => {
    return (
        <div>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
};

export default App;
import React from 'react';
import Views from '../components/Views';
import { API_URL } from '../util/Util';

const Series = () => {
    return (
        <Views 
        API={API_URL + "series/"}
        />
      );
};

export default Series;
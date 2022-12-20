import React from 'react';
import Views from '../components/Views';

const Series = () => {
    return (
        <Views 
        API="http://localhost:8080/api/series/"
        />
      );
};

export default Series;
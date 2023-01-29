import React from 'react';
import Views from '../components/Views';
import { API_URL } from '../util/Util';

const Movies = () => {
  return (
    <Views 
    API={API_URL+"movie/"}
    />
  );
};

export default Movies;
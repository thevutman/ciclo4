import React from 'react';
import Views from '../components/Views';

const Movies = () => {
  return (
    <Views 
    API="http://localhost:8080/api/movie/"
    />
  );
};

export default Movies;
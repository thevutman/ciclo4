import React from "react";
import '../styles/Error.scss';
import img from '../assets/404.svg';


const Error = () => {
   
    return (
        <div className="error">
            <div className="error-container">
             <img src={img}/>
             <h1> ERROR 404</h1>
             <h1>Page Not Found</h1>
            </div>
        </div>
    );
        
  };
  
  export default Error;
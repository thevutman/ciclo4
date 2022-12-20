import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cajitas.scss";
import img from "../assets/pelicula.jpg";
// import requestApi from '../hooks/requestApi';

const Cajitas = (API) => {
  // const contents = requestApi(API.API)
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];
      let response = await fetch(API.API);
      response = await response.json();
      if (API.category != "") {
        let i = 0;
        let c = 0;
        for (i = 0; i < response.length; i++) {
            if(response[i].category==API.category){
                array.push(response[i])
            }
        }
        response=array
      }
      
      setContents(response);
    }
    fetchData();
  }, []);

  return (
    <div className="cajitas">
      {contents.map((content) => (
        <Link
          key={content.id}
          className="cajitas-container"
          to={`/${API.type}/${content.id}`}
        >
          <img
            src={!content.link ? img : content.link}
            alt={"imagen de la pelicula" + content.name}
          />
          <p className="cajitas-container__title">{content.name}</p>
        </Link>
      ))}
      <div className="cajitas__left"></div>
      <div className="cajitas_right"></div>
    </div>
  );
};

export default Cajitas;

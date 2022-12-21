import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menu.scss";
import Category from "./Category";

const api = "http://localhost:8080/api/category";

const Menu = () => {
  const [optiones, setOptiones] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(api);
      response = await response.json();
      console.log(response);
      setOptiones(response);
    }
    fetchData();
  }, []);
  const openMenu = () => {
    document.getElementById("menu").classList.toggle("active");
  };

  function openMenuCategory() {
    document.getElementById("category").classList.toggle("active");
  }
  return (
    <div className="menu">
      <div className="menu--mobile" onClick={openMenu}>
        <h1>MENU</h1>
      </div>
      <div className="menu--desktop">
        <Link className="menu__link" to={"/home"} onClick={openMenu}>
          INICIO
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          PELICULAS
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          SERIES
        </Link>
        <div className="menu-category">
          <p className="menu__link" onClick={openMenuCategory}>CATEGORIAS</p>
          <div className="menu-category__items" id="category">
            {optiones.map((option) => (
              <Link className="menu__link" to={"/category/"+option.name} onClick={openMenuCategory} key={option.id}>{option.name}</Link>
            ))}
          </div>
        </div>

        <Link className="menu__link" onClick={openMenu}>
          CUENTA
        </Link>
      </div>
      <div className="menu__items" id="menu">
        <Link className="menu__link" to={"/home"} onClick={openMenu}>
          INICIO
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          PELICULAS
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          SERIES
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          CATEGORIAS
        </Link>
        <Link className="menu__link" onClick={openMenu}>
          CUENTA
        </Link>
      </div>
    </div>
  );
};

export default Menu;

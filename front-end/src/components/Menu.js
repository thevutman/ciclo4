import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menu.scss";

const api = "http://localhost:8080/api/category";

const Menu = () => {
  const [optiones, setOptiones] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("dataUser")){
      navigate("/")
    }
    async function fetchData() {
      let response = await fetch(api);
      response = await response.json();
      setOptiones(response);
    }
    fetchData();
  }, []);
  const openMenu = () => {
    document.getElementById("menu").classList.toggle("active");
  };

  function openMenuCategory(x) {
    document.querySelectorAll(".menu-category__items")[x].classList.toggle("active");
  }
  function openMenuCuenta(x) {
    document.querySelectorAll(".menu-cuenta__items")[x].classList.toggle("active");
  }
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  {/*Celular*/}{/*Celular*/}{/*Celular*/}
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
          <p className="menu__link" onClick={()=> openMenuCategory(0)}>
            CATEGORIAS
          </p>
          <div className="menu-category__items">
            {optiones.map((option) => (
              <Link
                className="menu__link"
                to={"/category/" + option.name}
                onClick={()=> openMenuCategory(0)}
                key={option.id}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="menu-cuenta">
          <p className="menu__link" onClick={()=> openMenuCuenta(0)}>
            CUENTA
          </p>
          <div className="menu-cuenta__items">
            <p className="menu__title" to={""}>
              Hola Sebastian
            </p>
            <Link className="menu__link" to={"/account"} onClick={()=> openMenuCuenta(0)}>
              Mis datos personales
            </Link>
            <Link
              className="menu__link menu__link--logOut"
              to={""}
              onClick={logOut}
            >
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>

      {/*Celular*/}{/*Celular*/}{/*Celular*/}
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
        <div className="menu-category">
          <p className="menu__link" onClick={()=> openMenuCategory(1)}>
            CATEGORIAS
          </p>
          <div className="menu-category__items">
            {optiones.map((option) => (
              <Link
                className="menu__link"
                to={"/category/" + option.name}
                onClick={()=> openMenuCategory(1)}
                key={option.id}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="menu-cuenta">
          <p className="menu__link" onClick={()=> openMenuCuenta(1)}>
            CUENTA
          </p>
          <div className="menu-cuenta__items">
            <p className="menu__title" to={""}>
              Hola Sebastian
            </p>
            <Link className="menu__link" to={""} onClick={()=> openMenuCuenta(1)}>
              Mis datos personales
            </Link>
            <Link
              className="menu__link menu__link--logOut"
              to={""}
              onClick={logOut}
            >
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

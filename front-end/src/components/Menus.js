import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API_URL } from "../util/Util";

const api = API_URL+"category";

const Menus = (i) => {

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

    
    return (
        <div className={i.class} id={i.id}>
            <NavLink className="menu__link" to={"/home/all"} exact onClick={openMenu}>
                INICIO
            </NavLink>

            <div className="menu-category">
                <p className="menu__link" onClick={()=> openMenuCategory(parseInt(i.n))}>CATEGORIAS</p>
                <div className="menu-category__items">
                    {optiones.map((option) => (
                        <p className="menu__link" onClick={()=> {openMenuCategory(parseInt(i.n)); navigate("/home/" + option.name); openMenu()}} key={option.id}>
                            {option.name}
                        </p>
                    ))}
                </div>
            </div>

            <div className="menu-cuenta">
                <p className="menu__link" onClick={()=> openMenuCuenta(parseInt(i.n))}>
                    CUENTA
                </p>
                <div className="menu-cuenta__items">
                    <p className="menu__title" to={""}>Hola</p>
                    <NavLink className="menu__link" to={"/account"} onClick={()=> {openMenuCuenta(parseInt(i.n)); openMenu()}}>
                        Mis datos personales
                    </NavLink>
                    <NavLink
                        className="menu__link menu__link--logOut"
                        to={""}
                        onClick={logOut}
                    >
                        Cerrar sesión
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menus;
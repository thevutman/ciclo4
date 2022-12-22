import React from "react";
import Menus from "../components/Menus";
import "../styles/Menu.scss";


const HeaderMenu = () => {

  const openMenu = () => {
    document.getElementById("menu").classList.toggle("active");
  };

  return (

    <div className="menu">
      <div className="menu--mobile" onClick={openMenu}>
        <h1>MENU</h1>
      </div>
          {/* ******************DESKTOP***************** */}
      <Menus 
        class="menu--desktop"
        id=""
        n="0"
      />
              {/* ******************CELULAR***************** */}

      <Menus 
        class="menu__items"
        id="menu"
        n="1"
      />
    </div>
  );
};

export default HeaderMenu;

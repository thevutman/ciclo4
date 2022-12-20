import React from "react";
import {Link } from "react-router-dom";
import "../styles/Login.scss"
    
    const Login =() => {
    
    
    return (
        <div className="login">
            <div className="login-information">
                <h2>Mira series y peliculas gratis y 0% piratas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti illo consectetur iure voluptatum dolore ut doloremque at nulla! Perferendis explicabo laboriosam</p>
            </div>
            <div className="login-container">
                <h2>Iniciar sesión </h2>
                <form className="login-container__form"> 
                    <label for="Email">Email</label>
                    <input type="email" name="Email" placeholder="user@example.com"/>
                    <label for="Password">Password</label>
                    <input type="password" name="Password" placeholder="*******"/>
                </form>
                <button>Entrar</button>
                <p>¿No tienes cuenta? Registrate <Link className="login-container__link" to={"/Register"}>aquí </Link></p>

            </div>
        </div>
    );
} 
export default Login
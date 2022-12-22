import React, {useEffect} from "react";
import {Link, useNavigate } from "react-router-dom";
import "../styles/Login.scss"
import { API_URL } from "../util/Util";
    
const Login =() => {
    let navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('dataUser')){
            navigate('/home/all')
        }
    },[])

    function Logg() {
        document.getElementById("errorMessageLogin").classList.remove('active')

        const jsonData={
            "user":document.getElementById("Email").value,
            "password":document.getElementById("Password").value,
        }

        async function fetchData(){
            let response = await fetch(API_URL+"auth", { 
                method:"POST",
                headers:{"Content-Type":"application/json" },
                body:JSON.stringify(jsonData)
            })
            response = await response.json()
            if(response.token != null){
                localStorage.setItem("dataUser", JSON.stringify(response))
                navigate("/home")
            }
            else{
                document.getElementById("Email").style.border="2px solid red"
                document.getElementById("Password").style.border="2px solid red"
                document.getElementById("errorMessageLogin").classList.add('active')
            }
        }
        fetchData()
    }

    return (
        <div className="login">
            <div className="login-information">
                <h2>Mira series y peliculas gratis y 0% piratas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti illo consectetur iure voluptatum dolore ut doloremque at nulla! Perferendis explicabo laboriosam</p>
            </div>
            <div className="login-container">
                <h2>Iniciar sesión </h2>
                <p id="errorMessageLogin">Email o contrasena incorrectos</p>
                <form className="login-container__form"> 
                    <label for="Email">Email</label>
                    <input id="Email" type="email" name="Email" placeholder="user@example.com"/>
                    <label for="Password">Password</label>
                    <input id="Password" type="password" name="Password" placeholder="*******"/>
                </form>
                <button onClick={Logg}>Entrar</button>
                <p>¿No tienes cuenta? Registrate <Link className="login-container__link" to={"/Register"}>aquí </Link></p>

            </div>
        </div>
    );
} 
export default Login
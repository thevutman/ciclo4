import React from "react";
import {Link } from "react-router-dom";
import "../styles/Register.scss"

// { }  <> 
    

    const Register =() => { 
        function comprobar() {
            var i=0
            const mensajeError=document.getElementById("mensajeError")
            const password=document.getElementById("Password")
            const repeatpassword=document.getElementById("RepeatPassword")
            for(i=0;i<=1;i++){ 
                console.log(i)
                switch(i){ 
                    case 0:
                        
                        if(password.value.length >= 20 ){
                            password.style.border="2px solid red"
                         }
                         else{password.style.border="2px solid green" }
                    break
                    case 1:
    
                        if(password.value==repeatpassword.value ){
                            repeatpassword.style.border="2px solid green"
                         }
                         else{
                            repeatpassword.style.border="2px solid red" 
                            mensajeError.innerHTML +="La contraseña no coincide"
                        }
                }
            } 
         }
        return (
            <div className="register">
                <div className="register-container">
                    <h2>Registro </h2>
                    <p id="mensajeError"> </p>
                    <form className="register-container__form"> 
                        <label for="Name">Name</label>
                        <input id="Name" type="text" name="Name" placeholder=""/>
                        <label for="LastName">LastName</label>
                        <input id="LastName" type="text" name="LastName" placeholder=""/>
                        <label for="birthDate">birthDate</label>
                        <input id="birthDate" type="date" name="birthDate" placeholder=""/>
                        <label for="phone">phone</label>
                        <input id="phone" type="number" name="phone" placeholder=""/>
                        <label for="Email">Email</label>
                        <input id="Email" type="email" name="Email" placeholder="user@example.com"/>
                        <label for="Password">Password</label>
                        <input id="Password" type="password" name="Password" placeholder="*******"/>
                        <label for="RepeatPassword">Repeat Password</label>
                        <input id="RepeatPassword" type="password" name="RepeatPassword" placeholder="*******"/>
                    </form>
                    <button onClick={comprobar}>Start</button>
                    <p>¿Ya tienes cuenta? Ingresa aquí <Link to={"/Login"}>aquí </Link></p>
    
                </div>
            </div>
        );
    } 
    export default Register
 
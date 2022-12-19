import React,{useEffect }  from "react";
import {Link } from "react-router-dom";
import "../styles/Register.scss"

// { }  <>
// let k =fetch("http://localhost:8080/api/client/"+document.getElementById("Email").value)
//k=k.JSON()
//console.log(k.email) 
    

    const Register =() => { 
        useEffect(() => { 
            async function emailData(){ 
                let k =await fetch("http://localhost:8080/api/client/amaury3@malmail.com")
                k=await k.json()
                console.log(k[0].email)
            }
            emailData()
        })
        function registrar() {
            const jsonData={
                "name":document.getElementById("Name").value,
                "lastName":document.getElementById("LastName").value,
                "birthDate":document.getElementById("birthDate").value,
                "phone":document.getElementById("phone").value,
                "email":document.getElementById("Email").value,
                "password":document.getElementById("Password").value,

             }
            console.log(document.getElementById("Email").value)
            async function emailData(){ 
                let k =await fetch("http://localhost:8080/api/client/"+document.getElementById("Email").value)
                k=await k.json()
                console.log(k.email)
            }
            emailData()

            let e =fetch("http://localhost:8080/api/client", { 
                method:"POST",
                headers:{"Content-Type":"application/json" },
                body:JSON.stringify(jsonData)
            } )
        
         }
        function comprobar() {
            var i=0
            let p=0
            const mensajeError=document.getElementById("mensajeError")
            mensajeError.innerHTML=""
            const password=document.getElementById("Password")
            const repeatpassword=document.getElementById("RepeatPassword")
            for(i=0;i<=1;i++){ 
                console.log(i)
                switch(i){ 
                    case 0:
                        
                        if(password.value.length <= 20 &&password.value.length >=6 ){
                            password.style.border="2px solid green"
                            p++
                         }
                         else{
                            password.style.border="2px solid red"
                            
                         }
                    break
                    case 1:
    
                        if(password.value==repeatpassword.value && password.value != ""){
                            repeatpassword.style.border="2px solid green"
                            p++
                         }
                         else{
                            repeatpassword.style.border="2px solid red" 
                            mensajeError.innerHTML +="La contraseña no coincide"
                        }
                }
                if(p==2){ 
                    registrar()
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
                        <input id="Name" type="text" name="Name" placeholder="" required/>
                        <label for="LastName">LastName</label>
                        <input id="LastName" type="text" name="LastName" placeholder="" required/>
                        <label for="birthDate">birthDate</label>
                        <input id="birthDate" type="date" name="birthDate" placeholder="" required/>
                        <label for="phone">phone</label>
                        <input id="phone" type="number" name="phone" placeholder="" required/>
                        <label for="Email">Email</label>
                        <input id="Email" type="email" name="Email" placeholder="user@example.com" required/>
                        <label for="Password">Password</label>
                        <input id="Password" type="password" name="Password" placeholder="*******" required/>
                        <label for="RepeatPassword">Repeat Password</label>
                        <input id="RepeatPassword" type="password" name="RepeatPassword" placeholder="*******" required/>
                        <div>
                            <button type="submit" onClick={comprobar}>Start</button>
                        </div>
                    </form>
                    <p>¿Ya tienes cuenta? Ingresa aquí <Link to={"/Login"}>aquí </Link></p>
    
                </div>
            </div>
        );
    } 
    export default Register

 
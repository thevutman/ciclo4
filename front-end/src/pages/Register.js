import React,{useEffect }  from "react";
import {Link} from "react-router-dom";
import "../styles/Register.scss"

// { }  <>
// let k =fetch("http://localhost:8080/api/client/"+document.getElementById("Email").value)
//k=k.JSON()
//console.log(k.email) 
    

const Register =() => { 
    // useEffect(() => { 
        // async function emailData(){ 
        //     let k =await fetch("http://localhost:8080/api/client/amaury3@malmail.com")
        //     k=await k.json()
        //     console.log(k[0].email)
        // }
    //     emailData()
    // })
    function registrar() {
        const jsonData={
            "name":document.getElementById("Name").value,
            "lastName":document.getElementById("LastName").value,
            "birthDate":document.getElementById("birthDate").value,
            "phone":document.getElementById("phone").value,
            "email":document.getElementById("Email").value,
            "password":document.getElementById("Password").value,

        }

        let e =fetch("http://localhost:8080/api/client", { 
            method:"POST",
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify(jsonData)
        } )
    
    }
    async function comprobar() {
        var i=0
        let p=0
        const email = document.getElementById('Email')
        const password = document.getElementById('Password')
        const repeatpassword = document.getElementById('RepeatPassword')

        async function emailData(){ 
            let k =await fetch("http://localhost:8080/api/client/"+document.getElementById("Email").value)
            k=await k.json()
            return k
        }
        let checkEmail = await emailData();
        if (checkEmail.length > 0) {
            checkEmail = checkEmail[0].email
        }
        else (
            checkEmail = ""
        )

        const mensajeError=document.getElementById("mensajeError")
        mensajeError.innerHTML=""
        const input = document.querySelectorAll(".input")
        
        while(i<7) {
            if (input[i].value != "") {
                if (input[i].reportValidity()) {
                    input[i].style.border='2px solid green'
                    mensajeError.innerHTML=""

                    if (i==4) {
                        if (checkEmail==email.value) {
                            email.style.border="2px solid red"
                            mensajeError.innerHTML +="El correo ya se encuentra registrado"
                            break
                        }
                        else {
                            email.style.border="2px solid green"
                        }
                    }
                    if (i==6) {
                        if(password.value==repeatpassword.value && repeatpassword.value != ""){
                            repeatpassword.style.border="2px solid green"
                            p++
                            }
                            else{
                            repeatpassword.style.border="2px solid red" 
                            mensajeError.innerHTML +="La contraseña no coincide"
                            break
                        }
                        registrar()
                        return true
                    }
                }
                else {
                    input[i].style.border='2px solid red'
                    break
                }
                i++
            }
            else {
                mensajeError.innerHTML+="<br/>todos los campos son necesarios"
                for (let j = 0; j < input.length; j++) {
                    if(input[j].value == ''){
                        input[j].style.border='2px solid red'
                    }
                }
                break
            }
        }
    }
    async function handleClickRegister(){
        console.log(await comprobar())
    }
    return (
        <div className="register">
            <div className="register-container">
                <h2>Registro </h2>
                <p id="mensajeError"> </p>
                <form className="register-container__form"> 
                    <label for="Name">Name</label>
                    <input className="input" id="Name" type="text" name="Name" placeholder="" pattern="[A-Za-z]{1,20}" required/>
                    <label for="LastName">LastName</label>
                    <input className="input" id="LastName" type="text" name="LastName" placeholder="" pattern="[A-Za-z]{1,30}" required/>
                    <label for="birthDate">birthDate</label>
                    <input className="input" id="birthDate" type="date" name="birthDate" placeholder="" required/>
                    <label for="phone">phone</label>
                    <input className="input" id="phone" type="number" name="phone" placeholder="" pattern="[0-9]{1,15}" required/>
                    <label for="Email">Email</label>
                    <input className="input" id="Email" type="email" name="Email" placeholder="user@example.com" required/>
                    <label for="Password">Password</label>
                    <input className="input" id="Password" type="password" name="Password" placeholder="*******" pattern="[A-Za-z0-9]{8,16}" required/>
                    <label for="RepeatPassword">Repeat Password</label>
                    <input className="input" id="RepeatPassword" type="password" name="RepeatPassword" placeholder="*******" required/>
                </form>
                <button type="submit" onClick={handleClickRegister}>Start</button>
                <p>¿Ya tienes cuenta? Ingresa aquí <Link className="register-container__link" to={"/"}>aquí </Link></p>

            </div>
        </div>
    );
} 
export default Register

 
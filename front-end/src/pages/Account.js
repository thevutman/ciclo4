import React, {useEffect, useState} from 'react';
import "../styles/Account.scss";
import { API_URL } from '../util/Util';

const Account = () => {
    const [info, setInfo]= useState([])
    useEffect(() =>{
        async function fetchData(){
            let response = await fetch(API_URL+"client/"+JSON.parse(localStorage.getItem("dataUser")).email)
            response=await response.json()
            setInfo(response)
        }
        fetchData()
    },[])
    return (
        <div className='cuenta'>
            <div className='cuenta__tittle'>
                <h1>
                    Hola {info.name} {info.lastName} 
                </h1>
            </div>
            <div className='cuenta-container'>
                <h2 className='cuenta-container__tittle'>Email:</h2>
                <p>{info.email}</p>
                <h2 className='cuenta-container__tittle'>Phone:</h2>
                <p>{info.phone}</p>
                <h2 className='cuenta-container__tittle'>birthDate:</h2>
                <p>{info.birthDate}</p>
            </div>
        </div>
    );
};

export default Account;
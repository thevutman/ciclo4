import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import "../styles/Views.scss";

const Views = (API) => {
    const [contents, setContents] = useState([])
    const params = useParams() 

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(API.API+params.id)
            response = await response.json()
            setContents(response)
        }
        async function fetchCheck() {
            let x = await fetch("http://localhost:8080/api/score/check/"+params.id, { 
                // Enter your IP address here 
                method: 'GET', 
                headers: { 'Content-Type': 'application/json',authorization:"Basic "+JSON.parse(localStorage.getItem("dataUser")).token},
                // body data type must match "Content-Type" header 
            }) 
            x = await x.json()
            console.log(x)
            if(x){
                document.getElementById('heart').classList.add('active')
            }
        }
        fetchData()
        console.log(fetchCheck())
       }, [])

       function like(){
          console.log(4)
          handleClick()
          document.getElementById("heart").style.color="red"
       }

       var jsonData = {
        "state": true,
        "movieId":params.id,
        } 
        async function handleClick() { 
            // Send data to the backend via POST 
            let x = await fetch("http://localhost:8080/api/score", { 
                // Enter your IP address here 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json',authorization:"Basic "+JSON.parse(localStorage.getItem("dataUser")).token},
                body: JSON.stringify(jsonData) 
                // body data type must match "Content-Type" header 
            }) 
            console.log(x)
            x= await x.json()
            console.log(x)

        }

    return (
        <div>  
            <div className='vista'>     
                <iframe width="100%" height="100%" src={!contents.views?" ":contents.views} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className='vista-container'>
                    
                    <div className='vista__btn'>
                        <p >PLAY </p>
                    </div>
                    <div className='vista__info'>
                        <div className='vista__info-head'>
                            <h2>{contents.name}</h2>
                            <i className="fa-sharp fa-solid fa-heart" id='heart' onClick={like}></i>

                        </div>
                        <p className='vista__info-p'>duracion</p>
                        <p className='vista__info-p'>actores</p>
                        <p className='vista__info-p'>director</p>
                        <p className='vista__info-p'>{contents.classification}</p>
                        <p className='vista__info-p vista__info-p--light' >{contents.description}</p>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default Views;
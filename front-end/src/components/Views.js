import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import "../styles/Views.scss";

const Views = () => {
    const [contents, setContents] = useState([])
    const params = useParams() 

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://localhost:8080/api/movie/"+params.id)
            response = await response.json()
            console.log(params.id)
            console.log(response)
            setContents(response)
        }
        fetchData()
       }, [])


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
                            <i className="fa-sharp fa-solid fa-heart"></i>

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
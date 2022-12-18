import React, {useState, useEffect} from 'react';
import "../styles/Views.scss";

const Views = () => {
    const [contents, setContents] = useState([])

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://localhost:8080/api/movie")
            response = await response.json()
            console.log(response)
            setContents(response)
        }
        fetchData()
       }, [])


    return (
        <div>
            {contents.map(content => (
                <div className='vista'> 
                    
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-Lo_uRC5P6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='vista-container'>
                            
                            <div className='vista__btn'>
                                <p >PLAY </p>
                            </div>
                            <div className='vista__info'>
                                <div className='vista__info-head'>
                                    <h2>{content.name}</h2>
                                    <i class="fa-sharp fa-solid fa-heart"></i>

                                </div>
                                <p className='vista__info-p'>duracion</p>
                                <p className='vista__info-p'>actores</p>
                                <p className='vista__info-p'>director</p>
                                <p className='vista__info-p'>{content.classification}</p>
                                <p className='vista__info-p vista__info-p--light' >{content.description}</p>

                            </div>

                        </div>
                    
                </div>

            ))}
        </div>
    );
};

export default Views;
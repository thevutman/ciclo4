import React, {useState, useEffect} from 'react';
import '../styles/cajitas.scss';
import img from '../assets/pelicula.jpg';
// import requestApi from '../hooks/requestApi';

const Cajitas = (API) => {
    // const contents = requestApi(API.API)
    const [contents, setContents] = useState([])

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(API.API)
            response = await response.json()
            setContents(response)
        }
        fetchData()
        slide(".cajitas")
    }, [])

    function slide(id) {
        let isDown = false;
        let startX;
        let scrollLeft;

        const activities = document.querySelector(id);

        activities.addEventListener('mousedown', (e) => {
        isDown = true;
        activities.classList.add('active');
        startX = e.pageX - activities.offsetLeft;
        scrollLeft = activities.scrollLeft;
        });
        activities.addEventListener('mouseleave', () => {
        isDown = false;
        activities.classList.remove('active');
        });
        activities.addEventListener('mouseup', () => {
        isDown = false;
        activities.classList.remove('active');
        });
        activities.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - activities.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        activities.scrollLeft = scrollLeft - walk;
        });
    }

    return (
        <div className='cajitas'>
            {contents.map(content => (
                <div key={content.id} className='cajitas-container'>
                    <img src={!content.link?img:content.link} />
                    <p className='cajitas-container__title'>{content.name}</p>
                </div>
            ))}
            <div className='cajitas__left'></div>
            <div className='cajitas_right'></div>
        </div>
    );
};

export default Cajitas;
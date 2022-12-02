import React from 'react';
import jugando from '../../assets/jugando.jpg'
import './Skills.css'
const Skills = () => {
    return(
        <div className='contenedorSkills'>
            <h2>My Skills</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='contenedorImagenes'>
                <img src={jugando} alt="" className='cuatroImagenes'/>
                <img src={jugando} alt="" className='cuatroImagenes'/>
                <img src={jugando} alt="" className='cuatroImagenes'/>
                <img src={jugando} alt="" className='cuatroImagenes'/>
            </div>
        </div>
    )
}

export { Skills }
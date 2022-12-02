import React from 'react';
import './Hero.css'

const Hero = () => {
    return(
        <div className='contenedorHero'>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
            <div>
                <button className='btn1'>My portfolio</button>
                <button className='btn1'>Say hello</button>
            </div>

        </div>
    )
}

export { Hero }
import React from 'react';
import './header.css'
const Header = () => {
    return(
        <div className='contenedorHeader'>
            <h1 className='milogo'>Logo</h1>
            <nav>
                <a href='#'>Inicio</a>
                <a href='#'>About me</a>
                <a href='#'>My skills</a>
                <a href='#'>Works</a>
                <a href='#'>Contacto</a>
            </nav>
            <div className='contenedorRedes'>
            <a href="https://www.google.com/" target="_blank"><i class="bi bi-instagram"></i></a> 
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            </div>
        </div>
    )
}

export { Header }
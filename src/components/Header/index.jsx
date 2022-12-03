import React from 'react';
import './header.css'

import { Navbar } from '../Navbar';
const Header = () => {
    return(
        <div className='contenedorHeader'>
            <h1 className='milogo'>logo</h1>
            
            <Navbar/>
            <div className='contenedorRedes'>
            <a href="https://www.google.com/" target="_blank"><i class="bi bi-instagram"></i></a> 
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            </div>
        </div>
    )
}

export { Header }
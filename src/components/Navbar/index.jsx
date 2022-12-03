import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Route,Routes,BrowserRouter} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
           
            <nav>
                <NavLink to="/">Inicio</NavLink>
                <a href='#'>About me</a>
                <a href='#myskill'>My skills</a>
                <a href='#'>Works</a>
                <NavLink to="/contacto"> Contacto </NavLink>
                <NavLink to='/otraPagina'>Otra Pagina</NavLink>
            </nav>
            
        </div>
    )
}

export { Navbar }
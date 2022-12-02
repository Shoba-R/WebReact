import React from 'react';
import './About.css'
import  pepe  from '../../assets/hombre.jpg'
const About = () => {
    return(
        <div className='contenedorAbout'>
            <img src={ pepe } alt="" className='imagen'/>
            <div className='contenedorTextoAbout'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio consequuntur iure mollitia sit, laborum voluptatum quia aperiam ipsam quae repellendus soluta. Voluptatibus ullam dolore, dolor alias aspernatur quas architecto?</p>
                <p>Suscipit similique dicta officiis necessitatibus numquam. Nobis impedit eius provident ullam praesentium reiciendis fuga voluptates mollitia eveniet ipsa dolore rerum id laboriosam, dolor facilis perspiciatis odio eaque voluptatum. Vitae, saepe.</p>
                <div className='contenedorRedes'>
                    <button className='botonAbout'>More About me <i class="bi bi-arrow-right"></i></button>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
                </div>
            </div>
    </div>
    )
}

export { About }
import React from 'react';
import { Contacto } from '../../pages/Contacto';
import { About } from '../About';
import { Hero } from '../Hero';
import { Skills } from '../Skills';
import { Thinkless } from '../Thinkless';


const Main = () => {
    return(
        <div>
       
        <Hero/>
        <About/>
        <Skills/>
       <Thinkless/>
       
        </div>
    )
}

export { Main }
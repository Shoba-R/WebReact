import React from 'react';

const Contacto = () => {
    return(
        <div className='contenedorFomulario'>
            <form>
                <label>Ingrese su nombre: </label>
                <input type="text" placeholder='nombre' />
                <label>Ingrese su apellido: </label>
                <input type="text" placeholder='apellido' />
                <label>Ingrese su email: </label>
                <input type="text" placeholder='email' />
                <label >Ingrese su comentario</label>
                <textarea placeholder='comentario'></textarea>
            </form>
        </div>
    )
}

export { Contacto }
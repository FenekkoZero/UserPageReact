import React from 'react'
import '../styles/404.css'
import { Link } from 'react-router'

export const Error404 = () => {

    return <div className="error404">
            <div >
                <h1 >Error 404</h1>
                <p>La página solicitada no se encontró o no existe :c</p>
            </div>
            <Link to="/" className="back"> Volver al inicio</Link>
        </div>
        {/* Error404 está contenido dentro de un bloque </> para pasarlo como un elemento jsx 
        debido a un cambio en la sintaxis; los elementos jsx se llaman de manera diferente desde React v17*/}

}


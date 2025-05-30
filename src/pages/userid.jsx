import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import '../styles/UserId.css'
import { Link } from "react-router"

import profilePlaceholder from '../assets/profile_placeholder.svg'
import { BotonEliminar } from "../components/eliminar"

export const DetallesId = () => {
    const{id} = useParams()

    const [Perfil,setPerfil] = useState({})
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const obtenerPerfilId = async () =>{
            try{
                const res = await fetch('https://datum-q26q.onrender.com/api/usuarios/' + id)
                const data = await res.json()

                setPerfil(data.datos)

            }
            catch (err){
                console.log('Hubo un error')
            }
            finally{
                setLoading(false)
            }
        }
        obtenerPerfilId()
    }, [])

    if (loading){
        return(
            <div className="UserBox">
                <h1>Cargando...</h1>
            </div>
        )
    }
    
    return(
    <div className="UserBox">
        <Link to="/usuarios" className="back-button"> Volver</Link>
        <h1 className="HeaderPerfil">Perfil:</h1>
        <img src={profilePlaceholder} className="profileImg"></img>

        <ul>
            <li>ID: {id}</li>
            <li>Nombre: {Perfil.nombre}</li>
            <li>Correo: {Perfil.email}</li>
            <li className="Fecha">Fecha de Registro <br/>
            :{Perfil.fechaCreacion}</li>
            <li>{Perfil.activo ? 'Cuenta activa': 'Cuenta inactiva'}</li>
        </ul>

        <div className="EditarYBorrar">
            <Link to={'/usuario/editar/' + Perfil._id} className="back-button"> Editar</Link>
            <BotonEliminar id={id} />
        </div>
    </div>
    )
}
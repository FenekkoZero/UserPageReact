import { useEffect, useState } from "react";
import { Link } from "react-router";
import '../styles/Usuarios.css'

export const Usuarios = () => {

    {/* Aquí se crean las Profile Cards */}
    const [perfiles, setPerfiles] = useState([]) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const obtenerPerfiles= async () =>{
            try{
                const res = await fetch('https://datum-q26q.onrender.com/api/usuarios')

                const data = await res.json()
                setPerfiles(data.datos)
            }
            catch (err){
                console.log(err)
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        obtenerPerfiles()
    }, [])

    if(error){
        return <h1 style={{ color: 'red' }}>Hubo un error inesperado al obtener los usuarios</h1>
    }
    
    if(loading){
        return( 
        <div className="boxPerfiles">
            <h1> Cargando... </h1>
        </div>
        )
    }

    return<div className="boxPerfiles">  {/* Aquí se crean las Profile Cards */}
            {perfiles.map(user => (
                <div className="listaPerfiles">
                    <h3>{user.nombre}</h3> {/* Se llama al array de los datos de usuarios guardado en la API */}
                    <h4>{user.email}</h4>
                    <Link to ={'/usuario/' + user._id} className="linkPerfil">Ver Detalles</Link>
                </div>
            ))
            }
        </div>
}
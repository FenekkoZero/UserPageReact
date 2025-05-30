import '../styles/Inicio.css'
import { Link } from 'react-router'

export const Inicio = () => {
    return <div className="inicio"> 
        <h1>Inicio :D</h1>
        
        <Link to="/usuarios" className="link-button"> Ver Usuarios</Link>
        <Link to="/registro" className="link-button"> Crear Usuario</Link>
        </div>
}
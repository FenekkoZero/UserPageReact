import { useState } from "react"
import { useNavigate } from "react-router";
import '../styles/Registro.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Registro = () => {
    const navigate = useNavigate();



    const[User,setUser] = useState({
        nombre:'',
        email:'',
        activo:true,
        contraseña:'',
    })

    const [Exito, setExito] = useState('')

    function manejarCambio(evento){
        const { name, value } =evento.target
        setUser((prev) => ({
            ...prev,
            [name]:value
        })
    )
    }

    async function manejarEnvio(evento){
        evento.preventDefault()
        try{
            await fetch('https://datum-q26q.onrender.com/api/usuarios/crear', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(User)
        })
        }
        catch(err){
            console.log(err)
            toast.error('Error al enviar los datos');
        }
        finally {
            setExito(true)
            setUser({
                nombre:'',
                email:'',
                activo:true,
                contraseña:'',
            })
            toast.success('✅ Usuario creado correctamente!');
            
            // Redirige después de un breve retraso
            setTimeout(() => {
                navigate('/usuarios');
                }, 100); // esperar 100ms da tiempo al toast de montarse correctamente

            
        }
    }

    return (
        <div className="RegistroBox">
            <h1>Registro</h1>
                
                    <form className="RegistroForma" onSubmit={manejarEnvio}>
                    
                        <input type='text' placeholder="Nombre" name='nombre' value={User.nombre} onChange={manejarCambio}/>
                    
                        <input type='email' placeholder="Correo" name='email' value={User.email} onChange={manejarCambio}/>
                    
                        <input type='password' placeholder="Contraseña" name='contraseña' value={User.contraseña} onChange={manejarCambio}/>
                    
                        <button type="submit" className="BotonEnviar">Crear Cuenta</button>

                    </form>
                        
        </div>
    )
}
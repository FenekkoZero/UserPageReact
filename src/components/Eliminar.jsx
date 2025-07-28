import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const BotonEliminar = ({ id }) => {
    const navigate = useNavigate();

    const manejarBorrar = async () => {
        const confirmar = window.confirm("¿Deseas eliminar este usuario?");
        if (!confirmar) return;

        try {
            const res = await fetch('https://datum-q26q.onrender.com/api/usuarios/'+id, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Error al eliminar");

            toast.error('Usuario Eliminado');
            navigate("/usuarios");
        } catch (err) {
            console.error(err);
            toast.error('No se pudo eliminar el usuario');
        }
    };

    return <button onClick={manejarBorrar} className="back-button">Eliminar</button>;
};
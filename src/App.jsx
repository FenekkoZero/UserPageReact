import { BrowserRouter, Route, Routes } from "react-router"
import { Error404 } from "./pages/error404"
import { Inicio } from "./pages/Inicio"
import {Usuarios} from "./pages/Usuarios"
import {Nav} from "./components/nav"
import { DetallesId } from "./pages/userid"
import { Registro } from "./pages/Registro"
import { Editar } from "./pages/EditarPerfil"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter> {/* Aquí van las rutas a las cuales llama la API */}
      <Nav></Nav>
      <main style ={{ marginTop: "65px" }}>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/usuario/:id' element={<DetallesId />} />
        <Route path='/usuario/editar/:id' element={<Editar />} />
        <Route path='*' element={<Error404 />} />  
        {/* Error404 está contenido dentro de un bloque </> para pasarlo como un elemento jsx 
        debido a un cambio en la sintaxis; los elementos jsx se llaman de manera diferente desde React v17*/}
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
      </main>
    </BrowserRouter>
  )
}

export default App

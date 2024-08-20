import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
import ListarUsuarios from "./pages/lista"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/"element={<Cadastro />}/>
         <Route path="/Login"element={<Login />}/>
         <Route path="/listar-usuarios"element={<ListarUsuarios />}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App

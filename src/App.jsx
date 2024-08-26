import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
import ListarUsuarios from "./pages/lista"
import Dashboard from "./pages/dashboard"
function App() {

  return (
    <div className="h-[100vh] flex items-center justify-center bg-cover" style={{"backgroundImage": "url(../src/assets/imagemFundo.png)"}}>
    <BrowserRouter>
      <Routes>
         <Route path="/"element={<Login />}/>
         <Route path="/login"element={<Login />}/>
         <Route path="/cadastro"element={<Cadastro />}/>
         <Route path="/listar-usuarios"element={<ListarUsuarios />}/>
         <Route path="/dashboard"element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
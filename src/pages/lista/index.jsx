import {useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


function ListarUsuarios() {
    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState()
    useEffect(() => {
        async function loadUsers() {
            
            const token = localStorage.getItem('token');
            
            // trava acesso a pagina
            if (!token){
                alert('Você precisa estar logado para acessar essa rota!')
                navigate("/ ")
                return;
            }
            const {
                data: { users },
            } = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}` },
            })

            setAllUsers(users)
        }

        loadUsers()

    }, [])

    return (
        <div>
            <h2>Listar Usuarios</h2>
            {/* <ul>
                {allUsers.map(user => (
                    <li>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}

            </ul> */}
        </div>
    );
}

export default ListarUsuarios;
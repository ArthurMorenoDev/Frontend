import {useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";





function dashboard() {

    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState()
    useEffect(() => {
        async function loadUsers() {
            
            const token = localStorage.getItem('token');
            


            
            
            // if (!token){
            //     alert('Faça login para acessar essa pagina')
            //     navigate("/ ")
            //     return;
            // }
            const {
                data: { users },
            } = await api.get('/dashboard', {
                headers: { Authorization: `Bearer ${token}` },
            })


            setAllUsers(users)
        }

        loadUsers()

    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
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

export default dashboard;

import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"

function login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data: token } = await api.post('/login', {

                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token)
            console.log(token)

            navigate('/dashboard')

        } catch (err) {
            alert("Senha ou Email incorretos")
        }
    }

    return (

        <div>
            <div className="flex justify-center ">
                <img src="../src/assets/logo.PNG" className=" h-36 w-42 pb-3 "></img>
            </div>
            <div className="bg-slate-400 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Login</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="relative my-4">
                        <input ref={emailRef} placeholder="" type="email" className="w-72 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <label htmlFor="" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seu email</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input ref={passwordRef} placeholder="" type="password" className="w-72 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <label htmlFor="" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sua Senha</label>
                    </div>

                    <div>
                        <button className="w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300" type="submit">Login</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default login
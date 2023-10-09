import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/SignUp");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if(!username || !password) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            });
            
        } else {
            axios.post('http://localhost:8080/api/auth/database_login', null, {params:{username: username, password: password}})
            .then(res => {
                if(res.data.length == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'El usuario no está registrado',
                        text: 'Por favor registra primero tu cuenta.',
                    });
                   
                } else {
                    if(password !== res.data[0].contrasena) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Contraseña incorrecta',
                            text: 'Por favor verifica nuevamente tu contraseña',
                        });
                    } else{
                        const role = res.data["role"]
                        console.log(res.data["role"]);
         
                        if(role == "R_Cliente") {
                            sessionStorage.setItem("role", "Cliente");
                        } else if(role == "R_Artista") {
                            sessionStorage.setItem("role", "Artista");
                        } else {
                            sessionStorage.setItem("role", "Admin");
                        }
        
                        Swal.fire({
                            icon: 'success',
                            title: `Bienvenid@ ${username}` ,
                        });
        
                        navigate("/Home", {
                            replace: ("/LogIn", true)
                        });
                    }
                }

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al ingresar',
                })

                console.log(err);  
            })
        }
    }

    return (
       <main className="container flex justify-center mx-auto mt-36 2xl:mt-48">
            <article id="userSign" className={`w-3/5 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-gradient-to-b 
            from-lightBlue to-darkBlue `}>
                <h1 id="appTitle" className="mt-10 mb-16 text-white font-extrabold font-title text-4xl text-center">EstampasExpress</h1>

                <form id="userSignIn-form" className="mt-6">
                    <div id="form-username" className="flex justify-center">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" placeholder="Usuario" value={username} required
                            className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={password} required
                            className="w-3/4 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <section className="flex justify-center pb-10 mx-10 mt-12">
                        <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
                        className={`w-1/2 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>

                    <div id="form-createAccount" className="flex justify-center mb-4 text-slate-200">
                        <p id="text-createAccount" className="font-title text-sm"> ¿Aún no tienes cuenta? </p>
                        <button type="button" id="button-createAccount" onClick={handleChangePage} 
                        className="ml-2 font-title font-medium hover:font-semibold text-sm"> Crea una </button>
                    </div>
                </form>
            </article> 
        </main>
    )
}

export default LogIn;
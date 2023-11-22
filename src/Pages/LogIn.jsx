import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/SignUp");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if(!username || !password || !role) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            });
            
        } else {
            axios.get('http://127.0.0.1:8000/api/login', {params:{usuario: username, contrasena: password, rol: role}})
            .then(res => {
                if(res.data.mensaje != "Login exitoso.") {
                    Swal.fire({
                        icon: 'error',
                        title: res.data,
                    });
                } else {
                    let usuario = {
                        tipoID: "",
                        numID: "",
                        username: username,
                        role: ""
                    }

                    if(role == "cliente") {
                        usuario.role = "cliente";
                    } else if(role == "artista") {
                        usuario.role = "artista";
                    } else {
                        usuario.role = "admin";
                    }

                    // Obtener tipoID y numID
                    axios.get('http://127.0.0.1:8000/api/usuarioID', {params:{usuario: username}})
                    .then(res => {
                        usuario.tipoID = res.data.tipoid;
                        usuario.numID = res.data.numid;

                        //Login exitoso
                        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        
                        Swal.fire({
                            icon: 'success',
                            title: `Bienvenid@ ${username}` ,
                        });
        
                        navigate("/Home", {
                            replace: ("/LogIn", true)
                        });
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al ingresar',
                        })
        
                        console.log(err); 
                    })
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
            from-lightBlue to-darkBlue animate-fade-down animate-once animate-ease-out`}>
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
                            className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div id="form-role" className="flex justify-center">
                            <label htmlFor="role"></label>
                            <select name="role" id="role" value={role} className="w-3/4 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title" 
                            onChange={(e) => setRole(e.target.value)} required>
                                <option value="" disabled hidden> Rol </option>
                                <option value="cliente">Cliente</option>
                                <option value="artista">Artista</option>
                                <option value="admin">Admin</option>
                            </select> 
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
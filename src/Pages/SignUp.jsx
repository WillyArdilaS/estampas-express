import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const SignUp = () => {
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState("");    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [genre, setGenre] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/LogIn");
    }

    const handleCreateUser = (e) => {
        e.preventDefault();

        if(!username || !lastName || !username || !email || !password || !passwordConfirmation) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            })
        } else if(password != passwordConfirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
            })
        } else {
            axios.post('http://127.0.0.1:8000/api/register/', {
                tipoID: idType, 
                numeroID: Number(idNumber),
                nombre: name,
                apellido: lastName,
                genero: genre,
                rol: role,
                correo: email,
                usuario: username,
                contrasenia: password  
            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: `Usuario creado con éxito` ,
                });

                setIdType("");
                setIdNumber("");
                setName("");
                setLastName("")
                setGenre("");
                setRole("");
                setEmail("");
                setUsername("");
                setPassword("");
                setPasswordConfirmation("");
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al crear el usuario',
                })

                console.log(err)
            });
        }
    }

    return (
        <main className="container flex justify-center mx-auto mt-12">
            <article id="userRegister" className="w-2/5 2xl:w-1/3 absolute rounded-2xl bg-gradient-to-b from-lightBlue to-darkBlue">
                <h1 id="appTitle" className="mt-10 mb-16 text-white font-extrabold font-title text-4xl text-center">EstampasExpress</h1>
                
                <form action="" id="userRegister-form" className="mt-6">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-idType">
                            <label htmlFor="idType"></label>
                            <select name="idType" id="idType" value={idType} className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
                            font-medium font-title placeholder-slate-400" onChange={(e) => setIdType(e.target.value)} required>
                                <option value="" disabled hidden> Tipo ID </option>
                                <option value="CC">C.C</option>
                                <option value="CE">C.E</option>
                            </select> 
                        </div>

                        <div id="form-idNumber">
                            <label htmlFor="idNumber"></label>
                            <input type="text" name="idNumber" id="idNumber" value={idNumber} placeholder="Número ID" className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 px-3 py-2 
                            rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setIdNumber(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" value={name} placeholder="Nombre" className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 px-3 py-2 rounded-md bg-white 
                            shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setName(e.target.value)} required/>
                        </div>

                        <div id="form-lastName">
                            <label htmlFor="lastName"></label>
                            <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Apellido" className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-genre" className="w-full">
                            <fieldset value={genre} className="flex justify-around mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title 
                            placeholder-slate-400" onChange={(e) => setGenre(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="M" className="mr-2"> Hombre </label>
                                    <input type="radio" name="genre" id="male" value="M" />
                                </div>

                                <div  className="flex">
                                    <label htmlFor="F" className="mr-2"> Mujer </label>
                                    <input type="radio" name="genre" id="female" value="F"/>
                                </div>

                                <div  className="flex">
                                    <label htmlFor="O" className="mr-2"> Otro </label>
                                    <input type="radio" name="genre" id="other" value="O"/>
                                </div>
                            </fieldset>
                        </div>
                    </div>          
                    
                    <div className="w-4/5 flex justify-between mx-auto">    
                        <div id="form-typePosition" className="w-full">
                            <label htmlFor="typePosition"></label>
                            <fieldset value={role} className="flex justify-around mb-6 px-3 py-2 bg-white shadow-md rounded-md  
                                    text-black font-medium font-title placeholder-slate-400" onChange={(e) => setRole(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="Client" className="mr-2">Cliente</label>
                                    <input type="radio" name="typePosition" id="begginer" value="BEGGINER" />
                                </div>

                                <div className="flex">
                                    <label htmlFor="Artist" className="mr-2">Artista</label>
                                    <input type="radio" name="typePosition" id="junior" value="JUNIOR" />
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" value={email} placeholder="Correo electrónico" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div id="form-username" className="flex justify-center">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" value={username} placeholder="Nombre de usuario" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                
                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" value={password} placeholder="Contraseña" className="w-4/5 mb-6 px-3 py-2 rounded-md 
                        bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div id="form-confirmPassword" className="flex justify-center">
                        <label htmlFor="confirmPassword"></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" value={passwordConfirmation} placeholder="Confirmar contraseña" className="w-4/5 px-3 
                        py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                        onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
                    </div>

                    <section className="flex justify-center pb-10 mt-12">
                        <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                        className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold 
                        font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>

                    <div id="form-login" className="flex justify-center mb-4 text-slate-200">
                        <p id="text-login" className="font-title text-sm"> ¿Ya tienes una cuenta? </p>
                        <button type="button" id="button-login" onClick={handleChangePage} 
                        className="ml-2 font-title font-medium hover:font-semibold text-sm"> Inicia sesión </button>
                    </div>
                </form>
            </article>
        </main>
    )
}

export default SignUp
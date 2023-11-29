import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import LateralMenu from "../components/LateralMenu"

const NewPrint = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [subject, setSubject] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [cloudinaryUrl, setCloudinaryUrl] = useState();

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Subir la imagen a Cloudinary
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'EstampasExpress');

        axios.post('https://api.cloudinary.com/v1_1/willyas/image/upload', formData)
            .then(response => {
                setCloudinaryUrl(response.data.secure_url);
            })
            .catch(error => {
                console.error('Error al subir la imagen a Cloudinary:', error);
            });
    };

    const handleUpdate = () => {
        if(!name || !description || !cloudinaryUrl || !subject || !price) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            })
        } else {
            axios.post('http://127.0.0.1:8000/api/nuevaEstampa/', null, {params: {
                nombre: name, 
                descripcion: description,
                imgurl: cloudinaryUrl,
                tema: subject,
                precio: price,
                tipoidartista: usuario.tipoID,
                numidartista: usuario.numID
            }})
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Estampa creada'
                });
            }) 
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <div className="relative h-screen">
                <LateralMenu />  

                <section className="fixed w-10/12 h-screen right-0">
                    <section className="flex justify-between h-full">
                        <article className="flex flex-col h-full w-2/5">
                            <img src={cloudinaryUrl} alt="Imagen de la camiseta" id="tshirtImage" width="400" 
                            className='mx-auto mt-12 p-8 bg-white shadow-md rounded-md animate-fade-down animate-once animate-ease-out'/>

                            <input type="file" accept="image/*" className="mx-auto mt-12 p-2 bg-white shadow-md rounded-md animate-fade-down animate-once animate-ease-out"
                            onChange={handleImageChange} />
                        </article>

                        <section id="details" className="flex h-full w-3/5 pt-20 pl-12">
                            <section id="print-details" className="flex flex-col w-3/5 animate-fade-down animate-once animate-ease-out">
                                <div id="details-printName" className="flex items-center ">
                                    <h3 className="text-lg text-black font-title font-semibold"> Estampa: </h3>
                                    <input type="text" name="printName" id="printName" className="ml-4 px-3 py-1 text-black font-paragraph shadow-md rounded-md
                                    border-black border-x-2 border-y-2 bg-white" value={name} 
                                    onChange={(e) => setName(e.target.value)} required/>
                                    
                                </div>
                                            
                                <div id="details-printDescription" className="flex  mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Descripción: </h3>
                                    <textarea name="printDescription" id="printDescription" className="ml-4 px-3 py-1 text-black font-paragraph shadow-md rounded-md 
                                    border-black border-x-2 border-y-2 bg-white" value={description}
                                    onChange={(e) => setDescription(e.target.value)} required/>
                                </div>
                                            
                                <div id="details-printSubject" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Tema: </h3>
                                    <input type="text" name="printSubject" id="printSubject" className="ml-4 px-3 py-1 text-black font-paragraph shadow-md rounded-md 
                                    border-black border-x-2 border-y-2 bg-white" value={subject}
                                    onChange={(e) => setSubject(e.target.value)} required/>
                                </div>
                                                
                                                
                                <div id="details-printPrice" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio: </h3>
                                    <input type="number" name="printPrice" id="printPrice" min={0} className="w-1/3 ml-4 px-3 py-1 rounded-md text-black font-paragraph
                                    bg-white shadow-md border-black border-x-2 border-y-2" value={price}
                                    onChange={(e) => setPrice(e.target.value)} required/>
                                </div>             

                                <button type="button" id="button-addPrint" className="w-48 inline-flex justify-center items-center mt-10 ml-16 px-5 py-3 bg-yellow shadow-md
                                text-white font-subtitle font-medium text-md text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white 
                                hover:text-yellow transition-colors" onClick={handleUpdate}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="mr-2 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                Crear estampa</button>  
                            </section>
                        </section>
                    </section>
                </section>
            </div>    
        </>
    )
}

export default NewPrint
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import LateralMenu from "../components/LateralMenu"
import { useCartContext } from '../context/CartContext'

const TshirtDetail = () => {
    const [prints, setPrints] = useState([]);
    const [printSelected, setPrintSelected] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState();
    const tshirt = JSON.parse(sessionStorage.getItem("camiseta"));

    const {addProduct} = useCartContext();

    useEffect(() => {
        setTotalPrice(tshirt.informacion.precio);
        setPrints([]);

        axios.get("http://127.0.0.1:8000/api/estampas")
        .then((res) => {
            res.data.map(item=>{
                setPrints(element => [...element, item]);
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
        if(printSelected != null) {
            setTotalPrice((parseInt(tshirt.informacion.precio) + parseInt(printSelected.informacionEstampa.precio)) * quantity);
        }
    }, [printSelected, quantity])
    
    const handleAddPrint = (print) => {
        if(printSelected === print) {
            setPrintSelected(null);
        } else {
            setPrintSelected(print);
        }
    }

    const handleAddProduct = () => {
        if(printSelected != null) {
            if(quantity != 0) {
                if(quantity <= tshirt.cantcamiseta) {
                    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
                    const idFactura = Math.floor(Math.random() * 1000);
            
                    const product = {
                        idfactura: idFactura,
                        tipoidcliente: usuario.tipoID,
                        numidcliente: usuario.numID,
                        idcatcamiseta: tshirt.idcatcamiseta,
                        idcamiseta: tshirt.informacion.idcamiseta,
                        idestampa: printSelected.informacionEstampa.idestampa,
                        camisetaimg: tshirt.informacion.imgurl,
                        estampaimg: printSelected.informacionEstampa.imgurl,
                        precioestampa: printSelected.informacionEstampa.precio,
                        tipoidartista: printSelected.informacionEstampa.tipoidartista_id,
                        numidartista: printSelected.informacionEstampa.numidartista,
                        talla: tshirt.informacion.talla,
                        precio: totalPrice,
                        cantidad: quantity
                    }
            
                    addProduct(product);
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: `Solo hay ${tshirt.cantcamiseta} camisetas disponibles`
                    });
                }
            } else {
                Swal.fire({
                    icon: 'info',
                    title: `No ha seleccionado la cantidad de camisetas`
                });
            }
        } else {
            Swal.fire({
                icon: 'info',
                title: `No ha seleccionado ninguna estampa`
            });
        }
    }

    return (
        <>
            <div className="relative h-screen">
                <LateralMenu />  

                <section className="fixed w-10/12 h-screen right-0">
                    <section className="flex justify-between h-2/3">
                        <article id={tshirt.informacion.idcamiseta} className="h-full w-2/5">
                            <img src={tshirt.informacion.imgurl} alt="Imagen de la camiseta" id="tshirtImage" width="400" 
                            className='mx-auto mt-12 p-8 bg-white shadow-md rounded-md animate-fade-down animate-once animate-ease-out'/>

                            {printSelected && (
                                <img src={printSelected.informacionEstampa.imgurl}
                                alt={printSelected.informacionEstampa.descripcion} id={printSelected.informacionEstampa.idestampa} width="160" 
                                className="absolute top-48 left-60 opacity-90 rounded-md" />
                            )}
                        </article>

                        <section id="tshirt-details" className="flex h-full w-3/5 pt-20 pl-6">
                            <section className="flex flex-col w-2/5 animate-fade-down animate-once animate-ease-out animate-delay-[500ms]">
                                <div id="details-size" className="flex items-center">
                                    <h3 className="text-lg text-black font-title font-semibold"> Talla: </h3>
                                    <h3 className="ml-4 text-black font-title"> {tshirt.informacion.talla} </h3> 
                                </div>
                                
                                <div id="details-color" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Color: </h3>
                                    <h3 className="ml-4 text-black font-title"> {tshirt.informacion.color} </h3> 
                                </div>
                                
                                <div id="details-material" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Material: </h3>
                                    <h3 className="ml-4 text-black font-title"> {tshirt.informacion.material} </h3> 
                                </div>
                                
                                <div id="details-basePrice" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio base: </h3>
                                    <h3 className="ml-4 text-black font-title"> {"$" + tshirt.informacion.precio} </h3> 
                                </div>
                                
                                <div id="details-totalPrice" className="flex items-center mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio total: </h3>
                                    <h3 className="ml-4 text-black font-title"> {`$ ${(totalPrice)}`} </h3> 
                                </div>

                                <div id="details-quantity" className="flex items-center mt-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 
                                    2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 
                                    2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/></svg>
                                    <input type="number" name="quantity" id="quantity" placeholder="Cantidad" min={0} className="w-2/5 ml-1 px-2 py-2 rounded-md 
                                    bg-white shadow-md text-black font-medium font-paragraph text-xs placeholder-slate-400 border-black border-x-2 border-y-2" 
                                    onChange={(e) => setQuantity(Number(e.target.value))}required/>
                                </div>

                                <button id="button-addProduct" className="w-48 inline-flex justify-center items-center mt-12 px-5 py-3 bg-yellow shadow-md text-white 
                                font-subtitle font-medium text-sm text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white hover:text-yellow 
                                transition-colors" onClick={handleAddProduct}>
                                    <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 
                                    11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 
                                    16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                Agregar al carrito </button>  
                            </section>
                            
                            {printSelected != null ? (
                                    <section id="print-details" className="flex flex-col w-2/5 animate-fade-down animate-once animate-ease-out">
                                        <div id="details-printName" className="flex items-center">
                                            <h3 className="text-lg text-black font-title font-semibold"> Estampa: </h3>
                                            <h3 className="ml-4 text-black font-title"> {printSelected.informacionEstampa.nombre} </h3> 
                                        </div>
                                        
                                        <div id="details-printDescription" className="flex  mt-8">
                                            <h3 className="text-lg text-black font-title font-semibold"> Descripción: </h3>
                                            <h3 className="ml-4 text-black font-title"> {printSelected.informacionEstampa.descripcion} </h3> 
                                        </div>
                                        
                                        <div id="details-printSubject" className="flex items-center mt-8">
                                            <h3 className="text-lg text-black font-title font-semibold"> Tema: </h3>
                                            <h3 className="ml-4 text-black font-title"> {printSelected.informacionEstampa.tema} </h3> 
                                        </div>
                                        
                                        <div id="details-printArtist" className="flex items-center mt-8">
                                            <h3 className="text-lg text-black font-title font-semibold"> Artista: </h3>
                                            <h3 className="ml-4 text-black font-title"> {`${printSelected.nombre_artista} ${printSelected.apellido_artista} 
                                            (${printSelected.usuario_artista})`} </h3> 
                                        </div>
                                        
                                        <div id="details-printPrice" className="flex items-center mt-8">
                                            <h3 className="text-lg text-black font-title font-semibold"> Precio estampa: </h3>
                                            <h3 className="ml-4 text-black font-title"> {"$" + printSelected.informacionEstampa.precio} </h3> 
                                        </div>
                                    </section>

                                ) : false}
                        </section>
                    </section>
                </section>

                <section className="fixed w-10/12 h-1/3 bottom-0 right-0 overflow-x-auto bg-gray">
                    <article className="flex justify-evenly w-max px-6 animate-fade-down animate-once animate-ease-out animate-delay-[1000ms]">
                        {prints.map(print => (
                            <button id="button-print" onClick={() => handleAddPrint(print)} key={print.informacionEstampa.idestampa}>
                                <img src={print.informacionEstampa.imgurl}
                                alt={print.informacionEstampa.descripcion} id={print.informacionEstampa.idestampa} width="180" className="mt-10 mx-6 rounded-md hover:scale-105" />
                            </button>
                        ))}
                    </article>
                </section>
            </div>    
        </>
    )
}

export default TshirtDetail
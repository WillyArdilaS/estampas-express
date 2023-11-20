import { useState } from "react";
import LateralMenu from "../components/LateralMenu"

const TshirtDetail = () => {
    const [quantity, setQuantity] = useState(0)
    const [isPrintImageVisible, setIsPrintImageVisible] = useState(false);

    const handlePrintButtonClick = () => {
        setIsPrintImageVisible(!isPrintImageVisible);
    };

    return (
        <>
            <div className="relative h-screen">
                <LateralMenu />  

                <section className="fixed w-10/12 h-screen right-0">
                    <section className="flex justify-between h-2/3">
                        <article className="h-full w-2/5">
                            <img src="https://cdn-images.farfetch-contents.com/18/23/89/28/18238928_38920521_1000.jpg" alt="Imagen de la camiseta" id="tshirtImage" width="400" className='mx-auto mt-12 p-8 bg-white shadow-md rounded-md'/>

                            {isPrintImageVisible && (
                                <img src="https://marketplace.canva.com/EAFYEy5X84M/1/0/622w/canva-black-orange-yellow-modern-born-to-play-basketball-t-shirt-bVJiw4t5P4A.jpg" 
                                alt="Imagen de la estampa" id="printImageOverlay" width="250" className="absolute top-36 left-48 rounded-md opacity-60" />
                            )}
                        </article>

                        <section id="tshirt-details" className="flex h-full w-3/5 pt-20 pl-6">
                            <section className="flex flex-col w-2/5">
                                <div id="details-size" className="flex">
                                    <h3 className="text-lg text-black font-title font-semibold"> Talla: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> S </h3> 
                                </div>
                                
                                <div id="details-color" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Color: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> Azul </h3> 
                                </div>
                                
                                <div id="details-material" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Material: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> Algodon </h3> 
                                </div>
                                
                                <div id="details-basePrice" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio base: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> $12.500 </h3> 
                                </div>
                                
                                <div id="details-totalPrice" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio total: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> $22.500 </h3> 
                                </div>

                                <div id="details-quantity" className="flex items-center mt-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 
                                    2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 
                                    2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/></svg>
                                    <input type="number" name="quantity" id="quantity" value={quantity} placeholder="Cantidad" min={0} className="w-1/3 ml-1 px-2 py-2 rounded-md 
                                    bg-white shadow-md text-black font-medium font-paragraph text-xs placeholder-slate-400 border-black border-x-2 border-y-2" 
                                    onChange={(e) => setQuantity(Number(e.target.value))}required/>
                                </div>

                                <button id="button-addProduct" className="w-48 inline-flex justify-center items-center mt-12 px-5 py-3 bg-yellow shadow-md text-white 
                                font-subtitle font-medium text-sm text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white hover:text-yellow transition-colors">
                                    <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 
                                    11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 
                                    16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                Agregar al carrito </button>  
                            </section>
                            
                            <section id="print-details" className="flex flex-col w-2/5">
                                <div id="details-printName" className="flex">
                                    <h3 className="text-lg text-black font-title font-semibold"> Estampa: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> Estampa A </h3> 
                                </div>
                                
                                <div id="details-printDescription" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Descripción: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> Esta es una estampa con un hermoso paisaje de montaña. </h3> 
                                </div>
                                
                                <div id="details-printSubject" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Tema: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> Naturaleza </h3> 
                                </div>
                                
                                <div id="details-printPrice" className="flex mt-8">
                                    <h3 className="text-lg text-black font-title font-semibold"> Precio estampa: </h3>
                                    <h3 className="ml-4 text-lg text-black font-title"> $10.000 </h3> 
                                </div>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="fixed w-10/12 h-1/3 bottom-0 right-0 overflow-x-auto bg-gray">
                    <article className="flex justify-evenly w-max px-6">
                        <button id="button-print" onClick={handlePrintButtonClick}>
                            <img src="https://marketplace.canva.com/EAFLjIhFSxY/1/0/622w/canva-black-brush-style-inspirational-quote-t-shirt-cOLS_Ee0Kys.jpg" alt="Imagen de la estampa" id="printImage" width="180" className="mt-10 mx-6 rounded-md" />
                        </button>
                        <button id="button-print" onClick={handlePrintButtonClick}>
                            <img src="https://marketplace.canva.com/EAFYEy5X84M/1/0/622w/canva-black-orange-yellow-modern-born-to-play-basketball-t-shirt-bVJiw4t5P4A.jpg" alt="Imagen de la estampa" id="printImage" width="180" className="mt-10 mx-6 rounded-md" />
                        </button>
                    </article>
                </section>
            </div>    
        </>
    )
}

export default TshirtDetail
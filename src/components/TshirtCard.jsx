import { useNavigate } from 'react-router-dom'

const TshirtCard = ({tshirt}) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        sessionStorage.setItem("camiseta", JSON.stringify(tshirt));

        navigate("/TShirtDetails");
    }

    return (
        
        <article id="tshirtCard" className="w-2/3 flex flex-col items-center mx-auto mb-24 px-6 bg-white shadow-md rounded-md animate-fade-down animate-once 
        animate-ease-out">
            <img src={tshirt.informacion.imgurl} alt="Imagen de la camiseta" id="tshirtImage" width="150" className='mt-4'/>

            <div id="tshirtCard-details" className="flex flex-col justify-between items-center mt-4">
                <div id="details-size" className="flex items-center">
                    <h3 className="ml-1 text-sm text-center text-black font-paragraph font-semibold"> Talla: </h3>
                    <h3 className="ml-1 mr-5 text-sm text-center text-black font-paragraph"> {tshirt.informacion.talla} </h3> 
                </div>

                <div id="details-quantity" className="flex items-center mt-1">
                    <h3 className="ml-1 text-sm text-center text-black font-paragraph font-semibold"> Cantidad disponible: </h3>
                    <h3 className="ml-1 mr-5 text-sm text-center text-black font-paragraph"> {tshirt.cantcamiseta} </h3> 
                </div>

                <div id="details-price" className="flex items-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 
                    12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <h3 className="ml-1 text-sm text-center text-black font-paragraph"> {tshirt.informacion.precio} </h3>
                </div> 
            </div>  
            
            <button type="button" id="button-addPrint" className="w-48 inline-flex justify-center items-center -mb-6 mt-4 px-5 py-3 bg-yellow shadow-md text-white 
            font-subtitle font-medium text-sm text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white hover:text-yellow transition-colors" 
            onClick={handleViewDetails}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 -ml-1 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 
                008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 
                004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>

            Editar diseño </button>   
        </article>
    )
}

export default TshirtCard
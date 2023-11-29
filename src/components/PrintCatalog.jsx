import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import PrintCard from "./PrintCard"

const PrintCatalog = ({usuario}) => {
  const navigate = useNavigate();
  const [prints, setPrints] = useState([]);

  const handleCreate = () => {
    sessionStorage.setItem("estampa", JSON.stringify(print));

    navigate("/NewPrint");
  }


  useEffect(() => {
    setPrints([]);

    axios.get("http://127.0.0.1:8000/api/estampasArtista/", {params:{tipoidartista: usuario.tipoID, numidartista: usuario.numID}})
    .then((res) => {
        res.data.map(item=>{
            setPrints(element => [...element, item]);
        })
    })
    .catch((err) => {
        console.log(err)
    })
  }, [])

  return (
    <article className="flex flex-col fixed w-10/12 h-screen right-0 px-12 overflow-y-auto">
      <section className="flex flex-wrap mt-24">
        {prints.map((print) => (
          <div key={print.informacionEstampa.idestampa} className="flex-shrink w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <PrintCard print={print} />
          </div>
        ))}
      </section>
  
      <div className="mx-auto my-6">
        <button type="button" id="button-addPrint" className="w-52 inline-flex justify-center items-center px-5 py-4 bg-yellow shadow-md text-white 
        font-subtitle font-medium text-md text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white hover:text-yellow transition-colors"
        onClick={handleCreate}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="mr-2 -ml-1 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        Crear estampa </button>
      </div>
    </article>
  );
}

export default PrintCatalog
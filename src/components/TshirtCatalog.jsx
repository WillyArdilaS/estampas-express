import TshirtCard from "./TshirtCard"
import { useState, useEffect } from "react";
import axios from "axios";
import tshirtsdata from '../data (temp)/tshirtsdata.json'

const TShirtCatalog = () => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    setTshirts([])

    axios.get("")
    .then((res) => {
        res.data.map(item=>{
            setTshirts(element => [...element, item]);
        })
    })
    .catch((err) => {
        console.log(err)
    })
  }, [])

  return (
    <article className="fixed w-10/12 h-screen right-0 px-12 overflow-y-auto">
      <section className="grid grid-cols-3 2xl:grid-cols-4 h-fit mt-24 ">
        {
          tshirtsdata.map(tshirt => ( {/*Reemplazar el json de prueba por los datos de la BD*/},
            <TshirtCard key={tshirt.id} info={tshirt} />
          ))
        }
      </section>
    </article>
  )
}

export default TShirtCatalog
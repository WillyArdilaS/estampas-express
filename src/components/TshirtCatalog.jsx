import { useState, useEffect } from "react";
import axios from "axios";
import TshirtCard from "./TshirtCard"

const TShirtCatalog = () => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    setTshirts([])

    axios.get("http://127.0.0.1:8000/api/camisetas")
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
          tshirts.map(tshirt => (
            <TshirtCard key={tshirt.idcatcamiseta} tshirt={tshirt} />
          ))
        }
      </section>
    </article>
  )
}

export default TShirtCatalog
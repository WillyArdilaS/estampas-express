import LateralMenu from "../components/LateralMenu"
import TShirtCatalog from "../components/TshirtCatalog"

const Home = () => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu />  
            <TShirtCatalog />
        </div>    
    </>
  )
}

export default Home
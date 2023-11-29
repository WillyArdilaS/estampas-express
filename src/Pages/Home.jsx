import LateralMenu from "../components/LateralMenu"
import PrintCatalog from "../components/PrintCatalog";
import TShirtCatalog from "../components/TshirtCatalog"

const Home = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  
  const renderHome = () => {
    if(usuario.role == "cliente") {
        return (<TShirtCatalog />)        
    } else  if(usuario.role == "artista") {
      return (<PrintCatalog usuario={usuario} />)
    }
  }


  return (
    <>
        <div className="relative h-screen">
            <LateralMenu /> 
            {
              renderHome()
            }
        </div>    
    </>
  )
}

export default Home
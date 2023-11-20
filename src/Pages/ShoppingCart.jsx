import LateralMenu from "../components/LateralMenu"
import ShoppingCartContainer from "../components/ShoppingCartContainer";

const ShoppingCart = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            <ShoppingCartContainer/>
        </div>
    </>
  )
}

export default ShoppingCart
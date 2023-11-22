import { useCartContext } from '../context/CartContext'

const ShoppingCartItem = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <tr className="border-b-2 border-yellow text-black text-center text-base font-semibold font-paragraph animate-fade-down animate-once animate-ease-out">
            <td className="pl-12">
                <img src={product.camisetaimg} alt="Imagen de camiseta" className='object-cover' width="120" />
            </td>

            <td className="pl-12">
                <img src={product.estampaimg} alt="Imagen de estampa" className='rounded-md object-cover' width="120"/>
            </td>

            <td>
                {product.talla}
            </td>

            <td>
                {product.cantidad}
            </td>
            
            <td>
                ${product.precio}
            </td>
            <td className='flex justify-center py-16'> 
                <button className="flex justify-center w-3/4 2xl:w-3/5 px-2 py-3 bg-yellow border-yellow border-x-2 border-y-2 rounded-lg shadow-md text-base font-title 
                hover:bg-transparent transition-colors" onClick={() => removeProduct(product.idfactura)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Remover </button>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;
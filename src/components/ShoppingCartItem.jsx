const ShoppingCartItem = ({ product }) => {
    return (
        <tr className="border-b-2 border-yellow text-black text-center text-base font-semibold font-paragraph">
            <td className="px-6 py-4">
                <img src={product.imgurl} alt="" className='rounded-2xl object-cover h-25 w-80'/>
            </td>
            <td>
                {product.talla}
            </td>
            <td>
                 ${product.precio}
            </td>
            <td>
                {product.cantdisponible}
            </td>
            <td>
                {product.cantdisponible*product.inventario.precio}
            </td>
            <td className='flex justify-center py-16'> 
                <button className="flex justify-center w-3/4 2xl:w-3/5 px-2 py-3 bg-yellow border-yellow border-x-2 border-y-2 rounded-lg shadow-md text-base font-title 
                hover:bg-transparent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Remover </button>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;
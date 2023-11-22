import { useEffect } from 'react';
import { useCartContext } from '../context/CartContext'
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartContainer = () => {
    const {cart, total, confirmPurchase, cancelPurchase} = useCartContext();

    if(cart.length !== 0){
        return(
            <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto">
                <table className="w-11/12 mt-14 mx-auto overflow-x-auto">
                    <thead>
                        <tr className="bg-yellow text-white text-lg font-title text-center">

                            <th className="w-1/6 min-w-[160px] px-3 py-4">
                                Camiseta
                            </th>

                            <th className="w-1/6 min-w-[160px] px-3 py-4">
                                Estampa
                            </th>
                            
                            <th className="w-1/6 min-w-[160px] px-3 py-4">
                                Talla
                            </th>

                            <th className="w-1/6 min-w-[160px] px-3 py-4">
                                Cantidad
                            </th>

                            <th className="w-1/6 min-w-[160px] px-3 py-4">
                                Precio total
                            </th>
                            <th ></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cart.map(product => <ShoppingCartItem key={product.idfactura} product={product} />)
                        }

                        <tr className="text-right animate-fade-down animate-once animate-ease-out animate-delay-500">
                            <td colSpan="4">
                                <section className="flex justify-start px-6 py-5">
                                    <div className="flex flex-col justify-center items-center ">
                                        <button type="button" className="inline-flex items-center px-4 py-3 bg-darkGreen border-darkGreen border-x-2 border-y-2 rounded-lg shadow-md 
                                        text-white font-medium text-base font-title text-center hover:bg-transparent hover:text-darkGreen transition-colors" 
                                        onClick={confirmPurchase}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 
                                                002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg>
                                        Confirmar </button>
                                    </div>

                                    <div className="flex flex-col justify-center items-center  ml-16">
                                        <button type="button" className="inline-flex items-center px-4 py-3 bg-red border-red border-x-2 border-y-2 rounded-lg shadow-md 
                                        text-white font-medium text-base font-title text-center hover:bg-transparent hover:text-red transition-colors" onClick={cancelPurchase}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 
                                                0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 
                                                003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 
                                                2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"/></svg>
                                        Cancelar compra </button>
                                    </div>
                                </section>
                            </td>

                            <td className="flex items-center justify-center h-32 px-3 py-4 text-base font-semibold font-paragraph text-black text-center"> ${total}</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        )
    }

    return (
        <>
            <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto animate-fade-down animate-once animate-ease-out">
                <div className={`flex items-center justify-center mt-12 px-10 py-5 bg-yellow text-white text-lg font-medium font-subtitle rounded-md shadow-md`} role="alert">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 
                    2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 
                    0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 
                    2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                    <p> No has agregado ningún producto a tu carrito </p>
                </div>
            </article>
        </>
    )
}

export default ShoppingCartContainer
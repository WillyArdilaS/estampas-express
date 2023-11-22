import React, { useState,useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addProduct = (item)=>{
        if(item.cantidad > 0) {
            setCart(element => [...element,item])
            Swal.fire({
                icon: 'success',
                title: `Producto agregado al carrito`
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No se ha podido agregar el producto'
            })
        }
    }

    const removeProduct = (id) =>{
        const updatedCart = cart.filter(item => item.idfactura !== id);
        setCart(updatedCart);
    }

    const confirmPurchase = () => {
        const promises = cart.map(item => {
            return axios.post('http://127.0.0.1:8000/api/factura/', null, {
                params: {
                    idfactura: item.idfactura,
                    tipoidcliente: item.tipoidcliente,
                    numidcliente: item.numidcliente,
                    idcamiseta: item.idcamiseta,
                    idestampa: item.idestampa,
                    preciototal: item.precio,
                }
            })
            .then(() => {
                return axios.put('http://127.0.0.1:8000/api/catalogoCamisetas/', null, {
                    params: {
                        idcatcamiseta: item.idcatcamiseta,
                        cantidadComprada: item.cantidad,
                    }
                });
            })
            .then(() => {
                return axios.put('http://127.0.0.1:8000/api/artista/', null, {
                    params: {
                        tipoidusuario: item.tipoidartista,
                        numidusuario: item.numidartista,
                        nuevaUtilidad: item.precioestampa,
                        cantidadComprada: item.cantidad,
                    }
                });
            });
        });
    
        Promise.all(promises)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra realizada con éxito'
                });
                setCart([]);
            })
            .catch(err => {
                console.log(err);
            });
    };
    

    const cancelPurchase = () => {
        setCart([]);
        Swal.fire({
            icon: 'success',
            title: `Compra cancelada`
        });
    }

    const totalPrice = () => {
        return cart.reduce((pre,act) => pre + act.precio,0)
    }

    const total = totalPrice()

    return(
        <CartContext.Provider value={{
            confirmPurchase,
            cancelPurchase,
            removeProduct,
            addProduct,
            total,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
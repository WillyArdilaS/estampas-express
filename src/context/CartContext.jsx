import React, { useState,useContext } from 'react';
import axios from 'axios';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) =>{
    const [shoppingMade, setShoppingMade] = useState(false)
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.find(product => product.id.idProducto == id) ? true : false
    }

    const addProduct = (item, quantity, regionID)=>{
        if(quantity > 0) {
            if (isInCart(item.id)) {
                axios.get('http://localhost:8080/orden/maxima')
                .then(resOrder => {
                    console.log(item.id,)
                    axios.put(`http://localhost:8080/orden/cantidad/${quantity}`, {
                        idOrden: (resOrder.data.id.idOrden + 1),
                        idProducto: item.id,
                        idRegion: regionID,
                        tipoId: sessionStorage.getItem("tipoID"),
                        numeroId: sessionStorage.getItem("numeroID")
                    })
                    .then(() => {
                        alert('Cantidad de producto actualizado a ' + quantity);
                    })
                    .catch(err => {
                        console.log(err);
                    })   
                })
                .catch(errOrder => {
                    console.log(errOrder)
                })
           } else {
            var today = new Date()
            today = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

            axios.get(`http://localhost:8080/cliente/representante/${sessionStorage.getItem("numeroID")}/${sessionStorage.getItem("tipoID")}`)
            .then((resRV) => {
        
                axios.get('http://localhost:8080/orden/maxima')
                .then(resOrder => {
        
                    axios.get('http://localhost:8080/periodo/ultimo')
                    .then(resPeriod => { 
                        axios.post('http://localhost:8080/nuevaOrden', {
                                idOrden: (resOrder.data.id.idOrden + 1),
                                idRegion: regionID,
                                idProducto: item.id,
                                tipoId: sessionStorage.getItem("tipoID"),
                                numeroId: Number(sessionStorage.getItem("numeroID")),
                
                                idProductoInv: item.id,
                                idRegionInv: regionID,
                
                                tipoIdCliente: sessionStorage.getItem("tipoID"),
                                numeroIdCliente: Number(sessionStorage.getItem("numeroID")),
                
                                idPeriodo: resPeriod.data.id,
                                fechaRegistro: today,
                
                                estado: "EN PROCESO",
                
                                tipoIdClienteCal: sessionStorage.getItem("tipoID"),
                                numeroIdClienteCal: Number(sessionStorage.getItem("numeroID")),
                
                                calificacion: null,
                
                                cantidad: quantity,
                
                                tipoIdRep: resRV.data.id.kTipoId,
                                numeroIdRep: Number(resRV.data.id.kNumeroId)
                        })
                        .then(() => {
                            alert("Producto agregado al carrito");       
                        })
                        .catch(errNewOrder => {
                            console.log(errNewOrder)
                        })
                    })
                    .catch(errPeriod => {
                        console.log(errPeriod)
                    })
                })
                .catch(errOrder => {
                    console.log(errOrder)
                }) 
            })
            .catch((errRV) => {
            console.log(errRV)
            })
           }
        } else {
            alert('Debe agregar al menos 1 producto')
        }
    }

    const showCart = () => {
        setCart([]);

        axios.get('http://localhost:8080/orden/maxima')
        .then(resOrder => {
            axios.get(`http://localhost:8080/orden/enCarrito/${resOrder.data.id.idOrden +1}`)
            .then(res => {
                res.data.map(item => {
                    setCart(element => [...element,item])
                })
            })
            .catch(err => {
                console.log(err)
            })

        })
        .catch(errOrder => {
            console.log(errOrder);
        })
    }

    const removeProduct = (id) =>{
        axios.put(`http://localhost:8080/orden/estado/CANCELADO`, {
            idOrden: id.idOrden,
            idProducto: id.idProducto,
            idRegion: id.idRegion,
            tipoId: sessionStorage.getItem("tipoID"),
            numeroId: sessionStorage.getItem("numeroID")
        })
        .then(() => {
            alert("Producto eliminado del carrito");
            showCart();
        })
        .catch(err => {
            console.log(err)
        })
    }

    const confirmPurchase = () => {
        cart.map(item => {
            axios.put(`http://localhost:8080/orden/estado/COMPLETADO`, {
                idOrden: item.id.idOrden,
                idProducto: item.id.idProducto,
                idRegion: item.id.idRegion,
                tipoId: sessionStorage.getItem("tipoID"),
                numeroId: sessionStorage.getItem("numeroID")
            })
            .catch(err => {
                console.log(err)
            })
        })

        setCart([])
        setShoppingMade(true)
        alert("Compra realizada con éxito")
    }

    const cancelPurchase = () => {
        cart.map(item => {
            axios.put(`http://localhost:8080/orden/estado/CANCELADO`, {
            idOrden: item.id.idOrden,
            idProducto: item.id.idProducto,
            idRegion: item.id.idRegion,
            tipoId: sessionStorage.getItem("tipoID"),
            numeroId: sessionStorage.getItem("numeroID")
            })
            .then(() => {
                showCart();
            })
            .catch(err => {
                console.log(err)
            })
        })

        alert("Compra cancelada")
    }

    const processEnd = (qualificationRV) => {
        cart.map(item => {
            console.log(item.id.idOrden)
            console.log( item.id.idProducto)
            console.log(item.id.idRegion)
            axios.put(`http://localhost:8080/orden/calificacion/${qualificationRV}`, {
                idOrden: item.id.idOrden,
                idProducto: item.id.idProducto,
                idRegion: item.id.idRegion,
                tipoId: sessionStorage.getItem("tipoID"),
                numeroId: sessionStorage.getItem("numeroID")
            })
            .then(() => {
                showCart();
            })
            .catch(err => {
                console.log(err)
            })
        })

        setShoppingMade(false)
    }

    const totalPrice = () => {
        return cart.reduce((pre,act) => pre + (act.precio*act.quantity),0)
    }

    const total = totalPrice()

    return(
        <CartContext.Provider value={{
            confirmPurchase,
            cancelPurchase,
            isInCart,
            showCart,
            removeProduct,
            addProduct,
            total,
            cart, 
            setCart,
            shoppingMade, 
            processEnd
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
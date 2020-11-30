import React, { useContext, useState } from 'react';
import { AppContext2 } from '../AppContext/AppContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () =>{
    const [precio, setPrecio] = useState();
    const cart = useContext(AppContext2);

    const Total = () =>{
        setPrecio(cart.producto.price* cart.carrito)

        return <>
        ${precio}
        </> 
    }


    return <>
    <div className="bg-primary text-center py-5 mb-4">
        <div className="container">
            <h1 className="font-weight-light text-white">Carrito</h1>
        </div>        
    </div>
    <div className="container">
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-0 shadow">
                    <img src={cart.producto.thumbnail} className="card-img-top"></img>
                    <div className="card-body text-center" >
                        <h5>{cart.producto.title}</h5>
                        <div className="card-text text-black-50">
                            ${cart.producto.price}
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-0 shadow">                    
                    <div className="card-body text-center" >                        
                        <div className="card-text text-black-50">
                          Precio: ${cart.producto.price} - Cantidad: {cart.carrito}
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        Total: <Total/>
                    </div>
                    <button className="btn bg-primary text-white">Pagar</button>
                </div>
            </div>
        </div>

    </div>
    
    </>


}



export default Cart;
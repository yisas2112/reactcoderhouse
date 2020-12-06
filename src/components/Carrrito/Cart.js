import React, { useContext } from 'react';
import { AppContext2 } from '../AppContext/AppContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

const Cart = () =>{        
    const {producto, Total, EliminarProducto, CantidadTotal} = useContext(AppContext2);
    console.log(producto.length)

    const mostrarItems = () =>{
        return <> {producto.map((e,index)=>{                
                    return <>  <div key={index} className="container">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-0 shadow">
                                                <img src={e.produ.thumbnail} className="card-img-top"></img>
                                                <div className="card-body text-center" >
                                                    <h5>{e.produ.title}</h5>                                                    
                                                </div>                    
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-0 shadow">                    
                                                <div className="card-body text-center" >                        
                                                    <div className="card-text text-black-50">
                                                    Precio: ${e.produ.price} - Cantidad: {e.cantidad}
                                                    </div>
                                                </div>
                                                <div className="card-footer text-center">                                                    
                                                    Subtotal: {e.produ.price * e.cantidad}                                                    
                                                </div>
                                                <button className="btn bg-primary text-white" onClick={()=>EliminarProducto(e.produ.id)}>Eliminar Producto</button>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>                                    
                            </>
                                })
                    }
                    
    </>
    }

    const irHome = () =>{
        return <Link to='/'><button className="btn btn-primary text-white d-flex my-3 mx-auto" >Carrito vacio, ir a Home</button> </Link>
    }

    return <>
            <div className="bg-primary text-center py-5 mb-4">
                    <div className="container">
                        <h1 className="font-weight-light text-white">Carrito</h1>
                    </div>        
            </div>
            {producto.length >= 1  ?  mostrarItems() : irHome()   } 
            <div className="bg-primary text-center py-5 mb-4">
                        <div className="container text-white">
                            Cantidad Total: <CantidadTotal/> {' '} Total: $<Total/>
                            <div className="mt-3">
                            <button className="btn bg-dark text-white">Pagar</button>
                            </div> 
                        </div>
                    </div>   
    </>

    


}



export default Cart;
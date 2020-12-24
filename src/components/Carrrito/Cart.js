import React, { useContext} from 'react';
import { AppContext2 } from '../AppContext/AppContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Cart.scss'


const Cart = () =>{        
    const {producto, Total, EliminarProducto, CantidadTotal} = useContext(AppContext2);   


    const mostrarItems = () =>{
        return <> {producto.map((e,index)=>{                
                    return <>  <div key={index} className="container">
                                    <div className="row align-items-center d-flex justify-content-center">
                                        <div className="col-xl-5 col-md-6 mb-4 col-xl-3 carrito_image">
                                            <div className="card border-0 shadow">
                                                <img src={e.produ.thumbnail} className="carrito__image_product"></img>
                                                <div className="card-body text-center" >
                                                    <h5>{e.produ.title}</h5>                                                    
                                                </div>                    
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-4 col-xl-3">
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
        return <Link to='/' style={{textDecoration:'none'}}><button className="glow-on-hover" >Carrito vacío, ir a Home</button> </Link>
    }

    return <>
            <div className="bg-primary text-center py-5 mb-4">
                    <div className="container">
                        <h1 className="font-weight-light text-white">Carrito</h1>
                    </div>        
            </div>
            {producto.length >= 1  ?  mostrarItems() : irHome()   } 
            <div className="bg-primary text-center py-5" >
                        <div className="container text-white">
                            Cantidad Total: <CantidadTotal/> {' '} Total: $<Total/>
                            <div className="mt-3">                            
                            <Link to='formulario'> <button disabled={producto.length == 0} id='pagar' className="btn bg-dark text-white" >Pagar</button></Link>
                            </div> 
                        </div>
            </div>   
    </>

    


}



export default Cart;
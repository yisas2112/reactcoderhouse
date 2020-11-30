import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react';
import { AppContext2 } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({product})=>{    
    const valorRecibido = useContext(AppContext2);
    const [contador, setContador] = useState();


    const ShowCant = (value)=>{
        setContador(value);
    }   

    return <>
            <div className="bg-primary text-center py-5 mb-4">
                <div className="container">
                    <h1 className="font-weight-light text-white">Detalle del producto</h1>
                </div>        
            </div>
            <div className="container-fluid">
                        <div className="row">                
                            <div className="card text-center col-sm-3 col-md-7 my-3 m-auto p-0">                        
                                    <div className="card-header">
                                        {product.title}                 
                                    </div>                        
                                <div className="row">                            
                                    <div class="col-md-6 col-sm-12 p-3">                                
                                        <img class="card-img-top m-md-3" src={product.thumbnail}></img>
                                    </div>    
                                    <div className="col-md-6 mt-5 col-sm-12 p-3">                            
                                            <ItemCount initialValue={0} max={20} min={0} onaDD={ShowCant} product={product}/>
                                            <Link to={`/carrito`}><button class="btn btn-primary mt-3" onClick={valorRecibido.SetearProduct(product), valorRecibido.SetCantidad(contador)}>Comprar {contador}</button></Link>                                                                            
                                    </div>                                        
                                </div>
                                <div class="card-footer text-muted">
                                Precio: ${product.price}               
                                </div>
                            </div>
                        </div>
                </div>
            </>

}


export default ItemDetail;
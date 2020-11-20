import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({product}) =>{
    const producto = product;   

    const ReturnProducts = () =>{
        if(!producto){
            return <p className="m-3">...Cargando Productos</p>
        }
        return producto.map((elemento, index)=>{
                    if(elemento.id <= 20){
                    return <div className="col-4 Item" key={index}>
                                <div className="card card-cascade card-ecommerce m-3">
                                    {/* Card Image */}
                                    <div className="view view-cascade overlay">                                
                                    <Link to={`/detalle/${elemento.id}`}><img className="card-img-top" src={elemento.img}></img></Link>
                                        <a>
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
                                    {/* Card Content */}                            
                                    <div className="card-body card-body-cascade text-center">   
                                        <h5>{elemento.Model} - {elemento.year}</h5>
                                        <Link to={`detalle/${elemento.id}`}><button type="button" className="btn btn-primary">Detalle</button></Link> 
                                    </div>
                                    {/* Card Footer */}
                                    
                                    <div className="card-footer m-auto w-100">
                                        <span>{elemento.Price}</span>                                                                
                                    </div>                            
                                </div>
                            </div>
                    }
                })                
                
    }

    return <>    
    <ReturnProducts/>    
    </>

    
}

export default Item;
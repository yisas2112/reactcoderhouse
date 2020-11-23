import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({product}) =>{    
    console.log(product);   

    const ReturnProducts = () =>{
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        return product.map((elemento, index)=>{
                    if(index <= 20){
                    return <div className="col-4 Item" key={index}>
                                <div className="card card-cascade card-ecommerce mx-3">
                                    {/* Card Image */}
                                    <div className="view view-cascade overlay">                                
                                    <Link to={`/detalle/${elemento.id}`}><img className="w-100" src={elemento.thumbnail}></img></Link>
                                        <a>
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
                                    {/* Card Content */}                            
                                    <div className="card-body card-body-cascade text-center">   
                                        <h5>{elemento.title} - {elemento.year}</h5>
                                        <Link to={`detalle/${elemento.id}`}><button type="button" className="btn btn-primary">Detalle</button></Link> 
                                    </div>
                                    {/* Card Footer */}                                    
                                    <div className="card-footer m-auto w-100">
                                        <span>Año: {elemento.year}</span>                                                                
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
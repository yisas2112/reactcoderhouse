import React from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../spinner/spinner';
import './Item.scss';

const Item = ({product}) =>{           
    console.log(product)

    const ReturnProducts = () =>{
        if(!product){
            return <p className="m-3"><Spinner/></p>
        }
        return product.map((elemento, index)=>{
                    if(index <= 20){
                    return <>
                            <div className='col-lg-4 col-md-4 col-sm-6 col-xl-3'>
                                <div key={index}>
                                    <div className="card card-cascade card-ecommerce my-3">
                                        {/* Card Image */}
                                        <div id='card-items' className="view view-cascade overlay">                                
                                        <Link to={`/detalle/${elemento.id}`}><img className="img-fluid" src={elemento.thumbnail}></img></Link>
                                            <a>
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                        </div>
                                        {/* Card Content */}                            
                                        <div className="card-body card-body-cascade text-center detalle">   
                                            <h5>{elemento.title} - {elemento.year}</h5>
                                            <Link to={`detalle/${elemento.id}`}><button type="button" className="btn btn-primary">Detalle</button></Link> 
                                        </div>
                                        {/* Card Footer */}                                    
                                        <div className="card-footer m-auto w-100">
                                            Precio: ${elemento.price}
                                                                                   
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                            </>
                    }
                })          
                
    }

    return <>    
    <ReturnProducts/>        
    </>

    
}

export default Item;
import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react';
import { AppContext2 } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './itemDetail.scss'



const ItemDetail = ({product})=>{    
    const {addToCart} = useContext(AppContext2);
    const [contador, setContador] = useState();


    const ShowCant = (value)=>{
        console.log(value)
        
        setContador(value);
    }   

    return <>
            <div className="bg-primary text-center py-5 mb-4">
                <div className="container">
                    <h1 className="font-weight-light text-white">Detalle del producto</h1>
                </div>        
            </div>
            <Link to='/' style={{textDecoration:'none'}}><button className="glow-on-hover" >Home</button> </Link>
            <div className="container-fluid">
                        <div className="row">                
                            <div className="card text-center col-sm-8 col-lg-6 col-md-10 my-3 m-auto p-0">                        
                                    <div className="card-header">
                                        {product.title}                 
                                    </div>                        
                                <div className="row">                            
                                    <div class="col-md-6 col-sm-12 p-3">                                
                                        <img class="card-img-top m-md-3" src={product.thumbnail}></img>
                                    </div>    
                                    <div className="col-md-6 mt-md-5 mt-sm-2 col-sm-12 p-3">                            
                                            <ItemCount initialValue={0} max={20} min={0} onaDD={ShowCant} product={product}/>
                                            <Link to={`/carrito`}><button class="btn btn-primary mt-3" disabled={!contador} onClick={()=>{addToCart(product,contador)}}>Comprar {contador}</button></Link>                                                                            
                                    </div>                                        
                                </div>
                                <div class="card-footer text-muted">
                                Precio: ${product.price}               
                                </div>
                            </div>
                        </div>
            </div>
            <Footer/>
            </>

}


export default ItemDetail;
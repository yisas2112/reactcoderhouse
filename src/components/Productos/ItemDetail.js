import React from 'react';
import ItemCount from '../ItemCount';
import {useState} from 'react';



const ItemDetail = ({product})=>{    
    const [contador, setContador] = useState();
    const ShowCant = (value)=>{
        setContador(value)
    }   

    return <div className="card text-center col-5 m-auto p-0">
            <div className="card-header">
                {product.title} 
            </div>
            <div class="card-body d-flex">                
                <img class="card-text w-50 m-3" src={product.thumbnail}></img>
                <div className="m-auto w-50">
                <ItemCount initialValue={0} max={20} min={0} onaDD={ShowCant}/>
                    <a href="#" class="btn btn-primary mt-3">Comprar {contador}</a>
                </div>
            </div>
            <div class="card-footer text-muted">
            Precio: ${product.price}               
            </div>
        </div>

}


export default ItemDetail;
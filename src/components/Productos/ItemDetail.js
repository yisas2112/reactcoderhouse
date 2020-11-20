import React from 'react';
import ItemCount from '../ItemCount';


const ItemDetail = ({product})=>{
    console.log(product);
    const ShowCant = (value)=>{
        console.log(value);
    }   

    return <div className="card text-center col-4 m-auto p-0">
            <div className="card-header">
                Modelo: {product.Model} 
            </div>
            <div class="card-body d-flex">                
                <img class="card-text m-3" src={product.img}></img>
                <div className="m-auto">
                <ItemCount initialValue={0} max={20} min={0} onaDD={ShowCant}/>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div class="card-footer text-muted">
            Año: {product.year}               
            </div>
        </div>

}


export default ItemDetail;
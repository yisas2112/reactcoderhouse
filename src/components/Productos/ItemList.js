import React, {useState, useEffect, useContext} from 'react';  
import { AppContext } from '../AppContext/AppContext';
import Item from './item';


const ItemList = () =>{
    const product = useContext(AppContext);

    return <>
    <div>
        <h2 className="h2 text-center my-3">Productos</h2>
        <div className="row w-100">            
        <Item product={product}/>
        </div> 
    </div>    
    </>


}


export default ItemList;


import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();         
    const product = useContext(AppContext)

    const ReturnProducts = ({product}) =>{       
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        const list = product.map((elemento)=>{
                    if(elemento.id == parametro){
                    return <ItemDetail product={elemento}/>
                    }    })
                
                return list;
    }


    
    return <ReturnProducts product = {product}/>
    



}


export default ItemDetailContainer;
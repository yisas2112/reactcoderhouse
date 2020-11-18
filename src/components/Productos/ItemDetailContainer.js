import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () =>{
    const {parametro} = useParams();         
    const [productId, setProducId] = useState();            
      
    
    useEffect(()=>{  
        getProduct();      
        
    },);    

    const getProduct =() =>{
        const server = new Promise(resolve =>{

            setTimeout(()=>{resolve(parametro)},2000);
        })
        server.then(response=>{
            setProducId(response);
        });
    }

    const ReturnProducts = () =>{
        if(!productId){
            return <p className="m-3">...Cargando Productos</p>
        }
        return <ItemDetail producto={productId}/>
        
    }


    
    return <ReturnProducts/>
    



}


export default ItemDetailContainer;
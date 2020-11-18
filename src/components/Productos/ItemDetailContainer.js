import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Data from './productos.json';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();         
    const [productId, setProducId] = useState();   
    const [product, setProduct] = useState();
      
    
    useEffect(()=>{  
        getProduct();      
        
    },);    

    const getProduct =() =>{
        const server = new Promise(resolve =>{

            setTimeout(()=>{resolve(Data)},2000);
            
        })
        server.then(response=>{
            setProduct(response);
            
        });
    }

    const ReturnProducts = () =>{
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        return <ItemDetail producto={product}/>
        
    }


    
    return <ReturnProducts/>
    



}


export default ItemDetailContainer;
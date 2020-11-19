import { data } from 'jquery';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Data from './productos.json';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();         
    const [productId, setProducId] = useState();   
    const [product, setProduct] = useState();
    console.log(parametro);
    
    
      
    
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

    const ReturnProducts = ({product}) =>{
       // const producto = product;
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        const list = product.map((elemento, index)=>{
                    if(elemento.id == parametro){
                    return <ItemDetail product={elemento}/>
                    }    })
                
                return list;
    }


    
    return <ReturnProducts product = {product}/>
    



}


export default ItemDetailContainer;
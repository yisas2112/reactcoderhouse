import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Data from './productos.json';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();             
    const [product, setProduct] = useState();
    console.log(parametro);
    
    
      
    
    useEffect(()=>{  
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1744')
        .then(response => response.json())
        .then(ResultProducts=>{
            setProduct(ResultProducts.results)
        },2000)
        
        
    },[]);    

    

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
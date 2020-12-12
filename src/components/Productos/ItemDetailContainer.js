import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';
import Spinner from '../spinner/spinner';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();         
    const product = useContext(AppContext)
    console.log(product)
    
    
   
    const ReturnProducts = ({product}) =>{       
        if(!product){
            return <Spinner className="m-3"/>
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
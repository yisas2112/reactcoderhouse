import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase';
import Spinner from '../spinner/spinner';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
    const {parametro} = useParams();             
    const [pro,setPro] = useState()
    console.log(pro)
    
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('productos')      
        itemCollection.get().then((query)=>{            
            const data = query.docs.map(doc => ({...doc.data(), id: doc.id}))
            console.log(data)
            setPro(data)
        })
    },[])
    
    
   
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


    
    return <ReturnProducts product = {pro}/>
    



}


export default ItemDetailContainer;
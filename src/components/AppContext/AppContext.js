import React from 'react'
import {useEffect, useState} from 'react';
import {getFirestore} from '../../firebase';
import Item from '../Productos/item';

export const AppContext = React.createContext();

export const AppContext2 = React.createContext();



export const AppProvider = ({children}) =>{
    const [product, setProduct] = useState();
    const [desc, setDesc] = useState()
    const [asc, SetAsc] = useState()       
    console.log(desc)
    console.log(asc)
    
    const OrdenDesc = ()=>{
        return <Item product={desc}/>
    }
    
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('productos')                
        const OrdenDesc = itemCollection.orderBy('price', 'desc')
        const OrdenAsc = itemCollection.orderBy('price', 'asc')
        
        itemCollection.get().then((query)=>{            
            setProduct(query.docs.map(doc => doc.data()));
        }).catch((error)=>{
            console.log("error de carga de items")
        })

        OrdenDesc.get().then((query)=>{            
            setDesc(query.docs.map(doc => doc.data()));
        }).catch((error)=>{
            console.log("error de carga de items")
        })

        OrdenAsc.get().then((query)=>{            
            SetAsc(query.docs.map(doc => doc.data()));
        }).catch((error)=>{
            console.log("error de carga de items")
        })


        
        return()=>{
    
        };
    },[]);  
    
    return <AppContext.Provider value={{product, desc, asc}}>
                {children}        
            </AppContext.Provider>
}





export const CartContext = ({children}) => {
    const [producto, setProducto] = useState([]);      

    const addToCart = (produ,cantidad) =>{  
        console.log(producto.id)
        console.log(produ.id)                
        const producFind = producto.find((e)=>e.produ.id === produ.id)
        if(producFind){
            producFind.cantidad += cantidad
            setProducto([...producto])
        }else{
            setProducto([...producto,{produ,cantidad}])
        }
    }

    const Total = () =>{        
        return producto.reduce((acc, e)=>(acc += e.produ.price * e.cantidad),0)
        
    }

    const EliminarProducto = (id) =>{      
        const productoEncontrado = producto.findIndex((e)=> e.produ.id === id)
        console.log(productoEncontrado)
        if(productoEncontrado !== -1){
            producto.splice(productoEncontrado,1)
            setProducto([...producto])
            Total()
            
        }
    }

    const CantidadTotal = () =>{
        return producto.reduce((acc,e)=>(acc += e.cantidad),0)
    }

    return <AppContext2.Provider value={{producto,addToCart, Total, EliminarProducto, CantidadTotal}}>
        {children}
    </AppContext2.Provider>
}



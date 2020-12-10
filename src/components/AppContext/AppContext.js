import React from 'react'
import {useEffect, useState} from 'react';
import {getFirestore} from '../../firebase';

export const AppContext = React.createContext();

export const AppContext2 = React.createContext();

export const AppContext3 = React.createContext();

export const AppProvider = ({children}) =>{
    const [product, setProduct] = useState();       

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1744')
        .then(response => response.json())
        .then(ResultProducts=>{
            setProduct(ResultProducts.results)
            
            
        },3000)
        return()=>{};
    },[]);  
    
    return <AppContext.Provider value={product}>
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


export const AppFirebase = ({children}) =>{    
    const [items, setItems] = useState([]);
    const [precioAlto, setPrecioAlto] = useState([])
    console.log(precioAlto)
    console.log(items)
    

    useEffect(()=>{        
        const db = getFirestore()
        const itemCollection = db.collection('productos')
        const highPrice = itemCollection.where('price', '>',7000)
        
        itemCollection.get().then((query)=>{
            if(query.size ===0){
                <>Cargando</>
            }
            setItems(query.docs.map(doc => doc.data()));
        }).catch((error)=>{
            console.log("error de carga de items")
        })

        highPrice.get().then((query)=>{
            setPrecioAlto(query.docs.map(doc => doc.data()))
        })

    },[])


    return <AppContext3.Provider value={{items,precioAlto}}>
        {children}
    </AppContext3.Provider>
}
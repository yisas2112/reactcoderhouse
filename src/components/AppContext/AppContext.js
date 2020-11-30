import React from 'react'
import {useEffect, useState} from 'react';

export const AppContext = React.createContext();

export const AppContext2 = React.createContext();

export const AppProvider = ({children}) =>{
    const [product, setProduct] = useState();       

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1744')
        .then(response => response.json())
        .then(ResultProducts=>{
            setProduct(ResultProducts.results)
            
            
        },2000)
        return()=>{};
    },[]);  
    
    return <AppContext.Provider value={product}>
                {children}        
            </AppContext.Provider>
}

export const CartContext = ({children}) => {
    const [producto, setProducto] = useState([]);
    const [carrito, setCarrito] = useState([1]);
    

    

    const SetCantidad= (cantidad) =>{
        setCarrito(cantidad);
        console.log(carrito);

    }

    const SetearProduct = (product) =>{
        setProducto(product);
        console.log(product)

    }

    return <AppContext2.Provider value={{carrito, producto,SetearProduct, SetCantidad}}>
        {children}
    </AppContext2.Provider>
}
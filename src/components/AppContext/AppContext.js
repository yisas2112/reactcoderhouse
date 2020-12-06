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
    const[total,setTotal] = useState(0)  
    

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
        // producto.map((e)=>{
        //     const suma = (e.produ.price * e.cantidad)
        //     console.log(suma)
        //     setTotal(suma)
            
            
        // } )

        let suma = 0;
        producto.forEach((e) =>{
            suma += e.produ.price * e.cantidad
            setTotal(suma)            

            
        });

        return total
        
    }

    


  

    return <AppContext2.Provider value={{producto,addToCart, Total}}>
        {children}
    </AppContext2.Provider>
}
import React, {useState, useEffect} from 'react';  
import Item from './item';
import Data from './productos.json';

const ItemList = () =>{
    const[product, setproduct] = useState();

    useEffect(()=>{
        getProduct();        
    },[]);


    const getProduct =() =>{
        const server = new Promise(resolve =>{

            setTimeout(()=>{resolve(Data)},2000);
        })
        server.then(response=>{
            setproduct(response);
        });
    }


    const ReturnProducts = () =>{
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        product.map(products =><Item products={products}/>)
    
    }

    return <>
    <div>
        <h2 className="h2">Productos</h2>
        <div className="row w-100">
            
        <ReturnProducts/>
        </div> 
    </div>    
    </>
}


export default ItemList;
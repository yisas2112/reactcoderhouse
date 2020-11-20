import React, {useState, useEffect} from 'react';  
import Data from './productos.json';
import Item from './item';


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

    return <>
    <div>
        <h2 className="h2 text-center my-3">Productos</h2>
        <div className="row w-100">            
        <Item product={product}/>
        </div> 
    </div>    
    </>


}


export default ItemList;


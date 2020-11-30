import React, {useState, useEffect, useContext} from 'react';  
import { AppContext } from '../AppContext/AppContext';
import Item from './item';


const ItemList = () =>{
    //const[product, setproduct] = useState();  
    
    const product = useContext(AppContext);
    

    // useEffect(()=>{
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1744')
    //     .then(response => response.json())
    //     .then(ResultProducts=>{
    //         setproduct(ResultProducts.results)
    //         console.log(ResultProducts)
            
    //     },2000)
    //     return()=>{};
    // },[]);    

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


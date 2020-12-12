import React, {useContext} from 'react';  
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';
import Item from './item';

const ItemList = () =>{
    const {product} = useContext(AppContext);       
    
    return <>
    <div>
        <Link to='asc'>Orden Acendente</Link>
        <div>
        <Link to='desc'>Orden Descendente</Link>
        </div>
        <h2 className="h2 text-center my-3">Productos</h2>
        <div className="row w-100">          
        <Item product={product}/>    
        </div> 
    </div>    
    </>


}


export default ItemList;


import React, {useContext} from 'react';  
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';
import Item from './item';
import './itemList.scss';
const ItemList = () =>{
    const {product} = useContext(AppContext);       
    
    return <>
    <div className='container-fluid'>        
        <div>
            <h2 className="h2 text-center my-3">Productos</h2>
        </div>
        <div className='row'>
            <div className='ml-auto asd' >
                <Link to='asc' className='btn btn-secondary'>Orden Precio Acendente</Link>
                <Link to='desc' className='btn btn-secondary mx-3'>Orden Precio Descendente</Link>
            </div>
        </div>           
        <div className='row'>            
            <Item product={product}/>        
        </div>                 
            
    </div>    
    </>


}


export default ItemList;


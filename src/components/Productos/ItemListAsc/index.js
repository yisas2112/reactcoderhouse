import { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import Item from '../item';


const ItemListAsc = () =>{        
    const {asc} = useContext(AppContext)
    return <>
    <div> 
    <h1 className="h1 text-center">E-commerce</h1>       
        <h2 className="h2 text-center my-3">Productos</h2>
        <div className="row w-100">          
        <Item product={asc}></Item>
        </div> 
    </div>    
    </>


}


export default ItemListAsc;
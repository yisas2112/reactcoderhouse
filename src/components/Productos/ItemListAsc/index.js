import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';
import Footer from '../../Footer';
import Item from '../item';
import '../itemList.scss';


const ItemListAsc = () =>{        
    const {asc} = useContext(AppContext)
    return <>
    <div className='container-fluid'> 
    <h1 className="h1 text-center">E-commerce</h1>       
        <h2 className="h2 text-center my-3">Productos</h2>
        <div className='row'>
            <div className='ml-auto button__filtros' >                                
                <Link to='asc' className='btn btn-secondary'>Orden Precio Acendente</Link>
                <Link to='desc' className='btn btn-secondary mx-3'>Orden Precio Descendente</Link>
            </div>
        </div>           
        <div className='row'>            
            <Item product={asc}/>        
        </div>                 
    </div>
    <Footer/>
    </>


}


export default ItemListAsc;
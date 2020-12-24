import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext2 } from '../AppContext/AppContext';
import './CartIcon.scss'



import logo from '../logo.svg';

const CartIcon = () => {
        const {producto} = useContext(AppContext2)
        console.log(producto.length)
        
return (    
        <>
        
        <Link to={`/carrito`} style={{ textDecoration: 'none', color:'black' }}><img src={logo} alt="Ecommerce"  width="30" height="30" className="d-inline-block align-top mr-3"/><div className='cantidad__carrito'>{producto.length} </div></Link>
        </>

    
)
}

export default CartIcon;
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';



import logo from '../logo.svg';

const CartIcon = () => {
        
return (    
        <>
        
        <Link to={`/carrito`}><img src={logo} alt="Ecommerce"  width="30" height="30" className="d-inline-block align-top mr-3"/>Ir a Carrito</Link>
        </>

    
)
}

export default CartIcon;
import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import { AppContext2 } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';

const Contador = ({initialValue, max, min, onaDD, product}) =>{
    const[count, setCount] = useState(initialValue);  
    const[show, setshow]  = useState(false);    
    
    const valorRecibido = useContext(AppContext2);

    const Sumar = () =>{        
        if(count !==max){
          setCount(count+1);            
         onaDD(count+1);         
        }
        
    }

    const Restar = () =>{        
        if(count !== min){
        setCount(count-1);   
        onaDD(count-1);
        }        

      
   }  
  

   const handleClose = () =>setshow(false);
   const handleShow = () =>setshow(true);
   
    return(
        <>
        <div className="text-center border border-primary m-auto bg-light">
            <div className="my-3">
                <p>Cantidad</p>
            </div>
            <div className="d-flex justify-content-center my-3 " >
                <button className="mx-2 btn btn-primary" onClick={(Restar)}>-</button>
                <p className="my-2"> {count}</p>            
                <button className="mx-2 btn btn-primary" onClick={(Sumar)} >+</button>
                  
            </div>
            <div className="mx-2">
                <button type="button" disabled={count == 0} className="btn btn-primary my-3 " onClick={()=> {valorRecibido.addToCart(product,count); handleShow()}}>Agregar al Carrito</button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Felicitaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>Agregaste al carrito {count} cantidades</Modal.Body>
            <Modal.Footer>
                <Link to='/carrito'><Button>Ir a carrito</Button></Link>                
                <Link to='/'><Button variant="primary">Seguir Comprando</Button></Link>
            </Modal.Footer>
        </Modal>
        </>
        
    )
}



export default Contador;
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';

const Contador = ({initialValue, max, min, onaDD}) =>{
    const[count, setCount] = useState(initialValue);  
    const[show, setshow]  = useState(false);    

    const Sumar = () =>{        
        if(count !=max){
          setCount(count+1);            
         onaDD(count+1);
         
        }
        
    }

    const Restar = () =>{        
        if(count != min){
        setCount(count-1);   
        }        

        onaDD(count-1);
   }  
  

   const handleClose = () =>setshow(false);
   const handleShow = () =>setshow(true);
   
    return(
        <>
        <div className="text-center border border-primary w-25 m-auto bg-light">
            <div className="my-3">
                <p>Remera</p>
            </div>
            <div className="d-flex justify-content-center my-3 " >
                <button className="mx-2 btn btn-primary" onClick={(Sumar)} >+</button>
                <p className="my-2">Cantidad: {count}</p>            
                <button className="mx-2 btn btn-primary" onClick={(Restar)}>-</button>  
            </div>
            <div className="mx-2">
                <button type="button" className="btn btn-primary my-3 " onClick={(handleShow)}>Agregar al Carrito</button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Agregaste al carrito {count} cantidades</Modal.Body>
            <Modal.Footer>                
                <Button variant="primary" onClick={handleClose}>Aceptar</Button>                
            </Modal.Footer>
        </Modal>
        </>
        
    )
}



export default Contador;
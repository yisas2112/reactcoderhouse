import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contador = ({initialValue, max, min, onaDD}) =>{
    const[count, setCount] = useState(initialValue);    

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
   
   const AddToCarrito =()=>{
       console.log(`Agregaste al carrito ${count} cantidades`);
   }
   
    return(
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
                <button className="btn btn-primary my-3 " onClick={(AddToCarrito)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}



export default Contador;
import { useContext, useState } from "react"
import { AppContext2 } from "../AppContext/AppContext";

const Venta = ()=>{
    const {Buyer} = useContext(AppContext2);    
    const [buyer, setBuyer] =useState({
        nombre:'',
        apellido:'',
        email:''
    })
    
    
    const handleInputChange = (event)=>{        
        setBuyer({...buyer, [event.target.name]:event.target.value})
        console.log(buyer)
    }

    const enviarDatos = (event)=>{
        event.preventDefault();
    }

    return <>
        <form className='row' onSubmit={enviarDatos}>
            <div className='col-md-3'>
                <input placeholder='Ingrese Nombre: '
                className='form-control'
                type='text'
                name='nombre'
                onChange={handleInputChange}> 
                              
                </input>
            </div>
            <div className='col-md-3'>
                <input placeholder='Ingrese Apellido: '
                className='form-control'
                type='text'
                name='apellido'
                onChange={handleInputChange}> 
                </input>
            </div>
            <div className='col-md-3'>
                <input placeholder='Ingrese Nombe: '
                className='form-control'
                type='text'
                name='email'
                onChange={handleInputChange}>                
                </input>
            </div>
            <div className='col-md-3'>
                <button className='btn btn-secondary' type='submit' onClick={()=>Buyer(buyer)}>Enviar</button>
            </div>



        </form>
    </>
}

export default Venta
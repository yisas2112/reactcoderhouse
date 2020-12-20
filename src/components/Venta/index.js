import { useContext, useEffect, useState } from "react"
import { getFirestore } from "../../firebase";
import {AppContext2 } from "../AppContext/AppContext";
import {Button, Modal} from 'react-bootstrap';

const Venta = ()=>{
    const {Buyer, producto} = useContext(AppContext2);    
    const [orden, setOrden] = useState([]);
    const [ventas, setVentas] = useState([]);
    const [show, setShow] = useState(false)   
        
    const [buyer, setBuyer] =useState({
        nombre:'',
        apellido:'',
        email:'',
        fecha:'',
        OrdenDeCompra: ''
        
    })

    useEffect(()=>{
        const dba = getFirestore()
        const buyerCollection = dba.collection('ventas')
        buyerCollection.get().then((query)=>{                            
            console.log(query)
            setVentas(query.docs.map(doc => doc.data()))            
        }).catch((error)=>{
            console.log("error de carga de items")
        })    
       return ()=>{

       } 
    },[])

    const GetOrdenDeCompra = () =>{
        let numero = ventas.map((e)=>{
         return e.venta.buyer.OrdenDeCompra          
       })
       let mayor = 0;
       for(let i = 0; i < numero.length; i++){
           if(numero[i] > mayor){
               mayor = numero[i]
           }
       }       

       setOrden(mayor) 
       console.log(orden)      
    }
    
    
    const handleInputChange = (event)=>{     
        GetOrdenDeCompra()       
        let date = new Date()            
        setBuyer({...buyer, [event.target.name]:event.target.value, fecha: date, OrdenDeCompra: orden +1})
        console.log(buyer)
    }

    const enviarDatos = (event)=>{
        event.preventDefault();
    }

    const vaciarCarrito = () =>{

        producto.splice(0, producto.length)

    }

    const handleClose = () =>setShow(false);
    const handleShow = () =>setShow(true);

    return <>
        <div className="bg-primary text-center py-5 mb-4">
                    <div className="container">
                        <h1 className="font-weight-light text-white">Formulario</h1>
                    </div>        
        </div>
        <div className='container'>
        <form className='row m-auto text-center' onSubmit={enviarDatos}>
            <div className='col-md-3 my-2'>
                <input placeholder='Ingrese Nombre: '
                className='form-control'
                type='text'
                name='nombre'
                onChange={handleInputChange}> 
                              
                </input>
            </div>
            <div className='col-md-3 my-2'>
                <input placeholder='Ingrese Apellido: '
                className='form-control'
                type='text'
                name='apellido'
                onChange={handleInputChange}> 
                </input>
            </div>
            <div className='col-md-3 my-2'>
                <input placeholder='Ingrese Nombe: '
                className='form-control'
                type='text'
                name='email'
                onChange={handleInputChange}>                
                </input>
            </div>
            <div className='col-md-3 my-2'>
                <button className='btn btn-primary' type='submit' onClick={()=>{Buyer(buyer); vaciarCarrito(); handleShow()}}>Enviar</button>
            </div>
        </form>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Felicitaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>Tu número de orden es {orden +1}
            <div>A la brevedad nos comunicaremos con vos para completar la compra</div>
            </Modal.Body>
            <Modal.Body></Modal.Body>
            <Modal.Footer>                
                <Button variant="primary" onClick={handleClose} >Aceptar</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default Venta
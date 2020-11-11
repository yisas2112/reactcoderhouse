import React, {useState, useEffect} from 'react';  
import Data from './productos.json';


const Item = () =>{
    const[product, setproduct] = useState();

    useEffect(()=>{
        getProduct();        
    },[]);


    const getProduct =() =>{
        const server = new Promise(resolve =>{

            setTimeout(()=>{resolve(Data)},2000);
        })
        server.then(response=>{
            setproduct(response);
        });
    }


    const ReturnProducts = () =>{
        if(!product){
            return <p className="m-3">...Cargando Productos</p>
        }
        const list = product.map((elemento, index)=>{
            while(elemento.id <= 20){
            return <div className="col-3" key={index}>
                        <div className="card card-cascade card-ecommerce m-3">
                            {/* Card Image */}
                            <div className="view view-cascade overlay">                                
                                <img className="card-img-top" src={elemento.img}></img>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* Card Content */}                            
                            <div className="card-body card-body-cascade text-center">   
                                <h5>{elemento.Model} - {elemento.year}</h5>
                                <button type="button" className="btn btn-primary">Comprar</button>
                            </div>
                            {/* Card Footer */}
                            
                            <div className="card-footer m-auto w-100">
                                <span>{elemento.Price}</span>                                                                
                            </div>                            
                        </div>
                    </div>
            }    })
        
        return list;
    
    }

    return <>
    <div>
        <h2 className="h2">Productos</h2>
        <div className="row w-100">
            
        <ReturnProducts/>
        </div> 
    </div>    
    </>


}


export default Item;
import React, {useState, useEffect} from 'react';  
  
const Productos = () =>{
    const[product, setproduct] = useState();


    useEffect(()=>{
        getProductos();
        return () => console.log('Hola');
    },[]);


    const getProductos = () =>{
        const serverResponse = new Promise(resolve =>{


            setTimeout(()=>{
                const products = [
                    {name: 'Zapatillas', price: 2700, size: '42'},
                    {name: 'Camisa', price: 13299, size:'42'},
                    {name:'Reloj', price:4002, size:'12'}];
                resolve(products);
                
            },3000)
        })
        serverResponse.then(response =>{
            setproduct(response);
        });
    }


    const ReturnProducts = () =>{
        if(!product){
            return <p>...Cargando</p>
        }
        const list = product.map((elemento, key) =>{
            return <div key ={key}>
                {elemento.name}
                <b>{elemento.price}</b>
            </div>
        })
        return list;
    }


    return <>
    <div>
        <h1>Hola Coders!</h1>
        <ReturnProducts/>

    </div>

    </>



}


export default Productos;









  
